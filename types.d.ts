declare module "@chlodalejandro/iajs" {
    interface LoginResult {
        success: boolean,
        values: {
            cookies?: {
                "logged-in-sig"?: string,
                "logged-in-user"?: string
            },
            email?: string,
            itemname?: string,
            s3?: { access?: string, secret?: string },
            screenname?: string,
        },
        version: 1,
    }

    function newEmptyAuth(): {
        success: false,
        values: {
            cookies: { "logged-in-sig": null, "logged-in-user": null },
            email: null,
            itemname: null,
            s3: { access: null, secret: null },
            screenname: null,
        },
        version: 1,
    }

    type LoginSuccess = LoginResult;
    type LoginFailure = {
        success: false,
        values: LoginResult["values"] | ReturnType<typeof newEmptyAuth>["values"],
        version: 1
    };
    type LoginResponse = LoginSuccess | LoginFailure;

    type AWSLoginResult = LoginResult & {
        values: Omit<LoginResult, "cookies">
    }

    class Auth {
        constructor();
        login(email: string, password: string): Promise<LoginResponse>;
        fromS3(access: string, secret: string, newAuth?: LoginResult): Promise<AWSLoginResult>;
        fromCookies(loggedInSig: string, loggedInUser: string, newAuth?: LoginResult) : Promise<LoginResult>;
    }

    class BookReaderAPI {

    }

    class FavoritesAPI {
        constructor();
        get(params : { screenname?: string, auth?: LoginResult }) : Promise<any>;
        add(params? : { identifier?: string, comments?: string, auth?: LoginResult }) : Promise<any>;
        remove(params? : { identifier?: string, auth?: LoginResult }) : Promise<any>;
        modify(params: { identifier?: string }, auth: LoginResult) : Promise<any>;
    }

    class GifcitiesAPI {
        constructor();
        get(params?: { q : string[] }) : Promise<any>;
        search(params: { q : string[] }) : Promise<any>;
    }

    class MetadataAPI {
        constructor();
        get(params: { identifier: string, path?: string, auth?: LoginResult }) : Promise<any>;
        patch(params: {
            identifier?: string,
            target?: string,
            priority?: number,
            patch?: Record<string, any>,
            auth?: LoginResult
        }) : Promise<any>;
    }

    class RelatedAPI {
        constructor();
        get(params: { identifier: string }) : Promise<any>;
    }

    class ReviewsAPI {
        constructor();
        get(params?: { identifier: string }) : Promise<any>;
        add(params?: {
            identifier?: string,
            title?: string,
            body?: string,
            stars?: number,
            auth?: LoginResult
        }) : Promise<any>;
    }

    class S3API {
        constructor();
        ls(params?: { identifier?: string, auth?: LoginResult }) : Promise<any>;
        createEmptyItem(params?: {
            identifier?: string,
            testItem?: boolean,
            metadata?: Record<string, any>,
            headers?: Record<string, any>,
            wait?: boolean,
            auth?: LoginResult
        }) : Promise<any>;
        upload(params?: {
            identifier?: string,
            key?: string,
            body?: string,
            autocreate?: boolean,
            skipDerive?: boolean,
            testItem?: boolean,
            keepOldVersions?: boolean,
            metadata?: Record<string, any>,
            headers?: Record<string, any>,
            wait?: boolean,
            auth?: LoginResult
        }) : Promise<any>;
    }

    class SearchAPI {
        constructor();
        get(params?: { q?: string, page?: number, fields?: string[], options?: any }) : Promise<any>;
        search(q : string) : Promise<any>;
        buildQueryFromObject(qObject : Record<string, any>);
    }

    class SearchTextAPI {}

    class ViewsAPI {
        constructor();
        get(params?: { identifier?: string }) : Promise<any>;
    }

    class WaybackAPI {
        constructor();
        available(params?: { url?: string, timestamp?: string }) : Promise<any>;
        cdx(options?: Record<string, any>);
        savePageNow(params?: {
            url?: string,
            captureOutlinks?: number,
            captureAll?: true,
            captureScreenshot?: boolean,
            skipFirstArchive?: true,
            ifNotArchivedWithin?: string | number,
            auth: LoginResult
        }) : Promise<any>;
    }

    class ZipFileAPI {
        ls(identifier: string, zipPath: string, auth?: LoginResult): Promise<any>;
    }

    const iajs: {
        Auth: Auth,
        BookReaderAPI: BookReaderAPI,
        GifcitiesAPI: GifcitiesAPI,
        FavoritesAPI: FavoritesAPI,
        MetadataAPI: MetadataAPI,
        RelatedAPI: RelatedAPI,
        ReviewsAPI: ReviewsAPI,
        SearchAPI: SearchAPI,
        SearchTextAPI: SearchTextAPI,
        S3API: S3API,
        ViewsAPI: ViewsAPI,
        WaybackAPI: WaybackAPI,
        ZipFileAPI: ZipFileAPI
    };
    export default iajs;
}
