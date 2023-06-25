export default function Page({ params }: { params: { target: string } }) {
  return <div>search/page/{params.target}</div>;
}
