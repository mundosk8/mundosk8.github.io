import styles from "../components/header/Header.module.css";

export default function CGM() {
  return (
    <header className={styles.header}>
      <div className={[styles.container, styles.headerContainer].join(' ')}>
        <h1>CGM</h1>
        <div className={styles.cta}>
          <a
            href="https://site--cgm-remote-monitor--ljk6n9syxxmq.code.run"
            target="_blank"
            className="btn btn-primary"
          >
            Live view sugar levels
          </a>
          <a
            href="https://site--cgm-remote-monitor--ljk6n9syxxmq.code.run/report/"
            target="_blank"
            className="btn btn-primary"
          >
            Reports
          </a>
        </div>
      </div>
    </header>
  );
}
