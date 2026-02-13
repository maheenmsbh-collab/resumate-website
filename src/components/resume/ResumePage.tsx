export default function ResumePage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        w-[210mm]
        min-h-[297mm]
        bg-white
        mx-auto
        my-6
        p-10
        shadow-xl
        print:shadow-none
        print:my-0
      "
    >
      {children}
    </div>
  );
}
