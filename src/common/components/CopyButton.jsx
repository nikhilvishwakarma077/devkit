import { Copy } from "lucide-react";
import Button from "./Button";

const CopyButton = ({ onClick }) => {
    return (
        <Button
            variant="outline"
            onClick={onClick}
            className="flex items-center gap-2"
        >
            <Copy size={16} />
            Copy
        </Button> 
    );
};

export default CopyButton;