# i18n-next.
### Easy way to translate your nextjs app

## How to use
#### 1) Add module to project.
    npm i --save @west.kh/i18n-next
#### 2) Wrap yor component with `Translation` 
##### Example:
    <Translation messages={pageProps.messages} locale={'uk'}>
        <Component {...pageProps} />
    </Translation>
}

#### 3) Add hook to your component
##### Import:
`import {useTranslation} from "@west.kh/i18n-next";`
##### Init hook
`const {t} = useTranslation('foo');`
##### Wrap sentence
`<span>{t('bar')}</span>`

#### 4) Add config `translationConfig.json` to project root

##### Config content
    {
        "lang": ["uk"],
        "extensions": ["js"]
    }
 
#### 5) generate i18n files (path to files: `src/messages/[lang]/*`)
`node node_modules/@west.kh/i18n-next/generateTranslation.js`

#### 6) Add i18n files to nextProps inside page

    import {getMessages} from "@west.kh/i18n-next";    

    export async function getStaticProps({locale}) {
        return {
            props: {
                messages: await getMessages(['foo'], locale)
            }
        }
    }

### ! Important.
##### 1 ) `desktop` is default value using after all breakpoints
##### 2 ) Props changes only if breakpoint change.
##### 3 ) Do not init `Resize(props.dispatch)` in all components. Only in main.
