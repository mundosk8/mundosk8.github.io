export default function CGM() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-tl from-teal-400 to-purple-700">
      <div className="flex flex-col items-center justify-center h-full gap-y-12">
        <h1 className="font- font-extrabold text-center text-6xl text-slate-800">
          CGM
        </h1>
        <span className="w-2/3 rounded-lg bg-gradient-to-br from-gray-300 to-transparent p-10 shadow-lg shadow-gray-300">
          Welcome to your CGM Dashboard! Here, you can access real-time data on
          your glucose levels, allowing you to monitor and manage your health
          with ease. The live view feature gives you up-to-the-minute readings,
          helping you track trends and stay informed of any significant changes
          throughout the day. In addition to live monitoring, you can download
          detailed reports, offering insights into your glucose patterns over
          time. These reports are perfect for sharing with your healthcare
          provider or keeping a personal record of your progress. Stay connected
          and in control with your CGM!
          <div className="flex justify-center gap-5 mt-10 flex-col lg:flex-row">
            <a
              href="https://site--cgm-remote-monitor--ljk6n9syxxmq.code.run"
              target="_blank"
              className="bg-gradient-to-tl from-teal-400 to-blue-500 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-blue-500 rounded-xl py-4 px-8 self-center text-center w-full sm:min-w-36"
            >
              Live view
            </a>
            <a
              href="https://site--cgm-remote-monitor--ljk6n9syxxmq.code.run/report/"
              target="_blank"
              className="bg-gradient-to-tl from-teal-400 to-blue-500 hover:from-purple-500 hover:to-blue-500 shadow-blue-500 rounded-xl py-4 px-8 self-center text-center w-full sm:min-w-36"
            >
              Reports
            </a>
          </div>
        </span>
        <iframe
          className="w-2/3 h-96 bg-gradient-to-tl from-teal-400 to-blue-500 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-blue-500 rounded-xl"
          src="https://site--cgm-remote-monitor--ljk6n9syxxmq.code.run/"
        />
      </div>
    </main>
  );
}
