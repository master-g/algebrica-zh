# Noto Serif SC 字体子集

`noto-serif-sc-algebrica.woff2` 从 Google Fonts 发布的 Noto Serif SC 可变 TTF 生成。

- 上游文件：`NotoSerifSC[wght].ttf`
- 上游地址：https://github.com/google/fonts/tree/main/ofl/notoserifsc
- 上游 SHA-256：`050080d9255a86808f2945bffac582b31ef32bc36411ce29563b4961670c66f9`
- 子集 SHA-256：`9029aeb63e994411d11cfe73e39d9f11dfcd9d13c3bcdf4de0f9976e689a84c0`
- 子集字符：`noto-serif-sc-algebrica.chars.txt` 列出的 1,575 个汉字与中文标点，加 ASCII、拉丁补充、希腊字母和常用数学符号，共 1,729 个码位
- 字重范围：200–900
- 许可证：SIL Open Font License 1.1，见 `LICENSES/OFL-Noto-Serif-SC.txt`

该文件是修改后的字体子集，不是上游完整字体。生产构建由 Astro 生成带内容哈希的字体资源。

## 重新生成

`tests/unit/visual-contracts.test.mjs` 检查 `content-zh/`、`src/`、`sections.yaml`、`glossary.yaml` 里的中文字符都在字符清单内，失败时列出缺的字。把缺字追加到 `noto-serif-sc-algebrica.chars.txt`，再用 fontTools（需 `brotli`）从上游 TTF 重新生成，保留现有子集的非中文码位：

```sh
python3 - > unicodes.txt <<'EOF'
from fontTools.ttLib import TTFont
old = TTFont('src/assets/fonts/noto-serif-sc-algebrica.woff2').getBestCmap()
cjk = lambda c: 0x3000 <= c <= 0x303f or 0x3400 <= c <= 0x9fff or 0xff00 <= c <= 0xffef
keep = {c for c in old if not cjk(c)}
keep |= {ord(c) for c in open('src/assets/fonts/noto-serif-sc-algebrica.chars.txt', encoding='utf8').read().strip()}
print(','.join('U+%04X' % c for c in sorted(keep)))
EOF
python3 -m fontTools.subset 'NotoSerifSC[wght].ttf' --unicodes-file=unicodes.txt \
  --layout-features='*' --name-IDs='*' --name-languages='*' --flavor=woff2 \
  --output-file=src/assets/fonts/noto-serif-sc-algebrica.woff2
```

生成后更新本文件的子集 SHA-256 与字符数。
