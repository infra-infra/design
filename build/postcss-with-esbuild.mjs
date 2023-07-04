import * as postcss from 'postcss';
import * as path from 'path';
import * as sass from 'sass';

export default function (options = {plugins: []}) {
    return {
        name: 'postcss-with-esbuild',
        setup: function (build) {
            build.onResolve({filter: /.\.(scss)$/}, (args) => {
                return {
                    path: args.path,
                    namespace: 'postcss',
                };
            });
            build.onLoad({filter: /.*/, namespace: 'postcss'}, async (args) => {
                try {
                    const fileContent = await sass.default.compileAsync(args.path);
                    const result = await postcss.default(options.plugins).process(fileContent.css, {
                        from: args.path,
                    });
                    return {
                        contents: result.css,
                        loader: 'css',
                        watchFiles: [args.path],
                    };
                } catch (error) {
                    return {
                        pluginName: 'postcss-with-esbuild',
                        errors: [
                            {
                                text: error.message,
                                pluginName: 'postcss-with-esbuild',
                                location: {
                                    file: args.path,
                                    namespace: 'postcss-with-esbuild',
                                },
                            },
                        ],
                    };
                }
            });
        },
    };
}
