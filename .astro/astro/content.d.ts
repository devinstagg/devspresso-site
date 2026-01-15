declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"mixes": {
"believe-in-love-mix.md": {
	id: "believe-in-love-mix.md";
  slug: "believe-in-love-mix";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"clean-mix-with-me-episode-1.md": {
	id: "clean-mix-with-me-episode-1.md";
  slug: "clean-mix-with-me-episode-1";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"clean-mix-with-me-episode-2-deadmau5.md": {
	id: "clean-mix-with-me-episode-2-deadmau5.md";
  slug: "clean-mix-with-me-episode-2-deadmau5";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"coachella-2022-mix.md": {
	id: "coachella-2022-mix.md";
  slug: "coachella-2022-mix";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"coachella-2023-electronic-mix.md": {
	id: "coachella-2023-electronic-mix.md";
  slug: "coachella-2023-electronic-mix";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"coachella-2024-electronic-mix.md": {
	id: "coachella-2024-electronic-mix.md";
  slug: "coachella-2024-electronic-mix";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"coachella-2025-electronic-dance-mix.md": {
	id: "coachella-2025-electronic-dance-mix.md";
  slug: "coachella-2025-electronic-dance-mix";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"dance-at-home-mix-001.md": {
	id: "dance-at-home-mix-001.md";
  slug: "dance-at-home-mix-001";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"dance-at-home-mix-002.md": {
	id: "dance-at-home-mix-002.md";
  slug: "dance-at-home-mix-002";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"dance-at-home-mix-003.md": {
	id: "dance-at-home-mix-003.md";
  slug: "dance-at-home-mix-003";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"day-1-coachella-2023-friday-mix.md": {
	id: "day-1-coachella-2023-friday-mix.md";
  slug: "day-1-coachella-2023-friday-mix";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"day-2-coachella-2023-saturday-mix.md": {
	id: "day-2-coachella-2023-saturday-mix.md";
  slug: "day-2-coachella-2023-saturday-mix";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"day-3-coachella-2023-sunday-mix.md": {
	id: "day-3-coachella-2023-sunday-mix.md";
  slug: "day-3-coachella-2023-sunday-mix";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"disco-house-mix.md": {
	id: "disco-house-mix.md";
  slug: "disco-house-mix";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"dombresky-quick-mix.md": {
	id: "dombresky-quick-mix.md";
  slug: "dombresky-quick-mix";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"lane-8-live-mix-set.md": {
	id: "lane-8-live-mix-set.md";
  slug: "lane-8-live-mix-set";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"lane-8-mix.md": {
	id: "lane-8-mix.md";
  slug: "lane-8-mix";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"laundry-day-progressive-house-mix.md": {
	id: "laundry-day-progressive-house-mix.md";
  slug: "laundry-day-progressive-house-mix";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"rufus-du-sol-mix.md": {
	id: "rufus-du-sol-mix.md";
  slug: "rufus-du-sol-mix";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
"workin-in-the-club-house-mix.md": {
	id: "workin-in-the-club-house-mix.md";
  slug: "workin-in-the-club-house-mix";
  body: string;
  collection: "mixes";
  data: InferEntrySchema<"mixes">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
