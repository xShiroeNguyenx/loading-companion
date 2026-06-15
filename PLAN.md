# PLAN — Loading Companion: Thư viện 1000 kiểu Loading

## Context — Vì sao làm dự án này

Mục tiêu: tổng hợp **mọi kiểu loading animation** trên internet vào **một trang demo + thư viện**, đạt mốc **~1000 loader**. Điểm khác biệt: thư viện này được thiết kế để **AI đọc được** — một AI agent có thể tra cứu catalog có cấu trúc, chọn một loader theo nhu cầu, và lấy code dán vào project. Nói cách khác: nửa là **gallery cho người xem**, nửa là **registry máy đọc được** (giống registry của shadcn/ui + metadata kiểu icon library).

Quyết định đã chốt:
- **Stack**: Vanilla HTML/CSS/JS + Vite (loader là CSS thuần, copy-paste được, không lệ thuộc framework).
- **Định dạng cho AI**: `registry.json` là nguồn chuẩn máy đọc + sinh `registry.md` tự động + **một MCP server** để AI query theo category/tag.
- **Đạt 1000**: Hybrid — tổng hợp các bộ mã nguồn mở MIT (ghi credit đầy đủ) + sinh biến thể tham số (màu/size/tốc độ/số chấm) + tự viết bù các category còn thiếu.
- **Phạm vi**: 4 nhóm — (1) CSS spinner/dots/bars lõi, (2) Skeleton, (3) Progress/percentage, (4) SVG/JS-driven.

## Nguyên tắc kiến trúc cốt lõi

**Single source of truth = thư mục từng loader** (`loaders/<category>/<id>/`). Từ đó *sinh ra* `registry.json`, `registry.md`, gallery, và dữ liệu cho MCP server. Không bao giờ sửa tay `registry.json` — nó luôn là output của script build.

Mỗi loader dùng **CSS custom properties** cho size/color/speed (`--lc-size`, `--lc-color`, `--lc-speed`...). Đây là chìa khoá để: (a) sinh biến thể tham số sạch sẽ, (b) loader themeable, (c) AI dễ tuỳ biến.

## Cấu trúc thư mục

```
loading-companion/
├── PLAN.md
├── README.md                     # mô tả, cách dùng, cách add MCP vào Claude
├── ATTRIBUTION.md                # credit + license từng nguồn
├── package.json                  # npm workspaces (root + mcp)
├── vite.config.js
├── index.html                    # vỏ gallery demo
├── schema/loader.schema.json     # JSON Schema cho meta.json
├── loaders/                      # ★ SOURCE OF TRUTH — 1 thư mục / loader
│   └── <category>/<id>/{meta.json, loader.html, loader.css, loader.js?}
├── data/                         # ★ GENERATED — đừng sửa tay
│   ├── registry.json             # master index máy đọc (cho AI + gallery)
│   └── registry.md               # catalog Markdown sinh tự động
├── src/                          # front-end gallery (JS thuần)
│   ├── main.js, gallery.js, search.js, codeview.js
│   └── styles/app.css
├── scripts/                      # build & codegen (Node ESM)
│   ├── build-registry.mjs, validate.mjs, generate-variants.mjs
│   └── import/                   # importer cho từng bộ nguồn
└── mcp/                          # MCP server (search_loaders/get_loader/...)
```

## Schema metadata mỗi loader (`meta.json`)

Code thực tế nằm trong `loader.html` / `loader.css` / `loader.js` cùng thư mục (theo convention); `meta.json` chỉ chứa metadata. Build script đọc các file đó và inline code vào `registry.json`.

```jsonc
{
  "id": "spinner-rotating-plane",   // unique, kebab-case, prefix theo category
  "name": "Rotating Plane",
  "category": "spinner",
  "tags": ["rotate", "square", "minimal"],
  "tech": "css",                     // css | css+js | svg | webcomponent
  "framework": "none",
  "dependencies": [],
  "variables": { "--lc-size": "40px", "--lc-color": "#5b8def", "--lc-speed": "1.2s" },
  "source": { "name": "Loading Companion", "url": "", "author": "" },
  "license": "MIT",
  "generated": false,                // true nếu là biến thể sinh tự động
  "baseId": null                     // nếu generated: trỏ về template gốc
}
```

