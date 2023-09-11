Bun.serve({
	host: "localhost",
	port: 8080,
	fetch: handler,
});

console.log("listening")
let todoArray = []

async function handler(request: Request): Reseponse {
	const url = new URL(request.url);

	if (url.pathname === "" || url.pathname === "/")
		return new Response(Bun.file("index.html"));

	if (url.pathname === "/todos" && request.method === "POST"){
		console.log(request.body)
		const { todo } = await request.json();
		console.log(todo)
		todoArray.push(todo)
		
		return new Response("ASD");
	}

	return new Response("not found", { status: 404 });
}
