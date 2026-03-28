#!/bin/bash
# Daily Object 选题验证脚本
# 用法: bash scripts/validate-selection.sh
# 读取 tmp/daily-candidates.md，检查格式和评分
# exit 0 = 通过, exit 1 = 不通过（输出原因）

CANDIDATES_FILE="$(cd "$(dirname "$0")/.." && pwd)/tmp/daily-candidates.md"
TODAY=$(date +%m-%d)

# 检查 1: 文件存在且非空
if [ ! -f "$CANDIDATES_FILE" ]; then
  echo "❌ 候选文件不存在: $CANDIDATES_FILE"
  echo "请先将选题候选写入此文件"
  exit 1
fi

if [ ! -s "$CANDIDATES_FILE" ]; then
  echo "❌ 候选文件为空"
  exit 1
fi

CONTENT=$(cat "$CANDIDATES_FILE")

# 检查 2: 至少包含 3 个候选
CANDIDATE_COUNT=$(echo "$CONTENT" | grep -ci "候选\|candidate" || true)
if [ "$CANDIDATE_COUNT" -lt 3 ]; then
  echo "❌ 候选数量不足: 找到 $CANDIDATE_COUNT 个，至少需要 3 个"
  echo "请继续搜索更多候选"
  exit 1
fi

# 检查 3: 包含评分关键词（证明做了打分）
HAS_SCORE=0
for keyword in "知名度" "图片" "总分" "故事性" "视觉"; do
  if echo "$CONTENT" | grep -q "$keyword"; then
    HAS_SCORE=$((HAS_SCORE + 1))
  fi
done

if [ "$HAS_SCORE" -lt 3 ]; then
  echo "❌ 评分表不完整: 只找到 $HAS_SCORE/5 个评分维度关键词"
  echo "需要包含: 知名度、图片、总分、故事性、视觉"
  exit 1
fi

# 检查 4: 包含"选择"或"选定"（证明做了最终决定）
if ! echo "$CONTENT" | grep -qE "选择|选定|→.*选|SELECTED"; then
  echo "❌ 没有找到最终选择标记"
  echo "请在文件中标注最终选定的候选"
  exit 1
fi

echo "✅ 选题验证通过"
echo "  - 候选数量: $CANDIDATE_COUNT"
echo "  - 评分维度: $HAS_SCORE/5"
echo "  - 最终选择: 已标注"
exit 0
