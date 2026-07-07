
const Section = ({className, children, ...props}) => {
  return (
    <section className={`m-0 ${className}`} {...props} >
        {children}
    </section>
  )
}

export default Section