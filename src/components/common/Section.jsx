
const Section = ({className, children}) => {
  return (
    <section className={`m-0 space-y-3 space-x-3 ${className}`}>
        {children}
    </section>
  )
}

export default Section