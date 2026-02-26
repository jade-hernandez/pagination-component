import { useState } from "react";
import Pagination from "./components/Pagination";

function App() {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(1);
  const [page3, setPage3] = useState(1);
  const [page4, setPage4] = useState(5);

  return (
    <main className='mx-auto flex min-h-dvh w-full min-w-dvw flex-col items-center gap-6 pt-50 lg:pt-51'>
      <Pagination
        totalPages={3}
        activePage={page1}
        onPageChange={setPage1}
        ariaLabel='Pagination: 3 pages with labels'
      />

      <Pagination
        totalPages={3}
        activePage={page2}
        onPageChange={setPage2}
        showLabels={false}
        ariaLabel='Pagination: 3 pages compact'
      />

      <Pagination
        totalPages={10}
        activePage={page3}
        onPageChange={setPage3}
        ariaLabel='Pagination: 10 pages full labels'
      />

      <div className='hidden md:block'>
        <Pagination
          totalPages={10}
          activePage={page4}
          onPageChange={setPage4}
          ariaLabel='Pagination: 10 pages desktop'
        />
      </div>
    </main>
  );
}

export default App;
