# algebrica-zh Makefile —— 统一功能入口
#
# 用法: make <target> [ARTICLE=section/slug] [FORCE=1]
#
# 前置条件:
#   - Node.js 22 与 npm
#   - 英文上游 checkout（默认 ../algebrica，可用 ALGEBRICA_SOURCE_DIR 覆盖），
#     HEAD 必须等于 upstream-lock.json 的提交
#
# 透传给 npm 脚本的环境变量: ALGEBRICA_SOURCE_DIR、SITE_URL、SITE_BASE、DEV_SMOKE_BASES

NPM ?= npm
NODE ?= node
# ARTICLE: 单篇译文 section/slug，如 numbers/modulo-operator；validate、audit-topology 必填，sync-graphs 可选
ARTICLE ?=
# FORCE: 非空时 build 加 --force，绕过内容缓存（改了 Markdown 管线插件后必须用）
FORCE ?=

BUILD_FLAGS := $(if $(FORCE),-- --force,)
REQUIRE_ARTICLE = @test -n "$(ARTICLE)" || { echo "需要 ARTICLE=section/slug"; exit 1; }

.DEFAULT_GOAL := help

.PHONY: help install dev build preview test test-unit test-smoke ci \
	check-upstream check-licenses check-public-history check-static-site check-public-release \
	audit-upstream sync-svg-palette sync-svg-structure sync-graphs provenance \
	translation-status translation-verify validate validate-all audit-topology

help: ## 显示本帮助
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-22s\033[0m %s\n", $$1, $$2}'

install: ## 按 lockfile 安装依赖
	$(NPM) ci

dev: ## 启动 Astro 开发服务器
	$(NPM) run dev

build: ## 构建静态站点（含上游检查、SVG 同步与渲染门禁；FORCE=1 全量重渲染）
	$(NPM) run build $(BUILD_FLAGS)

preview: ## 预览构建产物
	$(NPM) run preview

test: ## 单元测试 + 开发服务器冒烟测试
	$(NPM) test

test-unit: ## 单元测试
	$(NPM) run test:unit

test-smoke: ## 开发服务器冒烟测试（慢，约数分钟）
	$(NPM) run test:smoke

ci: ## 按 CI 顺序在本地跑全部门禁
	$(NPM) run test:unit
	$(NPM) run check:public-history
	$(NPM) run test:smoke
	$(NPM) run build
	$(NPM) run check:public-release

check-upstream: ## 检查上游 checkout 是否等于锁定提交
	$(NPM) run check:upstream

check-licenses: ## 检查依赖许可证
	$(NPM) run check:licenses

check-public-history: ## 扫描全部 Git 历史中的禁止文件
	$(NPM) run check:public-history

check-static-site: ## 检查构建产物的内部链接
	$(NPM) run check:static-site

check-public-release: ## 发布门禁（需先 build）
	$(NPM) run check:public-release

audit-upstream: ## 审计译文与上游的同步状况
	$(NPM) run audit:upstream

sync-svg-palette: ## 同步本地化 SVG 的配色（须在改锁之前运行）
	$(NPM) run sync:localized-svg-palette

sync-svg-structure: ## 同步本地化 SVG 的结构（须在改锁之前运行）
	$(NPM) run sync:localized-svg-structure

sync-graphs: ## 从 algebrica.org 抓取英文知识图谱（ARTICLE= 只抓一篇）
	$(NODE) scripts/sync-article-graphs.mjs $(if $(ARTICLE),--target $(ARTICLE),)

provenance: ## 重新生成 public/assets/provenance.json
	$(NODE) scripts/generate-asset-provenance.mjs

translation-status: ## 列出 current / stale / missing 译文
	$(NODE) scripts/translation-status.mjs

translation-verify: ## 校验全库译文状态与结构
	$(NODE) scripts/translation-status.mjs --verify

validate: ## 单篇译文准入校验（ARTICLE=section/slug）
	$(REQUIRE_ARTICLE)
	$(NODE) scripts/validate-translation.mjs $(ARTICLE)

validate-all: ## 审计全部存量译文
	$(NODE) scripts/validate-translation.mjs --all

audit-topology: ## 单篇公式拓扑审计（ARTICLE=section/slug）
	$(REQUIRE_ARTICLE)
	$(NODE) .agents/skills/algebrica-translation-supervisor/scripts/audit-latex-topology.mjs $(ARTICLE)
