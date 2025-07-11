import AnimationDebugger from '../components/Animations/Debugger';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AnimationDebugger />
        {children}
      </body>
    </html>
  );
}