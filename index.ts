import { type ServeOptions } from "bun"

Bun.serve({
	async fetch(request: Request) {
		const url = new URL(request.url)
		return new Response("ÇASKLDJFHASDF")
	}
} as ServeOptions)