`registry.json` = `{ "$schema", "version", "count", "categories": {<cat>: <count>}, "tags": [...], "items": [ <meta + html/css/js inline> ] }`.

## Taxonomy category

`spinner`, `dots`, `bars`, `ring`, `pulse`, `ripple`, `wave`, `bounce`, `flip`, `morph`, `orbit`, `3d`, `skeleton`, `progress`, `svg`, `text`. Query tinh hơn bằng `tags`.

## Chiến lược nguồn để đạt 1000 (hybrid)

1. **Import bộ MIT rõ ràng** (chuẩn hoá về `loaders/` + ghi `source`/`license`): SpinKit, Loaders.css, Three Dots, SVG Loaders, Epic Spinners, ldrs, Whirl, nền Tailwind/DaisyUI → ~250 loader gốc sạch bản quyền.
2. **Curate css-loaders.com (Temani Afif, 600+)** — ⚠️ xác minh điều khoản tái phân phối trước; ưu tiên credit + re-implement theo pattern.
3. **Sinh biến thể tham số** từ template (đổi `--lc-*`, số chấm, easing, hướng) — khác biệt có ý nghĩa, đánh dấu `generated:true` + `baseId`. Build log rõ số gốc vs số sinh.
4. **Tự viết bù** category thiếu.

## Hiệu năng gallery cho 1000 item

- `content-visibility: auto` + `contain-intrinsic-size` mỗi card (CSS virtualization native).
- IntersectionObserver: chỉ kích hoạt loader gần viewport; ngoài viewport `animation-play-state: paused`.
- Render theo lô khi cuộn. Search/filter theo category/tag/tech/text. Nút copy code. Dark mode.

## MCP server

Node MCP (stdio) đọc `data/registry.json`: `list_categories`, `search_loaders`, `get_loader`, `get_loader_code`.

## Cột mốc — trạng thái

- **M0 ✅** Nền móng + pipeline end-to-end (seed→variants→build→validate→gallery→MCP).
- **M1/M2 ✅** **97 thiết kế gốc** nguyên bản (MIT, tự viết) trải đủ 16 category — gồm 3d, và đào sâu skeleton/progress/svg/text. (Đường "self-author"; importer các bộ MIT để dành khi cần thêm "kiểu".)
- **M3 ✅** Generator multi-axis (auto theme 12 màu) → **1143 tổng = 97 gốc + 1046 theme variant**. Đạt mốc ≥1000. Build báo cáo gốc/sinh trung thực.
- **M4 ✅** MCP server: 6 tool (list_categories/search_loaders/get_loader/get_loader_code/list_tags/get_random) + tài liệu + smoke-test.
- **M5 ✅** Gallery: filter category/tech/nguồn, Random, Copy nhanh, dark mode; perf (content-visibility + IO + fetch runtime → JS ~8KB); deploy docs.

> "1000" = tổng mục catalog (1143). Số **kiểu phân biệt** = 97 thiết kế gốc × 12 màu theme. Muốn tăng số *kiểu thật*: thêm batch loader gốc (scripts/seed/batch-NN.mjs) hoặc import bộ MIT (sau khi xác nhận bản quyền — xem ATTRIBUTION.md).

## Rủi ro

- **Bản quyền**: không bulk-import css-loaders.com khi chưa xác nhận; duy trì `ATTRIBUTION.md`. Variant kế thừa license của `baseId`.
- **Không độn số giả**: variant phải khác biệt có ý nghĩa; build in breakdown gốc/sinh.
- **Hiệu năng**: bắt buộc `content-visibility` + pause ngoài viewport.

## Verification

1. `npm run build:registry` → tạo `data/registry.json`, in tổng + breakdown, 0 trùng id, schema-valid.
2. `npm run validate` → meta hợp lệ, file code tồn tại, có `license`.
3. `npm run dev` → gallery chạy mượt, search/filter/copy/dark mode OK.
4. Assert `count >= 1000` + breakdown gốc/sinh.
5. MCP: gọi `search_loaders`/`get_loader` trả đúng metadata + code.
