
function getBadge(text: string) {
    switch (text) {
        case "sre":
            return <img className="me-2 px-1 py-0.5 rounded" alt="Static Badge" src="https://img.shields.io/badge/SRE-326CE5"/>;
        case "prometheus":
            return <img className="me-2 px-1 py-0.5 rounded" alt="Static Badge" src="https://img.shields.io/badge/Prometheus-E6522C?logo=Prometheus&logoColor=white"/>;
        case "istio":
            return <img className="me-2 px-1 py-0.5 rounded" alt="Static Badge" src="https://img.shields.io/badge/Istio-466BB0?logo=Istio&logoColor=white"/>;
        case "envoy":
            return <img className="me-2 px-1 py-0.5 rounded" alt="Static Badge" src="https://img.shields.io/badge/Envoy-AC6199?logo=envoyproxy&logoColor=white"/>;
        case "react":
            return <img className="me-2 px-1 py-0.5 rounded" alt="Static Badge" src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white"/>;
        case "markdown":
            return <img className="me-2 px-1 py-0.5 rounded" alt="Static Badge" src="https://img.shields.io/badge/Markdown-000000?logo=markdown&logoColor=white"/>;
        case "yellow":
            return <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">{text}</span>;
        case "indigo":
            return <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">{text}</span>;
        case "envoy":
            return <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">{text}</span>;
        case "oauth2":
            return <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400">{text}</span>;
        default:
            return <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{text}</span>;
    }
}

export default function Badge({ text }: {text: string}) {
    return (
        getBadge(text)
    );
}