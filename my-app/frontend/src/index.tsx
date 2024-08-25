import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './MyApp.tsx';
import './index.css';


const root = ReactDOM.createRoot (
    document.getElementById('root') as HTMLElement );
root.render(
    <React.StrictMode>
        <MyApp />
    </React.StrictMode>
);



/*StrictModeは開発環境において、コンポーネントの一般的なバグを早期に見つけるために使用される。
  本番環境には影響を与えない。
 */