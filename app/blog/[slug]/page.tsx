type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug} <p>QuangLoc</p> <p>TPHCM</p><p>quanglocdev@gmail.com</p></h1>;
}
