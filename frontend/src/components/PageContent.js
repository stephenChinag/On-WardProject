import styles from "./PageContent.module.css";

const PageContent = (props) => {
	const { title, children } = props;
	return (
		<div className={styles.content}>
			<h1> {title}</h1>
			{children}
		</div>
	);
};

export default PageContent;
