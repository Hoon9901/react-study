import React, { useState } from 'react';

const TabContext = React.createContext();

function Tabs({ children }) {
    const [selectedTab, setTab] = useState(false);

    return (
        <TabContext.Provider value={{ selectedTab, setTab }}>
            <ul className="tab-container">{children}</ul>
        </TabContext.Provider>
    );
}
// useContext 에러로 인한 주석
// Tabs.Item = ({ value, children }) => {
//     const ctx = React.useContext(TabContext);

//     if (ctx === undefined) {
//         throw new Error(
//             '<Tabs.Item> 컴포넌트는 <Tabs> 컴포넌트 아래에서만 사용',
//         );
//     }
//     const { selectedTab, setTab } = ctx;
//     return (
//         <li
//             onClick={() => setTab(value)}
//             className={`tab-item ${selectedTab === value ? 'selected' : ''}`}
//         >
//             {children}
//         </li>
//     );
// };

const Page = () => {
    return <Tabs></Tabs>;
};

export default Page;
