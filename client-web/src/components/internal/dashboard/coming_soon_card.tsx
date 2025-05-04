import { Clock } from "lucide-react";

interface ComingSoonProps {
    pageName: string;
  }

const ComingSoon: React.FC<ComingSoonProps> = ({ pageName }) => {
  pageName = pageName.toLowerCase();
  pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">{pageName}</h1>

      <div className="bg-white rounded-lg shadow p-8 text-center">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
            <Clock size={24} className="text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {pageName} Coming Soon
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            We&apos;re working on building this feature. Check back in a few weeks!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
