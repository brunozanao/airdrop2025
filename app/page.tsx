import Web3ConnectButton from "./_components/Web3ConnectButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">Carbon.Std | 𝗦𝘂𝘀𝘁𝗮𝗶𝗻𝗮𝗯𝗶𝗹𝗶𝘁𝘆 𝗕𝗼𝗻𝗱𝘀 + 𝗡𝗙𝗧 = 𝗥𝗲𝗙𝗶
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">The Future Is Green, and Goes Beyond the Carbon Market and Blockchain.</p>
      <Web3ConnectButton />
    </main>
  );
}
