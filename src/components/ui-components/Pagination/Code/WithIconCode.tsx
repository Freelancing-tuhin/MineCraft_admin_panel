
import CodeModal from "../../CodeModal";

const WithIconCode = () => {
  return (
    <div>
      <CodeModal>
        {`
                  
      
      import { Pagination } from "flowbite-react";
      import { useState } from "react";

      const [currentPages, setCurrentPages] = useState(1);
      const onPageChanges = (page: number) => setCurrentPages(page);
      
      <Pagination
        currentPage={currentPages}
        totalPages={100}
        onPageChange={onPageChanges}
        showIcons
      />
                `}
      </CodeModal>
    </div>
  );
};

export default WithIconCode;
