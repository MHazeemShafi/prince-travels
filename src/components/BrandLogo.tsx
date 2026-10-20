const BrandLogo = () => {
  return (
    <>
      <svg className="brand__symbol" viewBox="0 0 24 18" aria-hidden="true">
        <path d="M3 13.5 1.5 5l5.2 3.4L12 1.5l5.3 6.9L22.5 5 21 13.5H3Z" fill="currentColor" />
        <path d="M3.5 15.5h17" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="brand__wordmark">
        <span className="brand__name">PRINCE</span>
        <span className="brand__descriptor">TRAVELS</span>
      </span>
    </>
  );
};

export default BrandLogo;