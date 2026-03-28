#!/bin/bash
set -e

# Daily Object 双端部署脚本
# 用法: bash scripts/deploy.sh "Add MM-DD: Title"

COMMIT_MSG="${1:-Daily Object update}"
REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_DIR"

echo "=== Step 1: 检查 Cloudflare token ==="
CF_TOKEN="$(python3 -c 'import json; print(json.load(open("/Users/samyuan/.config/cloudflare/config.json"))["api_token"])')"
if [ -z "$CF_TOKEN" ]; then
  echo "❌ Cloudflare API token 为空！检查 ~/.config/cloudflare/config.json"
  exit 1
fi

# 验证 token 有效
CF_CHECK=$(curl -s -o /dev/null -w "%{http_code}" -H "Authorization: Bearer $CF_TOKEN" "https://api.cloudflare.com/client/v4/user/tokens/verify")
if [ "$CF_CHECK" != "200" ]; then
  echo "❌ Cloudflare token 无效 (HTTP $CF_CHECK)！请更新 token"
  exit 1
fi
echo "✅ Cloudflare token 有效"

echo "=== Step 2: Git commit + push ==="
git add -A
git commit -m "$COMMIT_MSG" || echo "⚠️ Nothing to commit"
git push origin main
echo "✅ Git push 完成"

echo "=== Step 3: Build for GitHub Pages (base=/the-daily-object/) ==="
unset CF_PAGES
npm run build
npx gh-pages -d dist
echo "✅ GitHub Pages 部署完成"

echo "=== Step 4: Build for Cloudflare (base=/) ==="
export CLOUDFLARE_API_TOKEN="$CF_TOKEN"
export CLOUDFLARE_ACCOUNT_ID="abd70cd0575e6ebe933999645e6fddd2"
export CF_PAGES=1
npm run build
echo "✅ Cloudflare Build 完成"

echo "=== Step 5: Deploy to Cloudflare Pages ==="
npx wrangler pages deploy dist --project-name the-daily-object --commit-dirty=true
echo "✅ Cloudflare Pages 部署完成"

echo ""
echo "=== 部署完成 ==="
echo "GitHub Pages: https://nomibonnie.github.io/the-daily-object/"
echo "Cloudflare:   https://daily.sanono.xyz"
