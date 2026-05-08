import { useParams } from 'react-router-dom'
import ProjectDetails from '../components/ProjectDetails'

export default function ProjectDetailPage() {
  const { slug } = useParams()

  return <ProjectDetails slug={slug} />
}
