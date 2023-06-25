import useIsMobile from '../../utils/useIsMobile';

const ShowOnMobile = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isMobile = useIsMobile();
  if (!isMobile) return null;
  return children;
};

export default ShowOnMobile;
