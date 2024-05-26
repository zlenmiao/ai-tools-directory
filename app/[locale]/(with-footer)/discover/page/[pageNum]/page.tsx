import DiscoverList from '../../DiscoverList';

export default function page({ params: { pageNum } }: { params: { pageNum: string | undefined } }) {
  return <DiscoverList pageNum={pageNum} />;
}
