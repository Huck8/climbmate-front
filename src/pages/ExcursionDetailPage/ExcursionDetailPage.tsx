import { useParams } from 'react-router-dom';
import ExcursionCardDetails from '../../features/excursion/components/excursion-card-detail/ExcursionCardDetail';

const ExcursionDetailPage = () => {
  const { _id } = useParams();

  return (
    <section>
      <ExcursionCardDetails _id={_id ?? ''} />
    </section>
  );
};

export default ExcursionDetailPage;
