import type { APIRoute } from 'astro';

export async function GET({ params }: { params: { id: string } }) {
  const id = params.id;
  //   const product = await getProduct(id);

  //   if (!product) {
  //     return new Response(null, {
  //       status: 404,
  //       statusText: 'Not found',
  //     });
  //   }

  return new Response(JSON.stringify({ message: 'Hello world' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
