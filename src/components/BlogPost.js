import React from 'react';

class BlogPost extends React.Component {

    render() {
        return (
            <div style={{marginLeft:125, marginRight:125}}>
                <h2>The fundamental difference between Swift Protocols and Java Interfaces</h2>
                <p>
                    First off, there are many similarities between the two. Both are used to define
                    abstract functions (the term functions is used in this case to be neutral
                    between the two languages). Both can have defined variables. Both have the
                    property of multiple inheritence. That is, classes can inherit multiple
                    interfaces/protocols.
                    </p>
                    <p>
                        If they are basically the same, why even call them different things? Just for
                        marketing? Interfaces came first, why didn't the engineers at Apple just use the
                        interface name?
                    </p>
                    There are differences between the two, so much so that protocols have their own
                    programming paradigm of "Protocol Oriented Programming", or POP. Its important
                    to note that Swift implements Object Oriented Programming as well!
                    <p>
                        But many of the "differences" in Swift Protocols have near equal implementations
                        in Java Interfaces. For example, extensions in Swift allow implementing
                        functions in a protocol, and modifies a protocol so that any classes
                        implementing the protocol can also use the function implemented. Java has a
                        similar concept called default methods since Java 8, where you can implement a
                        method in an interface, and any classes implementing the interface can use the
                        method without having to redeclare the method. Though not exactly alike, they
                        achieve nearly the same goals.
                    </p>
                    <p>
                        One of the most fundamental differences between the two, stem from <b>"value"</b> types
                        and <b>"reference"</b> types. To summarize from Apple's developer page:
                    </p>
                    <p>
                        "...'value types', where each instance keeps a unique copy of its data, usually
                        defined as a struct, enum, or tuple....'reference types', where instances share
                        a single copy of the data, and the type is usually defined as a class".
                    </p>
                    <p>

                        Swift, which is closely related to the C family of languages, makes use of types
                        like Structs. Structs are not found in Java, as nearly any object in Java is a
                        class. Since Structs do not make use of Object Oriented Programming, it cannot
                        make use of inheritance, which is a core concept of OOP. Therefore, protocols
                        were designed to allow types like structs and enums to take advantage of
                        inheritance, and abstract methods, multiple inheritance, and more.
                    </p>
                    <p>
                        Value types certainly have their place, for example, in asynchronous contexts.
                        You can be sure that asynchronous reads and writes will not conflict with one
                        another of the same type, since each instance of the type is copied and does not
                        share one memory reference. Its important in Swift to know when to use value
                        types vs reference types.
                    </p>
                    <p>
                        Understanding the problem solved with POP better highlights the difference
                        between protocols and interfaces. There are other differences of course, but
                        this particular difference warrants designing a new programming paradigm
                        altogether, and encourages learning best practices when programming in Swift.
                    </p>
                    <p>
                        Additional information on Protocols can be found here:

                        https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/

                    </p>
            </div>

        )
    }
}

export default BlogPost;