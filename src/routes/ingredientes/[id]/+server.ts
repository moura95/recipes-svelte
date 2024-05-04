export const GET = async ({ setHeaders, params }) => {
	try {
		const req = await fetch(`https://gold-anemone-wig.cyclic.app/receitas/tipo/${params.id}`);
		const cacheControl = req.headers.get('cache-control');
		const eTag = req.headers.get('etag');
		if (eTag) {
			setHeaders({ etag: eTag });
		}
		if (cacheControl) {
			setHeaders({ 'cache-control': cacheControl });
		} else {
			setHeaders({ 'cache-control': 'public, max-age=1800, must-revalidate' });
		}
		const res = await req.json();
		return new Response(JSON.stringify({ results: res }), { status: 200 });
	} catch (err: any) {
		return new Response(JSON.stringify({ error: err }), { status: 400 });
	}
};
