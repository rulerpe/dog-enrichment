import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <div className="flex items-center">
            <img
              src="/images/scent-savvy-logo.png"
              alt="scent-savvy-logo"
              className="h-8 mr-2"
            />
            <span className="text-xl font-bold">
              Scent Savvy - Cainne Sent Enrichment Framwork
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
