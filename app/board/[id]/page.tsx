export default function SinglePage({ params }: { params: { id: string } }) {
  return <div className="mt-10">Board {params.id}</div>
}
