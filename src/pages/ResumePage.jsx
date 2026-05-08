import Education from '../components/Education'
import Experience from '../components/Experience'

export default function ResumePage() {
  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900/40">
      <Experience />
      <Education />
    </main>
  )
}
