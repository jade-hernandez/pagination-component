import { useState } from "react";
import Pagination from "./components/Pagination";

function App() {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(1);
  const [page3, setPage3] = useState(1);
  const [page4, setPage4] = useState(5);

  return (
    <main className='mx-auto mt-50 flex w-full min-w-dvw flex-col items-center justify-center lg:min-h-screen'>
      <div className='flex flex-col gap-6'>
        <Pagination
          totalPages={3}
          activePage={page1}
          onPageChange={setPage1}
        />

        <Pagination
          totalPages={3}
          activePage={page2}
          onPageChange={setPage2}
          showLabels={false}
        />

        <Pagination
          totalPages={10}
          activePage={page3}
          onPageChange={setPage3}
        />
        <div className='hidden md:block'>
          <Pagination
            totalPages={10}
            activePage={page4}
            onPageChange={setPage4}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
