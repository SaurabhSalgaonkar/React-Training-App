
const Footer = () => {
    return(
        <>
            <div className="footer-container">
                <div className="logo">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAY1BMVEUAAAD///93d3f8/PzX19c2Njbo6Oj4+PgjIyPx8fGIiIjLy8uenp7U1NSpqam4uLiYmJivr6/i4uJVVVVqamq+vr5DQ0MvLy+QkJAcHBx9fX1vb28NDQ1dXV1PT08pKSkVFRXPqTbyAAADuUlEQVRoge2a24KiMAyGOUNBrFQFhEF8/6dc1JmRQ5M2pezuBd/VjNb+tqQ5NDrOzs7Ozs7Ozs4/43IosjzIr8c6/Ku6SS3cET6/yMd9WVcuue/OiRrJN+SSF1fxVcQL5Seim47rT4xV8inuiZn0PZIqPylGw8Ijm74whl2NpFNQeSD4WY+XvcwAWHbjukcD6QMm7brPTe7T6/d/B2ASgbwHc8SlB3HOfv+OgEnC17spUbpWSU+4A7N87x3tDJQk6RqaJvseQFo5bOESfqzptpjm94ie9KVPBtIh7+bT3D6DoDO4IFk6M5jXhocn4S5PcjcalmlqF/rKUemUzdO5uGI5jzcbqUHFAKElrMjZ+6EyydRT7+R7GtqeTEWBLwtvc8/I1cEuk86OI13TYhHRWSGdkA7YG7n3OC8HKkLLxdKqHechGRqjfqaxJT3yLWNEC2sro8gMBmRRDmg5AfjYr/IPQAgokDiIf8yB70szc9R4EvhzkTQA0bTxrDlAv/bSTmh7jp9YhZuKuddPxhO8+cAieE1R+goWnLrP3qE5IlVbyz+z4Fp3ZZVMI58axMpf6D/BOAqyjBK9XVVkTPSDIhll3XHfTlslbRaS12sf3uGNZrz6MEybu+JVsXvyknItAab9ikp54SUl6t9M4Zj2Z7M3WTha6NGqGzJ4qbWtNh7G8k21UWlVDb8O1Mwdp99SW3WnsOWmq8ocg3xbl1hZ5Gy3cMXjHjiTAjIF8LLjw1am7qtKuyebuHJpuS9hm8RFY8sHbluI+1q3GGZFtQrd6xvnYXKbgIPUsnNqy0cteuhrOyGxulVAvB+uuEVtmvSTS2HJ6rRvKR2nKdK2bb2aC0t5G6ERYrs0ISzbdjSLe7XiB7thnHAh/sSmc4EaJBClRd8CX6kBkLoBKAYNN1u7HgOdOBShnlcHnUv4BXbCuHbsnPJlIXtCy32U9dFEJ0EE8FbuO7W7OSE5rokmJi3lMdXJeO2GdjbhfDCKLXoZuQ4PahJFdeMw5Jsne6uuqSYnDH+zsYB+3RYs+9tG9HQXY8PCzZRXn+s3rbVeK5HuaOJWsP6bFrd7ezWrC/iDrnYuw6rqqyoMu7TIhWG+xgj15kh7OEdx7K/LETWa9XK6tVkS3LLVoFlT+mGtai1S07ULCwfr4RlkaX7QWvoJYsdpgSMuFH1OGo2+O8tseLEZrcadQ1SstS+QW8NzyKtGWWHrGYP04aXmWR6IiA1EkQjy7JieQ0vxWYtbP3jbsEoef1FzZ2dnZ2fn/+YP0zUybdHxnWYAAAAASUVORK5CYII="></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAaVBMVEULCwv+/v4KCgoJCQkTExMAAADp6ekrKyt9fX0lJSX19fXi4uIcHBz7+/sEBAT4+PjPz8/W1tYYGBhycnIxMTHIyMiurq5ra2uKiorc3NxYWFi+vr48PDw2NjZTU1Onp6eXl5dFRUVjY2PMlHlQAAACkElEQVR4nO3bC3OiMBAA4JAHNJCHxkdLtfbx/3/k7aJ3B6id0Anh5tx1hAqd8LmJYdOxTCwekgm2cHAykIEMZCADGchABjKQgQxkuNmgUxjOOcEXMeD1Q/W2rbQJrLPENJ7SAJc8ve/apizLpm3Xq91u9xHTejqDUm/7uhhFaVw+A1d6b8eComgyGrg6ldeCvAb1fCMJeQ33CBkNSl8NxtwGrg53CPkM6nSPkM0g1G5xg/q8MyBzGl7uEvIZ2qtL27JdY7SHkMXg2HiGPLweKxMkRIghJDCoz9Hk8HKpHzCi2k5g+BoOyYOa2kICw2aYhtflDfa4hOFpYCi3/4ChIgMZyLCgQf2NK0Mv5rxfqEr/jjAyHHUv5HzrTWXK5k8Mb9226UW5iemYnxqKuIi6gc1sUPPVMPGGmNbmNZQLGOyoyl/lN3jvh4j9HAbxncH7uh7Wtx9zGIz4zlCPDU/JDdwFLbngsMK8NniPCNz2hsdXagOXxhgpjWQmmMJ6fMtw0RqGgMVugMEAP1+OAAfOxtW3U/JgtDYMbhBGm23R5b2uz+mHje+etuuP887CRzPxPYtLzaAvKsZ1ZXThrfXwgLeOBlvg9W2NvQGHMQ02dnqYZjAGDZgPfV7Tnhe2APEFZgEfde9E3EdzWl9AJ7iKCWNCwCWlxApBqo3FvMMG8+AbzdSluuCR1cwUgwhSiAB7GJzcwbKaS84k1DDd9IgbzH/FXGBOGvi1yHYnzQ+cwxP3QuALji/4jVoOD4vubHrDzXjsmpYMZCADGchABjKQgQxkIAMZyECGBzA8r1e9OOiYP9UnNnA1jMmEFN8D4cN/+PpBA//j90jJQAYykIEMZCADGchAhsc08KVDSCYXD/MLo0QulQTw3VUAAAAASUVORK5CYII="></img>
                </div>
                <div className="footer-text" style={{color: "white"}}>
                    <p>© 2023 SAURABH PVT. LTD.</p>
                    <div>
                        <p >ALL OVER WORLD</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;