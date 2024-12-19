import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

//change meta data
export const metadata = {
    title: "show_prompt",
    description: 'Share AI prompts'
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    <Nav/>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout;
