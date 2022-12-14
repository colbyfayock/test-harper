import Link from 'next/link';
import styles from './Button.module.scss';

const Button = ({children, href, className, color, ...rest}) => {
  let buttonClassName = styles.button;

  if (className) {
    buttonClassName = `${buttonClassName} ${className}`;
  }

  const buttonProps = {
    className: buttonClassName,
    'data-button-color': color,
    ...rest,
  };

  if (href) {
    if ( href.startsWith('/') ) {
      return (
        <Link href={href}>
          <a {...buttonProps}>
            {children}
          </a>
        </Link>
      );
    }
    return (
      <a href={href} {...buttonProps}>
        {children}
      </a>
    );
  }

  return (
    <button {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
