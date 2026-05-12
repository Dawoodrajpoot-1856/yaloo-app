interface PageProps {
  params: Promise<{ slug: string }>;
}

const formatSlug = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default async function PackagePage({ params }: PageProps) {
  const { slug } = await params;
  const displayTitle = formatSlug(slug);

  return (
    <div className="p-10">
      <nav className="text-sm text-gray-500 mb-4">
        Home / Packages /
        <span className="text-black font-medium">{displayTitle}</span>
      </nav>

      <h1 className="text-3xl font-bold">eSIM Plans for {displayTitle}</h1>

      <p className="text-gray-600">
        Get instant connectivity in {displayTitle} with our digital SIM cards.
      </p>

      <div className="grid gap-4 mt-8"></div>
    </div>
  );
}
