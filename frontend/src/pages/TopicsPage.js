
                
                
function TopicsPage() {
    return (
        <>             
                
                
                <h2>Web Development Concepts</h2>

                <nav class="local">
                    <a href="#web">Web Servers</a>
                    <a href="#frontend">Front End Design</a>
                    <a href="#images">Optimizing Images</a>
                    <a href="#favicons">Favicons</a>
                    <a href="#CSS">CSS</a>
                </nav>

                <article id="web">
                    <h3>Web Servers</h3>
                    

                    <p>
                        The <strong>index</strong> is the home page or directory
                        for a <strong>website</strong> or <strong>server</strong> {' '}
                        when the root <strong>URL</strong> {' '}
                        is accessed. The index is necessary because it is the
                        main gateway for users to access the various parts of
                        the website or server. It also allows users to better
                        navigate the website because it contains all the
                        subdirectories in one place. Different web servers may
                        use different names for the
                        index files. For example, OSU's Apache web server uses
                        index.html but on Microsoft's .NET servers, default.html
                        is accepted as a name
                        for the index file. Some servers will also look for
                        index.php or index.js for the home page for a website.
                        Although the names for the
                        index may vary, the concept is the same.
                    </p>

                   
                    <p>
                        In the Network tab of the inspect feature, the
                        index.html file can be seen with a status of 200. This
                        means that
                        there were no issues in loading the file. There are some
                        differences between the file on the web server and the
                        file located on
                        the local machine. The file on the web server has more
                        components. This is because it is located on a remote
                        server. The file on
                        the web server has a <strong>favicon</strong> and the
                        file on the local machine does not. The response for the
                        index.html file is the same for both.
                        Under the Header section in the Network tab, the remote {' '}
                        <strong>IP address</strong> for the server is available
                        for the file on the web server.

                    </p>

                    
                    <p>
                        The favicon.ico file has a status of 200 because the
                        file is present, and the web browser is able to render
                        that file to make it
                        visible to users. The main.css and main.js files do not
                        have the same status because the file contains no CSS or
                        JavaScript. These
                        files each have a status of 404. This status code means
                        that the files were not found on the server.
                    </p>

                    

                    <p>
                        The full URL for the webpage on the web server is
                        'https://web.engr.oregonstate.edu/~weavjosh/a1-weavjosh'.
                        The <strong>scheme</strong> of this webpage is
                        'https://'. This particular scheme tells the user that
                        the webpage encrypts the data sent between the user and
                        the server. This
                        is because the webpage is being accessed through the
                        university's private server. The <strong>subdomains</strong> {' '}
                        of this website are 'web' and 'engr'
                        and the <strong>host domain</strong> is
                        'oregonstate.edu'. The path to the resource is
                        '~weavjosh/a1-weavjosh'. This shows that the index.html
                        file is located in the 'a1-weavjosh' file under the user
                        directory '~weavjosh'.

                    </p>

                </article>

                <article id="frontend">
                    <h3>Front End Design</h3>

                    

                    <p>
                        The <strong>front end</strong> is the user interface of
                        a website. Front end design is used to tailor a website
                        to meet the needs of the
                        users. This may include images, text, and navigation
                        links. It is also important to use consistent color
                        schemes and
                        a layout that is easy for the user to follow. Navigation
                        throughout the website should also be straightforward to
                        prevent
                        confusion.
                    </p>

                    
                    <h4>The 5 E's of Usability</h4>
                    <dl>
                        <dt>Effective</dt>
                        <dd>
                            The website should contain accurate information
                            that helps the user meet their needs.
                        </dd>
                        <dt>Efficient</dt>
                        <dd>
                            The website should allow users to access information
                            or pages with the least amount of effort.
                            Obstacles to accessing information should be
                            minimized.
                        </dd>
                        <dt>Easy to Navigate</dt>
                        <dd>
                            The website should allow users to easily switch
                            between pages. The navigation paths should
                            be easy to follow and give users a clear idea of
                            where they are within the website.
                        </dd>
                        <dt>Error-free</dt>
                        <dd>The website should have no errors. Errors can reduce
                            the accessibility of a website. </dd>
                        <dt>Enjoyable/Engaging</dt>

                        <dd>The website should grab the user's attention and
                            provide a good experience for the user.</dd>
                    </dl>

                    

                    <p>
                        Page layout tags are necessary for providing structure
                        to a webpage. The page layout tags include: <strong>header</strong>, {' '}
                        <strong>nav</strong>, <strong>main</strong>, <strong>section</strong>, {' '}
                        <strong>article</strong>, <strong>aside</strong>, {' '}
                        <strong>figure</strong>, <strong>blockquote</strong>, {' '}
                        <strong>footer</strong>, and <strong>div</strong>. The
                        header tag
                        contains information that appears at the top of the
                        webpage. This usually includes the name of the website
                        and other important
                        information. The nav tag is used to enclose links that
                        take the user to other pages and parts within a page.
                        Menu bars, links
                        to other sites, and search bars are
                        good examples of
                        ways the nav tag can be used. The main tag is used to
                        enclose central information on a page. The main tag is
                        used to enclose all the information that is unique to
                        a specific page on a website. Section tags are used to
                        group similar or related information.
                        Article tags are used to contain similar but separate
                        topics, usually enclosed within a section tag. The aside
                        tag is used to place content next to a body of text. It
                        can be used to place text, or it can
                        also be used to create navigation bars. The figure tag
                        can be used to add an image, an important quote, or a
                        text
                        block. The figure tag also has an optional tag, the {' '}
                        <strong>figcaption</strong> tag. The figcaption can be
                        used to add a caption under
                        an image or a caption under text that highlights its
                        importance, such as the author or source. The blockquote
                        tag
                        is used to contain a quote or information from a source,
                        and the text will appear in
                        its own space on the page. This is useful for adding
                        information to a webpage that should be separate from
                        the
                        main text or other elements on the page.

                    </p>

                    

                    <ol>
                        <li>An <strong>external anchor</strong> allows the user
                            to access a different website than the current
                            website by clicking on a link. </li>
                        <li>An <strong>internal anchor</strong> is a link that
                            takes a user to a different part of the webpage.</li>
                        <li>
                            Anchors can also be used to allow users to easily
                            switch from page to page. These anchors will usually
                            appear in
                            navigation bars.
                        </li>
                    </ol>

                </article>

                <article id="images">
                    <h3>Optimizing Images</h3>
                    
                    <p>
                        There are six specifications for images for the web,
                        which include a <strong>descriptive file name</strong>,
                        a {' '}
                        <strong>small file size</strong>, <strong>exact
                            dimensions</strong> {' '}
                        the <strong>correct file format</strong>, {' '}
                        <strong>reduced resolution</strong>,
                        and <strong>color mode</strong>. A descriptive file name
                        helps search engines correctly categorize the images on
                        the website, allowing users to locate them easier. The
                        file name should accurately describe the content of the
                        image, such as who or what is in the image, where the
                        image was taken, and when the image was taken. It is
                        best practice to include a few descriptive words
                        separated by hyphens in the file name. The image file
                        should be as small as possible to maximize the speed at
                        which the image is loaded by the web browser. An image
                        that loads too slowly may cause users to lose interest
                        in the web page. The image should also fit the exact
                        dimensions of the space for the image on the web page.
                        An image that is too big for the space will load too
                        slowly. Images should be saved in the correct file
                        format. The most commonly used file formats for images
                        are <strong>SVG</strong>, <strong>GIF</strong>, <strong>PNG</strong>, {' '}
                        <strong>JPG</strong>, and <strong>WebP</strong>. SVG
                        files are created
                        using mathematical formulas. Two-dimensional art,
                        animations, and interactive images are usually saved as
                        SVG files because the file format preserves the quality
                        of the image and text. GIF files can be used to display
                        animations, small sequences of photos, or short videos.
                        GIF files also have 8-bit <strong>transparency</strong>.
                        PNG files are
                        used to display solid colors, shapes, and line art. The
                        file format also has true transparency, which means that
                        a background will show through transparent areas without
                        any issues. JPG files are used for photographs. These
                        files can be compressed and remain rectangular. This is
                        an important feature of the JPG file because photographs
                        can contain many different colors, and the file format
                        allows for these images to be compressed to save space.
                        WebP files are similar to JPG files in that they are
                        used for photographs. WebP files allow for transparency
                        with an <strong>alpha channel</strong>.
                    </p>

                    

                    <p>
                        SVG, GIF, and PNG files are used for <strong>line art</strong>.
                        SVG files
                        are used for line art because the file is created
                        through algorithms, so the lines will be precise and
                        clear when displayed on a page. This property allows the
                        images to be resized to any size without loss of
                        quality. GIF files are used for line art because they
                        can be used to display animations on a webpage, and the
                        limited color palette is useful for simple
                        two-dimensional designs. PNG files are particularly
                        useful for line art because they have true transparency.
                        Image files saved as PNG files allow transparent designs
                        to be displayed on a web page without any loss of
                        quality. SVG, GIF, and PNG files also allow for <strong>lossless</strong>
                        compression,
                        where the image quality remains the same
                        when the files are compressed. JPG and WebP files are
                        used for photographs because they allow the files to be
                        compressed and remain rectangular. When a JPG or WebP
                        file is compressed, some image quality may be lost. This
                        is called <strong>lossy</strong> compression.

                    </p>

                </article>

                <article id="favicons">
                    <h3>Favicons</h3>
                    
                    <p>
                        A <strong>favicon</strong> is a symbol that helps users
                        identify a site
                        quickly. Favicons may appear
                        in a browser tab on a computer or mobile device, in
                        search results, or as an app icon on the
                        home screen of a device. Favicons should be saved as
                        multiple files with different
                        dimensions to meet the specifications for the different
                        browsers through which the site
                        may be accessed and the devices that are used to access
                        that site. When a website is
                        accessed through a web browser, the browser reads the
                        favicon links in the header tag
                        of the HTML file and renders the correct image.
                    </p>

                </article>

                <article id="CSS">
                    <h3>CSS</h3>
                    <p>
                        Adding style to websites is important because it can
                        make
                        web pages easier to read and increase the visual
                        appeal of the website for users. In addition, adding
                        style
                        can help businesses adhere to brand and marketing
                        requirements.
                        Websites are styled using a language called <strong>Cascading
                        Style Sheets (CSS)</strong> to add color, alignment, and
                        font styles to
                        HTML and JavaScript. There are five main ways that CSS
                        can be added
                        to an HTML document. A CSS stylesheet document can be
                        linked to
                        an HTML document <strong>externally</strong> at the top of the page,
                        enclosed
                        in a link tag, and placed inside the main tag. CSS can
                        also be
                        imported using an import statement. This method of
                        incorporating CSS
                        is useful because styles can be applied globally to all
                        pages
                        within a website. Style tags can also be used to <strong>embed</strong> {' '}
                        single HTML tags.
                        Style may also be added to tags <strong>inline</strong>,
                        which takes an
                        attribute and a value. CSS may also be used with {' '}
                        <strong>JavaScript</strong> by
                        using <strong>template literals</strong> inside a function. The {' '}
                        <strong>Document Object Model</strong> {' '}
                        in JavaScript may also be manipulated to include style.
                        Embedding
                        HTML tags, the inline method, template literals, and
                        manipulating
                        the DOM are more useful for adding style to specific
                        tags on a webpage.
                    </p>

                </article>

        </>
    );

}

export default TopicsPage;