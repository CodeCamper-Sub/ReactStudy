import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goArticles = () => {
    navigate('/articles', { replace: true });
  };
  // replace는 현재 페이지를 페이지 기록에 남기지 않는다.

  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontsize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
