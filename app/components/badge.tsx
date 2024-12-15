
function getBadge(text: string) {
    switch (text) {
        case "kubernetes":
            return <img className="me-2 rounded" alt="Static Badge" src="https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=white" />;
        case "sre":
            return <img className="me-2 rounded" alt="Static Badge" src="https://img.shields.io/badge/SRE-326CE5" />;
        case "prometheus":
            return <img className="me-2 rounded" alt="Static Badge" src="https://img.shields.io/badge/Prometheus-E6522C?logo=Prometheus&logoColor=white" />;
        case "istio":
            return <img className="me-2 rounded" alt="Static Badge" src="https://img.shields.io/badge/Istio-466BB0?logo=Istio&logoColor=white" />;
        case "envoy":
            return <img className="me-2 rounded" alt="Static Badge" src="https://img.shields.io/badge/Envoy-AC6199?logo=envoyproxy&logoColor=white" />;
        case "react":
            return <img className="me-2 rounded" alt="Static Badge" src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white" />;
        case "markdown":
            return <img className="me-2 rounded" alt="Static Badge" src="https://img.shields.io/badge/Markdown-000000?logo=markdown&logoColor=white" />;
        case "oauth2":
            return <img className="me-2 rounded" alt="Static Badge" src="https://img.shields.io/badge/OAuth2-EB5424?logo=auth0&logoColor=white" />;
        case "linux":
            return <img className="me-2 rounded" alt="Static Badge" src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white" />;
        case "docker":
            return <img className="me-2 rounded" alt="Static Badge" src="https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=black" />;
        default:
            return <img className="me-2 rounded" alt="Static Badge" src={`https://img.shields.io/badge/${text}-326CE5`} />;
    }
}

export default function Badge({ text }: { text: string }) {
    return (
        getBadge(text)
    );
}