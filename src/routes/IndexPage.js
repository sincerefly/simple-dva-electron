import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

import { ipcRenderer } from 'electron';

function IndexPage() {
  
  function quitApp() {
    ipcRenderer.send("msg", "hello")
  }

  return (
    <div className={styles.normal}>
      <h1 className={styles.title} >Yay! Electron with dvajs(roadhog)!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>Now, you can use <code>import &#123; ipcRenderer &#125; from 'electron'</code>.</li>
        <li>Now, Click <button onClick={quitApp}>Quit</button> to quit app.</li>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
