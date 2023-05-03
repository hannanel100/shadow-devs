// Layout component for the resoureces page

// Path: app/resources/layout.tsx

// Compare this snippet from app/dashboard/layout.tsx:

// ResourceLayout is a wrapper component

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mt-20 flex flex-row">{children}</div>;
}
