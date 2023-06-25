import useIsMobile from '../../utils/useIsMobile';

const HideOnMobile = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isMobile = useIsMobile();
  if (isMobile) return null;
  return children;
};

export default HideOnMobile;
