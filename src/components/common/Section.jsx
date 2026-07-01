
const Section = ({className, children, ...props}) => {
  return (
    <section className={`m-0 space-y-3 space-x-3 ${className}`} {...props} >
        {children}
    </section>
  )
}

export default Section