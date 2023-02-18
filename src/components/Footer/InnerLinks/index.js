import styles from "./index.module.scss";

const InnerLinks = () => {
    return (
      <>
        <div className={`col-6 col-lg-2 ${styles.innerLinks}`}>
          <p>با ویتسل</p>
          <ul>
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>حریم خصوصی</li>
            <li>شرایط بازگشت کالا</li>
          </ul>
        </div>
        <div className={`col-6 col-lg-2 ${styles.innerLinks}`}>
          <p>محصولات ویتسل</p>
          <ul>
            <li>کالای دیجیتال</li>
            <li>سوپرمارکت</li>
            <li>گوشی موبایل</li>
            <li>ابزار الات</li>
            <li>لوازم تحریر</li>
          </ul>
        </div>
      </>
    );
}

export default InnerLinks;