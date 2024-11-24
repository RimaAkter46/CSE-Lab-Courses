/*! cornerstone-tools - 3.0.0-b.641 - 2018-09-21 | (c) 2017 Chris Hafey | https://github.com/cornerstonejs/cornerstoneTools */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("cornerstoneTools", [], factory);
	else if(typeof exports === 'object')
		exports["cornerstoneTools"] = factory();
	else
		root["cornerstoneTools"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate_name_"];
/******/ 	window["webpackHotUpdate_name_"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined")
/******/ 				return reject(new Error("No browser support"));
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "aee4b5d31b791bf4a75e"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) me.children.push(request);
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (typeof dep === "undefined") hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (typeof dep === "undefined") hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle")
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "cornerstoneTools";
/******/ 			{
/******/ 				// eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./index.js")(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./base/BaseAnnotationTool.js":
/*!************************************!*\
  !*** ./base/BaseAnnotationTool.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTool2 = __webpack_require__(/*! ./BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

var _toolState = __webpack_require__(/*! ./../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _handleActivator = __webpack_require__(/*! ./../manipulators/handleActivator.js */ "./manipulators/handleActivator.js");

var _handleActivator2 = _interopRequireDefault(_handleActivator);

var _findAndMoveHelpers = __webpack_require__(/*! ../util/findAndMoveHelpers.js */ "./util/findAndMoveHelpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// State

// Manipulators


var BaseAnnotationTool = function (_BaseTool) {
  _inherits(BaseAnnotationTool, _BaseTool);

  function BaseAnnotationTool(_ref) {
    var name = _ref.name,
        strategies = _ref.strategies,
        defaultStrategy = _ref.defaultStrategy,
        configuration = _ref.configuration,
        supportedInteractionTypes = _ref.supportedInteractionTypes;

    _classCallCheck(this, BaseAnnotationTool);

    return _possibleConstructorReturn(this, (BaseAnnotationTool.__proto__ || Object.getPrototypeOf(BaseAnnotationTool)).call(this, {
      name: name,
      strategies: strategies,
      defaultStrategy: defaultStrategy,
      configuration: configuration,
      supportedInteractionTypes: supportedInteractionTypes
    }));
  }

  // ===================================================================
  // Abstract Methods - Must be implemented.
  // ===================================================================

  /**
   * @abstract Creates a new annotation.
   *
   * @param  {type} evt description
   * @return {type}     description
   */


  _createClass(BaseAnnotationTool, [{
    key: 'createNewMeasurement',
    value: function createNewMeasurement(evt) {
      throw new Error('Method createNewMeasurement not implemented for ' + this.toolName + '.');
    }

    /**
     * @abstract
     *
     * @param {*} element
     * @param {*} data
     * @param {*} coords
     * @returns {boolean} If the point is near the tool
     */

  }, {
    key: 'pointNearTool',
    value: function pointNearTool(element, data, coords) {
      throw new Error('Method pointNearTool not implemented for ' + this.toolName + '.');
    }

    /**
     * @abstract
     *
     * @param {*} element
     * @param {*} data
     * @param {*} coords
     * @returns {number} the distance in px from the provided coordinates to the
     * closest rendered portion of the annotation. -1 if the distance cannot be
     * calculated.
     */

  }, {
    key: 'distanceFromPoint',
    value: function distanceFromPoint(element, data, coords) {
      throw new Error('Method distanceFromPoint not implemented for ' + this.toolName + '.');
    }

    /**
     * @abstract Used to redraw the tool's annotation data per render
     *
     * @param {*} evt
     */

  }, {
    key: 'renderToolData',
    value: function renderToolData(evt) {
      throw new Error('renderToolData not implemented for ' + this.toolName + '.');
    }

    // ===================================================================
    // Virtual Methods - Have default behavior but may be overriden.
    // ===================================================================

    /**
     * Event handler for MOUSE_MOVE event.
     *
     * @virtual
     * @event
     * @param {Object} evt - The event.
     */

  }, {
    key: 'mouseMoveCallback',
    value: function mouseMoveCallback(evt) {
      var _evt$detail = evt.detail,
          element = _evt$detail.element,
          currentPoints = _evt$detail.currentPoints;

      var coords = currentPoints.canvas;
      var toolState = (0, _toolState.getToolState)(element, this.name);

      var imageNeedsUpdate = false;

      for (var d = 0; d < toolState.data.length; d++) {
        var data = toolState.data[d];

        // Hovering a handle?
        if ((0, _handleActivator2.default)(element, data.handles, coords) === true) {
          imageNeedsUpdate = true;
        }

        // Tool data's 'active' does not match coordinates
        // TODO: can't we just do an if/else and save on a pointNearTool check?
        var nearToolAndNotMarkedActive = this.pointNearTool(element, data, coords) && !data.active;
        var notNearToolAndMarkedActive = !this.pointNearTool(element, data, coords) && data.active;

        if (nearToolAndNotMarkedActive || notNearToolAndMarkedActive) {
          data.active = !data.active;
          imageNeedsUpdate = true;
        }
      }

      return imageNeedsUpdate;
    }

    /**
     * Custom callback for when a handle is selected.
     *
     * @virtual
     * @param  {*} evt
     * @param  {*} handle The selected handle.
     */

  }, {
    key: 'handleSelectedCallback',
    value: function handleSelectedCallback(evt, handle, data) {
      (0, _findAndMoveHelpers.moveHandleNearImagePoint)(evt, handle, data, this.name);
    }

    /**
     * Custom callback for when a tool is selected.
     *
     * @virtual
     * @param  {*} evt
     * @param  {*} tool The selected tool.
     */

  }, {
    key: 'toolSelectedCallback',
    value: function toolSelectedCallback(evt, data, toolState) {
      var tool = this;

      (0, _findAndMoveHelpers.moveAnnotationNearClick)(evt, toolState, tool, data);
    }
  }]);

  return BaseAnnotationTool;
}(_BaseTool3.default);

exports.default = BaseAnnotationTool;

/***/ }),

/***/ "./base/BaseBrushTool.js":
/*!*******************************!*\
  !*** ./base/BaseBrushTool.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ./../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _events = __webpack_require__(/*! ./../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _BaseTool2 = __webpack_require__(/*! ./../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

var _isToolActive = __webpack_require__(/*! ../tools/shared/isToolActive.js */ "./tools/shared/isToolActive.js");

var _isToolActive2 = _interopRequireDefault(_isToolActive);

var _index = __webpack_require__(/*! ../store/index.js */ "./store/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Utils


var brushState = _index2.default.modules.brush;

var BaseBrushTool = function (_BaseTool) {
  _inherits(BaseBrushTool, _BaseTool);

  function BaseBrushTool(_ref) {
    var name = _ref.name,
        strategies = _ref.strategies,
        defaultStrategy = _ref.defaultStrategy,
        configuration = _ref.configuration,
        supportedInteractionTypes = _ref.supportedInteractionTypes;

    _classCallCheck(this, BaseBrushTool);

    var _this = _possibleConstructorReturn(this, (BaseBrushTool.__proto__ || Object.getPrototypeOf(BaseBrushTool)).call(this, {
      name: name,
      strategies: strategies,
      defaultStrategy: defaultStrategy,
      configuration: configuration,
      supportedInteractionTypes: supportedInteractionTypes
    }));

    _this.hasCursor = true;
    _this.referencedToolData = 'brush';

    _this._drawing = false;

    _this._drawingMouseUpCallback = _this._drawingMouseUpCallback.bind(_this);
    return _this;
  }

  //===================================================================
  // Abstract Methods - Must be implemented.
  //===================================================================

  /**
  * Helper function for rendering the brush.
  *
  * @abstract
  * @param {Object} evt - The event.
  */


  _createClass(BaseBrushTool, [{
    key: 'renderBrush',
    value: function renderBrush(evt) {
      throw new Error('Method renderBrush not implemented for ' + this.toolName + '.');
    }

    /**
     * Paints the data to the canvas.
     *
     * @protected
     * @abstract
     * @param  {Object} eventData The data object associated with the event.
     */

  }, {
    key: '_paint',
    value: function _paint(eventData) {
      throw new Error('Method _paint not implemented for ' + this.toolName + '.');
    }

    //===================================================================
    // Virtual Methods - Have default behavior but may be overriden.
    //===================================================================

    /**
    * Event handler for MOUSE_DRAG event.
    *
    * @virtual
    * @event
    * @param {Object} evt - The event.
    */

  }, {
    key: 'mouseDragCallback',
    value: function mouseDragCallback(evt) {
      this._startPainting(evt);
    }

    /**
    * Event handler for MOUSE_DOWN event.
    *
    * @virtual
    * @event
    * @param {Object} evt - The event.
    */

  }, {
    key: 'preMouseDownCallback',
    value: function preMouseDownCallback(evt) {
      this._startPainting(evt);

      return true;
    }

    /**
    * Initialise painting with baseBrushTool
    *
    * @protected
    * @virtual
    * @event
    * @param {Object} evt - The event.
    */

  }, {
    key: '_startPainting',
    value: function _startPainting(evt) {
      var eventData = evt.detail;
      var element = eventData.element;

      this._paint(eventData);
      this._drawing = true;
      this._startListeningForMouseUp(element);
      this._lastImageCoords = eventData.currentPoints.image;
    }

    /**
    * Event handler for MOUSE_MOVE event.
    *
    * @virtual
    * @event
    * @param {Object} evt - The event.
    */

  }, {
    key: 'mouseMoveCallback',
    value: function mouseMoveCallback(evt) {
      var currentPoints = evt.detail.currentPoints;

      this._lastImageCoords = currentPoints.image;
    }

    /**
    * Event handler for switching mode to passive;
    *
    * @virtual
    * @event
    * @param {Object} evt - The event.
    */

  }, {
    key: 'passiveCallback',
    value: function passiveCallback(evt) {
      _externalModules2.default.cornerstone.updateImage(this.element);
    }

    /**
    * Used to redraw the tool's annotation data per render.
    *
    * @virtual
    * @param {Object} evt - The event.
    */

  }, {
    key: 'renderToolData',
    value: function renderToolData(evt) {
      var eventData = evt.detail;
      var element = eventData.element;

      // Only brush needs to render.
      if ((0, _isToolActive2.default)(element, this.name)) {
        // Call the hover event for the brush
        this.renderBrush(evt);
      }
    }

    /**
    * Switches to the next segmentation color.
    *
    * @virtual
    */

  }, {
    key: 'nextSegmentation',
    value: function nextSegmentation() {
      var numberOfColors = this.constructor.getNumberOfColors();

      var drawId = brushState.getters.draw() + 1;

      if (drawId === numberOfColors) {
        drawId = 0;
      }

      brushState.mutations.SET_DRAW_COLOR(drawId);
    }

    /**
    * Switches to the previous segmentation color.
    *
    * @virtual
    */

  }, {
    key: 'previousSegmentation',
    value: function previousSegmentation() {
      var configuration = this.configuration;
      var numberOfColors = this.constructor.getNumberOfColors();

      var drawId = brushState.getters.draw() - 1;

      if (drawId < 0) {
        drawId = numberOfColors - 1;
      }

      brushState.mutations.SET_DRAW_COLOR(drawId);

      //this._changeDrawColor(drawId);
    }

    /**
    * Increases the brush size
    *
    * @virtual
    */

  }, {
    key: 'increaseBrushSize',
    value: function increaseBrushSize() {
      var oldRadius = brushState.getters.radius();
      var newRadius = Math.floor(oldRadius * 1.2);

      // If e.g. only 2 pixels big. Math.floor(2*1.2) = 2.
      // Hence, have minimum increment of 1 pixel.
      if (newRadius === oldRadius) {
        newRadius += 1;
      }

      brushState.mutations.SET_RADIUS(newRadius);
    }

    /**
    * Decreases the brush size
    *
    * @virtual
    */

  }, {
    key: 'decreaseBrushSize',
    value: function decreaseBrushSize() {
      var oldRadius = brushState.getters.radius();
      var newRadius = Math.floor(oldRadius * 0.8);

      brushState.mutations.SET_RADIUS(newRadius);
    }

    //===================================================================
    // Implementation interface
    //===================================================================

    /**
     * Get the draw color (segmentation) of the tool.
     *
     * @protected
     * @param  {Number} drawId The id of the color (segmentation) to switch to.
     */

  }, {
    key: '_getBrushColor',
    value: function _getBrushColor(drawId) {
      var colormap = _externalModules2.default.cornerstone.colors.getColormap(brushState.getters.colorMapId());
      var colorArray = colormap.getColor(drawId);

      if (this._drawing) {
        return 'rgba(' + colorArray[[0]] + ', ' + colorArray[[1]] + ', ' + colorArray[[2]] + ', 1.0 )';
      }

      return 'rgba(' + colorArray[[0]] + ', ' + colorArray[[1]] + ', ' + colorArray[[2]] + ', 0.8 )';
    }

    /**
    * Event handler for MOUSE_UP during the drawing event loop.
    *
    * @protected
    * @event
    * @param {Object} evt - The event.
    */

  }, {
    key: '_drawingMouseUpCallback',
    value: function _drawingMouseUpCallback(evt) {
      var eventData = evt.detail;
      var element = eventData.element;

      this._drawing = false;
      this._mouseUpRender = true;

      this._stopListeningForMouseUp(element);
    }
    /**
    * Adds modify loop event listeners.
    *
    * @protected
    * @param {Object} element - The viewport element to add event listeners to.
    * @modifies {element}
    */

  }, {
    key: '_startListeningForMouseUp',
    value: function _startListeningForMouseUp(element) {
      element.removeEventListener(_events2.default.MOUSE_UP, this._drawingMouseUpCallback);
      element.removeEventListener(_events2.default.MOUSE_CLICK, this._drawingMouseUpCallback);

      element.addEventListener(_events2.default.MOUSE_UP, this._drawingMouseUpCallback);
      element.addEventListener(_events2.default.MOUSE_CLICK, this._drawingMouseUpCallback);

      _externalModules2.default.cornerstone.updateImage(element);
    }

    /**
    * Adds modify loop event listeners.
    *
    * @protected
    * @param {Object} element - The viewport element to add event listeners to.
    * @modifies {element}
    */

  }, {
    key: '_stopListeningForMouseUp',
    value: function _stopListeningForMouseUp(element) {
      element.removeEventListener(_events2.default.MOUSE_UP, this._drawingMouseUpCallback);
      element.removeEventListener(_events2.default.MOUSE_CLICK, this._drawingMouseUpCallback);

      _externalModules2.default.cornerstone.updateImage(element);
    }

    //===================================================================
    // Segmentation API. This is effectively a wrapper around the store.
    //===================================================================

    /**
     * Returns the number of colors in the colormap.
     *
     * @static
     * @public
     * @return {Number} The number of colors in the color map.
     */

  }, {
    key: 'showSegmentationOnElement',


    /**
     * Displays a segmentation on the element.
     *
     * @public @api
     * @param  {String} enabledElement  The enabledElement on which to display.
     * @param  {Number} segIndex        The index of the segmentation.
     */
    value: function showSegmentationOnElement(segIndex) {
      var enabledElement = this._getEnabledElement();
      var enabledElementUID = enabledElement.uuid;

      brushState.mutations.SET_ELEMENT_BRUSH_VISIBILITY(enabledElementUID, segIndex, true);

      _externalModules2.default.cornerstone.updateImage(enabledElement.element);
    }

    /**
     * Hides a segmentation on an element.
     *
     * @public @api
     * @param  {Number} segIndex        The index of the segmentation.
     */

  }, {
    key: 'hideSegmentationOnElement',
    value: function hideSegmentationOnElement(segIndex) {
      var enabledElement = this._getEnabledElement();
      var enabledElementUID = enabledElement.uuid;

      brushState.mutations.SET_ELEMENT_BRUSH_VISIBILITY(enabledElementUID, segIndex, false);
      _externalModules2.default.cornerstone.updateImage(enabledElement.element);
    }

    /**
     * Displays all segmentations on an element.
     *
     * @public @api
     */

  }, {
    key: 'showAllSegmentationsOnElement',
    value: function showAllSegmentationsOnElement() {
      var enabledElement = this._getEnabledElement();
      var enabledElementUID = enabledElement.uuid;
      var colormap = _externalModules2.default.cornerstone.colors.getColormap(brushState.getters.colorMapId());
      var numberOfColors = colormap.getNumberOfColors();

      for (var segIndex = 0; segIndex < numberOfColors; segIndex++) {
        brushState.mutations.SET_ELEMENT_BRUSH_VISIBILITY(enabledElementUID, segIndex, true);
      }

      _externalModules2.default.cornerstone.updateImage(enabledElement.element);
    }

    /**
     * Hides all segmentations on an element.
     *
     * @public @api
     */

  }, {
    key: 'hideAllSegmentationsOnElement',
    value: function hideAllSegmentationsOnElement() {
      var enabledElement = this._getEnabledElement();
      var enabledElementUID = enabledElement.uuid;
      var colormap = _externalModules2.default.cornerstone.colors.getColormap(brushState.getters.colorMapId());
      var numberOfColors = colormap.getNumberOfColors();

      for (var segIndex = 0; segIndex < numberOfColors; segIndex++) {
        brushState.mutations.SET_ELEMENT_BRUSH_VISIBILITY(enabledElementUID, segIndex, false);
      }

      _externalModules2.default.cornerstone.updateImage(enabledElement.element);
    }
  }, {
    key: '_getEnabledElement',
    value: function _getEnabledElement() {
      return _externalModules2.default.cornerstone.getEnabledElement(this.element);
    }

    /**
     * Returns the toolData type assoicated with this type of tool.
     *
     * @static
     * @public
     * @return {String} The number of colors in the color map.
     */

  }, {
    key: 'alpha',
    get: function get() {
      brushState.getters.alpha();
    },
    set: function set(value) {
      var enabledElement = this._getEnabledElement();

      brushState.mutations.SET_ALPHA(value);
      _externalModules2.default.cornerstone.updateImage(enabledElement.element);
    }
  }, {
    key: 'hiddenButActiveAlpha',
    get: function get() {
      brushState.getters.hiddenButActiveAlpha();
    },
    set: function set(value) {
      var enabledElement = this._getEnabledElement();

      brushState.mutations.SET_HIDDEN_BUT_ACTIVE_ALPHA(value);
      _externalModules2.default.cornerstone.updateImage(enabledElement.element);
    }
  }], [{
    key: 'getNumberOfColors',
    value: function getNumberOfColors() {
      var colormap = _externalModules2.default.cornerstone.colors.getColormap(brushState.getters.colorMapId());

      return colormap.getNumberOfColors();
    }
  }, {
    key: 'getReferencedToolDataName',
    value: function getReferencedToolDataName() {
      return 'brush';
    }
  }]);

  return BaseBrushTool;
}(_BaseTool3.default);

exports.default = BaseBrushTool;

/***/ }),

/***/ "./base/BaseTool.js":
/*!**************************!*\
  !*** ./base/BaseTool.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ./../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _KeyboardController = __webpack_require__(/*! ../tools/shared/KeyboardController.js */ "./tools/shared/KeyboardController.js");

var _KeyboardController2 = _interopRequireDefault(_KeyboardController);

var _isToolActive = __webpack_require__(/*! ../tools/shared/isToolActive.js */ "./tools/shared/isToolActive.js");

var _isToolActive2 = _interopRequireDefault(_isToolActive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseTool = function () {
  function BaseTool() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        name = _ref.name,
        strategies = _ref.strategies,
        defaultStrategy = _ref.defaultStrategy,
        configuration = _ref.configuration,
        supportedInteractionTypes = _ref.supportedInteractionTypes;

    _classCallCheck(this, BaseTool);

    this.name = name;
    this.mode = 'disabled';
    this.element = undefined;
    this.supportedInteractionTypes = supportedInteractionTypes || [];

    // Todo: should this live in baseTool?
    this.strategies = strategies || {};
    this.defaultStrategy = defaultStrategy || Object.keys(this.strategies)[0] || undefined;
    this.activeStrategy = this.defaultStrategy;

    //
    this.data = {};
    this._options = {};
    this._configuration = Object.assign({}, configuration);

    // True if tool has a custom cursor, causes the frame to render on every mouse move when the tool is active.
    this.hasCursor = false;

    // Setup keybinds if present.
    var keyBinds = this.configuration.keyBinds;

    if (keyBinds) {
      this.activateKeyBinds(keyBinds);
    }
  }

  _createClass(BaseTool, [{
    key: 'clearOptions',
    value: function clearOptions() {
      this._options = {};
    }
  }, {
    key: 'activateKeyBinds',
    value: function activateKeyBinds(keyBinds) {
      this._keyboardController = new _KeyboardController2.default(this, keyBinds);
    }

    /**
     *
     *
     * @param {*} evt
     * @returns Any
     */

  }, {
    key: 'applyActiveStrategy',
    value: function applyActiveStrategy(evt) {
      return this.strategies[this.activeStrategy](evt, this.configuration);
    }

    /**
    * Event handler for KEY_DOWN event.
    *
    * @event
    * @param {Object} evt - The event.
    */

  }, {
    key: 'onKeyDown',
    value: function onKeyDown(evt) {
      var eventData = evt.detail;
      var element = eventData.element;

      if (!(0, _isToolActive2.default)(element, this.name) || !this._keyboardController) {
        return;
      }

      var keyCode = eventData.keyCode;
      var imageNeedsUpdate = this._keyboardController.keyPress(keyCode);

      if (imageNeedsUpdate) {
        _externalModules2.default.cornerstone.updateImage(element);
      }
    }

    // ===================================================================
    // Virtual Methods - Have default behavior but may be overriden.
    // ===================================================================

    /**
     * Callback that takes priority if the tool is active, in case
     * any special behavior is required. Does nothing by default.
     *
     * @virtual
     * @param  {type} evt
     * @return {boolean} consumedEvent - True if function consumed the event.
     */
    /**
     * Example implementation:
     *
     * preMouseDownCallback(evt) {
     *    return false;
     * }
     */

    /**
     * Callback that takes priority if the tool is active, in case
     * any special behavior is required. Does nothing by default.
     *
     * @virtual
     * @param  {type} evt
     * @return {boolean} consumedEvent - True if function consumed the event.
     */
    /**
     * Example implementation:
     *
     * postMouseDownCallback(evt) {
     *    return false;
     * }
     */

    /**
     * Callback that takes priority if the tool is active, in case
     * any special behavior is required. Does nothing by default.
     *
     * @virtual
     * @param  {type} evt
     * @return {boolean} consumedEvent - True if function consumed the event.
     */
    /**
     * Example implementation:
     *
     * preTouchStartCallback(evt) {
     *    return false;
     * }
     */

    /**
     * Callback that takes priority if the tool is active, in case
     * any special behavior is required. Does nothing by default.
     *
     * @virtual
     * @param  {type} evt
     * @return {boolean} consumedEvent - True if function consumed the event.
     */
    /**
     * Example implementation:
     *
     * postTouchStartCallback(evt) {
     *    return false;
     * }
     */

  }, {
    key: 'configuration',
    get: function get() {
      return this._configuration;
    },
    set: function set(configuration) {
      this._configuration = configuration;
    }

    // ToolOptions.js

  }, {
    key: 'options',
    get: function get() {
      return this._options;
    },
    set: function set(options) {
      this._options = options;
    }
  }]);

  return BaseTool;
}();

exports.default = BaseTool;

/***/ }),

/***/ "./eventDispatchers/imageRenderedEventDispatcher.js":
/*!**********************************************************!*\
  !*** ./eventDispatchers/imageRenderedEventDispatcher.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! ./../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _index = __webpack_require__(/*! ./../store/index.js */ "./store/index.js");

var _BaseBrushTool = __webpack_require__(/*! ../base/BaseBrushTool.js */ "./base/BaseBrushTool.js");

var _BaseBrushTool2 = _interopRequireDefault(_BaseBrushTool);

var _onImageRenderedBrushEventHandler = __webpack_require__(/*! ../eventListeners/onImageRenderedBrushEventHandler.js */ "./eventListeners/onImageRenderedBrushEventHandler.js");

var _onImageRenderedBrushEventHandler2 = _interopRequireDefault(_onImageRenderedBrushEventHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onImageRendered = function onImageRendered(evt) {
  var eventData = evt.detail;
  var element = eventData.element;

  // Render Annotation Tools
  var toolsToRender = _index.state.tools.filter(function (tool) {
    return tool.element === element && (tool.mode === 'active' || tool.mode === 'passive' || tool.mode === 'enabled');
  });

  var brushTools = toolsToRender.filter(function (tool) {
    return tool instanceof _BaseBrushTool2.default;
  });

  if (brushTools.length > 0) {
    (0, _onImageRenderedBrushEventHandler2.default)(evt);
  }

  toolsToRender.forEach(function (tool) {
    if (tool.renderToolData) {
      tool.renderToolData(evt);
    }
  });
};

var enable = function enable(element) {
  element.addEventListener(_events2.default.IMAGE_RENDERED, onImageRendered);
};

var disable = function disable(element) {
  element.removeEventListener(_events2.default.IMAGE_RENDERED, onImageRendered);
};

exports.default = {
  enable: enable,
  disable: disable
};

/***/ }),

/***/ "./eventDispatchers/index.js":
/*!***********************************!*\
  !*** ./eventDispatchers/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.touchToolEventDispatcher = exports.newImageEventDispatcher = exports.mouseToolEventDispatcher = exports.imageRenderedEventDispatcher = undefined;

var _imageRenderedEventDispatcher = __webpack_require__(/*! ./imageRenderedEventDispatcher.js */ "./eventDispatchers/imageRenderedEventDispatcher.js");

var _imageRenderedEventDispatcher2 = _interopRequireDefault(_imageRenderedEventDispatcher);

var _mouseToolEventDispatcher = __webpack_require__(/*! ./mouseToolEventDispatcher.js */ "./eventDispatchers/mouseToolEventDispatcher.js");

var _mouseToolEventDispatcher2 = _interopRequireDefault(_mouseToolEventDispatcher);

var _newImageEventDispatcher = __webpack_require__(/*! ./newImageEventDispatcher.js */ "./eventDispatchers/newImageEventDispatcher.js");

var _newImageEventDispatcher2 = _interopRequireDefault(_newImageEventDispatcher);

var _touchToolEventDispatcher = __webpack_require__(/*! ./touchToolEventDispatcher.js */ "./eventDispatchers/touchToolEventDispatcher.js");

var _touchToolEventDispatcher2 = _interopRequireDefault(_touchToolEventDispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.imageRenderedEventDispatcher = _imageRenderedEventDispatcher2.default;
exports.mouseToolEventDispatcher = _mouseToolEventDispatcher2.default;
exports.newImageEventDispatcher = _newImageEventDispatcher2.default;
exports.touchToolEventDispatcher = _touchToolEventDispatcher2.default;

/***/ }),

/***/ "./eventDispatchers/mouseEventHandlers/addNewMeasurement.js":
/*!******************************************************************!*\
  !*** ./eventDispatchers/mouseEventHandlers/addNewMeasurement.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (evt, tool) {
  //
  evt.preventDefault();
  evt.stopPropagation();
  var mouseEventData = evt.detail;
  var element = mouseEventData.element;
  var measurementData = tool.createNewMeasurement(mouseEventData);

  if (!measurementData) {
    return;
  }

  // Associate this data with this imageId so we can render it and manipulate it
  (0, _toolState.addToolState)(element, tool.name, measurementData);

  _index.mutations.SET_IS_TOOL_LOCKED(true);
  _externalModules2.default.cornerstone.updateImage(element);

  var handleMover = void 0;

  if (Object.keys(measurementData.handles).length === 1) {
    handleMover = _moveHandle2.default;
  } else {
    handleMover = _moveNewHandle2.default;
  }

  var preventHandleOutsideImage = void 0;

  if (tool.options && tool.options.preventHandleOutsideImage !== undefined) {
    preventHandleOutsideImage = tool.options.preventHandleOutsideImage;
  } else {
    preventHandleOutsideImage = false;
  }

  handleMover(mouseEventData, tool.name, measurementData, measurementData.handles.end,
  // On mouse up
  function () {
    console.log('addNewMeasurement: mouseUp');
    measurementData.active = false;
    measurementData.invalidated = true;
    //   If (anyHandlesOutsideImage(mouseEventData, measurementData.handles)) {
    //     // Delete the measurement
    //     RemoveToolState(element, toolType, measurementData);
    //   }

    _index.mutations.SET_IS_TOOL_LOCKED(false);
    _externalModules2.default.cornerstone.updateImage(element);
  }, preventHandleOutsideImage);
};

var _externalModules = __webpack_require__(/*! ../../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _index = __webpack_require__(/*! ../../store/index.js */ "./store/index.js");

var _toolState = __webpack_require__(/*! ../../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _moveHandle = __webpack_require__(/*! ../../manipulators/moveHandle.js */ "./manipulators/moveHandle.js");

var _moveHandle2 = _interopRequireDefault(_moveHandle);

var _moveNewHandle = __webpack_require__(/*! ../../manipulators/moveNewHandle.js */ "./manipulators/moveNewHandle.js");

var _moveNewHandle2 = _interopRequireDefault(_moveNewHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./eventDispatchers/mouseEventHandlers/index.js":
/*!******************************************************!*\
  !*** ./eventDispatchers/mouseEventHandlers/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyDown = exports.mouseWheel = exports.mouseUp = exports.mouseMove = exports.mouseDrag = exports.mouseDoubleClick = exports.mouseDownActivate = exports.mouseDown = exports.mouseClick = undefined;

var _customCallbackHandler = __webpack_require__(/*! ./../shared/customCallbackHandler.js */ "./eventDispatchers/shared/customCallbackHandler.js");

var _customCallbackHandler2 = _interopRequireDefault(_customCallbackHandler);

var _mouseDown = __webpack_require__(/*! ./mouseDown.js */ "./eventDispatchers/mouseEventHandlers/mouseDown.js");

var _mouseDown2 = _interopRequireDefault(_mouseDown);

var _mouseDownActivate = __webpack_require__(/*! ./mouseDownActivate.js */ "./eventDispatchers/mouseEventHandlers/mouseDownActivate.js");

var _mouseDownActivate2 = _interopRequireDefault(_mouseDownActivate);

var _mouseDrag = __webpack_require__(/*! ./mouseDrag.js */ "./eventDispatchers/mouseEventHandlers/mouseDrag.js");

var _mouseDrag2 = _interopRequireDefault(_mouseDrag);

var _mouseMove = __webpack_require__(/*! ./mouseMove.js */ "./eventDispatchers/mouseEventHandlers/mouseMove.js");

var _mouseMove2 = _interopRequireDefault(_mouseMove);

var _keyDown = __webpack_require__(/*! ./keyDown.js */ "./eventDispatchers/mouseEventHandlers/keyDown.js");

var _keyDown2 = _interopRequireDefault(_keyDown);

var _mouseWheel = __webpack_require__(/*! ./mouseWheel.js */ "./eventDispatchers/mouseEventHandlers/mouseWheel.js");

var _mouseWheel2 = _interopRequireDefault(_mouseWheel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mouseClick = _customCallbackHandler2.default.bind(null, 'mouse', 'mouseClickCallback');

var mouseDoubleClick = _customCallbackHandler2.default.bind(null, 'mouse', 'doubleClickCallback');

var mouseUp = _customCallbackHandler2.default.bind(null, 'mouse', 'mouseUpCallback');

exports.mouseClick = mouseClick;
exports.mouseDown = _mouseDown2.default;
exports.mouseDownActivate = _mouseDownActivate2.default;
exports.mouseDoubleClick = mouseDoubleClick;
exports.mouseDrag = _mouseDrag2.default;
exports.mouseMove = _mouseMove2.default;
exports.mouseUp = mouseUp;
exports.mouseWheel = _mouseWheel2.default;
exports.keyDown = _keyDown2.default;

/***/ }),

/***/ "./eventDispatchers/mouseEventHandlers/keyDown.js":
/*!********************************************************!*\
  !*** ./eventDispatchers/mouseEventHandlers/keyDown.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (evt) {
  if (_index.state.isToolLocked) {
    return;
  }

  var tools = void 0;
  var element = evt.detail.element;

  // Filter out tools that don't have a mouse interface.
  tools = (0, _getInteractiveToolsForElement2.default)(element, _index.getters.mouseTools());
  tools = tools.filter(function (tool) {
    return typeof tool.onKeyDown === 'function';
  });

  if (tools.length === 0) {
    return;
  }

  for (var i = 0; i < tools.length; i++) {
    tools[i].onKeyDown(evt);
  }
};

var _externalModules = __webpack_require__(/*! ./../../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _index = __webpack_require__(/*! ./../../store/index.js */ "./store/index.js");

var _getInteractiveToolsForElement = __webpack_require__(/*! ./../../store/getInteractiveToolsForElement.js */ "./store/getInteractiveToolsForElement.js");

var _getInteractiveToolsForElement2 = _interopRequireDefault(_getInteractiveToolsForElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// State
var cornerstone = _externalModules2.default.cornerstone;

/**
 * KeyDown is used for keyboard input for mouse tools.
 *
 *
 * @param {Object} evt
 */

// Todo: Where should these live?

/***/ }),

/***/ "./eventDispatchers/mouseEventHandlers/mouseDown.js":
/*!**********************************************************!*\
  !*** ./eventDispatchers/mouseEventHandlers/mouseDown.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (evt) {
  if (_index.state.isToolLocked) {
    return;
  }

  var tools = void 0;
  var eventData = evt.detail;
  var element = evt.detail.element;
  var coords = evt.detail.currentPoints.canvas;

  // High level filtering
  tools = (0, _getInteractiveToolsForElement2.default)(element, _index.getters.mouseTools());
  tools = tools.filter(function (tool) {
    return eventData.buttons === tool.options.mouseButtonMask;
  });

  // ACTIVE TOOL W/ PRE CALLBACK?
  var activeTools = tools.filter(function (tool) {
    return tool.mode === 'active';
  });

  // If any tools are active, check if they have a special reason for dealing with the event.
  if (activeTools.length > 0) {
    // TODO: If length > 1, you could assess fitness and select the ideal tool
    // TODO: But because we're locking this to 'active' tools, that should rarely be an issue
    // Super-Meta-TODO: ^ I think we should just take the approach of one active tool per mouse button?
    var firstActiveToolWithCallback = activeTools.find(function (tool) {
      return typeof tool.preMouseDownCallback === 'function';
    });

    if (firstActiveToolWithCallback) {
      var consumedEvent = firstActiveToolWithCallback.preMouseDownCallback(evt);

      if (consumedEvent) {
        return;
      }
    }
  }

  // Annotation tool specific
  var annotationTools = (0, _getToolsWithDataForElement2.default)(element, tools);

  // NEAR HANDLES?
  var annotationToolsWithMoveableHandles = (0, _getToolsWithMoveableHandles2.default)(element, annotationTools, coords);

  if (annotationToolsWithMoveableHandles.length > 0) {
    var firstToolWithMoveableHandles = annotationToolsWithMoveableHandles[0];
    var toolState = (0, _toolState2.getToolState)(element, firstToolWithMoveableHandles.name);

    var _findHandleDataNearIm = (0, _findAndMoveHelpers.findHandleDataNearImagePoint)(element, evt, toolState, firstToolWithMoveableHandles.name, coords),
        handle = _findHandleDataNearIm.handle,
        data = _findHandleDataNearIm.data;

    firstToolWithMoveableHandles.handleSelectedCallback(evt, handle, data);

    return;
  }

  // NEAR TOOL?
  var annotationToolsWithPointNearClick = tools.filter(function (tool) {
    var toolState = (0, _toolState2.getToolState)(element, tool.name);

    if (!toolState) {
      return false;
    }

    for (var i = 0; i < toolState.data.length; i++) {
      var _data = toolState.data[i];

      if (tool.pointNearTool && tool.pointNearTool(element, _data, coords)) {
        return true;
      }
    }

    return false;
  });

  if (annotationToolsWithPointNearClick.length > 0) {
    var firstToolWithPointNearClick = annotationToolsWithPointNearClick[0];
    var _toolState = (0, _toolState2.getToolState)(element, firstToolWithPointNearClick.name);

    var toolData = (0, _findAndMoveHelpers.findAnnotationNearClick)(element, evt, _toolState, firstToolWithPointNearClick, coords);

    firstToolWithPointNearClick.toolSelectedCallback(evt, toolData, _toolState);

    return;
  }

  // ACTIVE TOOL W/ POST CALLBACK?
  // If any tools are active, check if they have a special reason for dealing with the event.
  if (activeTools.length > 0) {
    // TODO: If length > 1, you could assess fitness and select the ideal tool
    // TODO: But because we're locking this to 'active' tools, that should rarely be an issue
    // Super-Meta-TODO: ^ I think we should just take the approach of one active tool per mouse button?
    var _firstActiveToolWithCallback = activeTools.find(function (tool) {
      return typeof tool.postMouseDownCallback === 'function';
    });

    if (_firstActiveToolWithCallback) {
      var _consumedEvent = _firstActiveToolWithCallback.postMouseDownCallback(evt);

      if (_consumedEvent) {
        return;
      }
    }
  }
};

var _index = __webpack_require__(/*! ./../../store/index.js */ "./store/index.js");

var _toolState2 = __webpack_require__(/*! ./../../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _getToolsWithMoveableHandles = __webpack_require__(/*! ../../store/getToolsWithMoveableHandles */ "./store/getToolsWithMoveableHandles.js");

var _getToolsWithMoveableHandles2 = _interopRequireDefault(_getToolsWithMoveableHandles);

var _findAndMoveHelpers = __webpack_require__(/*! ../../util/findAndMoveHelpers.js */ "./util/findAndMoveHelpers.js");

var _getInteractiveToolsForElement = __webpack_require__(/*! ./../../store/getInteractiveToolsForElement.js */ "./store/getInteractiveToolsForElement.js");

var _getInteractiveToolsForElement2 = _interopRequireDefault(_getInteractiveToolsForElement);

var _getToolsWithDataForElement = __webpack_require__(/*! ./../../store/getToolsWithDataForElement.js */ "./store/getToolsWithDataForElement.js");

var _getToolsWithDataForElement2 = _interopRequireDefault(_getToolsWithDataForElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./eventDispatchers/mouseEventHandlers/mouseDownActivate.js":
/*!******************************************************************!*\
  !*** ./eventDispatchers/mouseEventHandlers/mouseDownActivate.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (evt) {
  if (_index.state.isToolLocked) {
    return;
  }

  var eventData = evt.detail;
  var element = eventData.element;

  // Filter out disabled, enabled, and passive
  var tools = (0, _getActiveToolsForElement2.default)(element, _index.getters.mouseTools());

  // Filter out tools that do not match mouseButtonMask
  tools = tools.filter(function (tool) {
    return eventData.buttons === tool.options.mouseButtonMask;
  });

  if (tools.length === 0) {
    return;
  }

  var activeTool = tools[0];

  // Note: custom `addNewMeasurement` will need to prevent event bubbling
  if (activeTool.addNewMeasurement) {
    activeTool.addNewMeasurement(evt, 'mouse');
  } else if (activeTool instanceof _BaseAnnotationTool2.default) {
    (0, _addNewMeasurement2.default)(evt, activeTool);
  }
};

var _addNewMeasurement = __webpack_require__(/*! ./addNewMeasurement.js */ "./eventDispatchers/mouseEventHandlers/addNewMeasurement.js");

var _addNewMeasurement2 = _interopRequireDefault(_addNewMeasurement);

var _index = __webpack_require__(/*! ./../../store/index.js */ "./store/index.js");

var _getActiveToolsForElement = __webpack_require__(/*! ./../../store/getActiveToolsForElement.js */ "./store/getActiveToolsForElement.js");

var _getActiveToolsForElement2 = _interopRequireDefault(_getActiveToolsForElement);

var _BaseAnnotationTool = __webpack_require__(/*! ../../base/BaseAnnotationTool.js */ "./base/BaseAnnotationTool.js");

var _BaseAnnotationTool2 = _interopRequireDefault(_BaseAnnotationTool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./eventDispatchers/mouseEventHandlers/mouseDrag.js":
/*!**********************************************************!*\
  !*** ./eventDispatchers/mouseEventHandlers/mouseDrag.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (evt) {
  if (_index.state.isToolLocked) {
    return;
  }

  var tools = void 0;
  var eventData = evt.detail;
  var element = eventData.element;

  // Filter out disabled, enabled, and passive
  tools = (0, _getActiveToolsForElement2.default)(element, _index.getters.mouseTools());
  tools = tools.filter(function (tool) {
    return eventData.buttons === tool.options.mouseButtonMask;
  });
  tools = tools.filter(function (tool) {
    return typeof tool.mouseDragCallback === 'function';
  });

  if (tools.length === 0) {
    return;
  }

  var activeTool = tools[0];

  activeTool.mouseDragCallback(evt);
};

var _index = __webpack_require__(/*! ./../../store/index.js */ "./store/index.js");

var _getActiveToolsForElement = __webpack_require__(/*! ./../../store/getActiveToolsForElement.js */ "./store/getActiveToolsForElement.js");

var _getActiveToolsForElement2 = _interopRequireDefault(_getActiveToolsForElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./eventDispatchers/mouseEventHandlers/mouseMove.js":
/*!**********************************************************!*\
  !*** ./eventDispatchers/mouseEventHandlers/mouseMove.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (evt) {
  if (_index.state.isToolLocked) {
    return;
  }

  var tools = void 0;
  var _evt$detail = evt.detail,
      element = _evt$detail.element,
      currentPoints = _evt$detail.currentPoints;

  // Set the mouse position incase any tool needs it.

  _index.setters.mousePositionImage(currentPoints.image);

  // TODO: instead of filtering these for every interaction, we can change our
  // TODO: State's structure to always know these values.
  // Filter out disabled and enabled
  tools = (0, _getInteractiveToolsForElement2.default)(element, _index.getters.mouseTools());

  var activeTools = tools.filter(function (tool) {
    return tool.mode === 'active';
  });

  // If any tools are active, check if they have a cursor.
  if (activeTools.length > 0) {
    // TODO: If length > 1, you could assess fitness and select the ideal tool
    // TODO: But because we're locking this to 'active' tools, that should rarely be an issue
    var firstActiveTool = activeTools[0];

    // Force image update if the active tool has a cusror that should update on mouseMove.
    if (firstActiveTool.hasCursor) {
      _externalModules2.default.cornerstone.updateImage(element);
    }
  }

  tools = (0, _getToolsWithDataForElement2.default)(element, tools);

  // Iterate over each tool, and each tool's data
  // Activate any handles we're hovering over, or whole tools if we're near the tool
  // If we've changed the state of anything, redrawn the image
  var imageNeedsUpdate = false;

  for (var t = 0; t < tools.length; t++) {
    var tool = tools[t];

    if (typeof tool.mouseMoveCallback === 'function') {
      imageNeedsUpdate = tool.mouseMoveCallback(evt) || imageNeedsUpdate;
    }
  }

  // Tool data activation status changed, redraw the image
  if (imageNeedsUpdate === true) {
    _externalModules2.default.cornerstone.updateImage(element);
  }
};

var _externalModules = __webpack_require__(/*! ./../../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _index = __webpack_require__(/*! ./../../store/index.js */ "./store/index.js");

var _getInteractiveToolsForElement = __webpack_require__(/*! ./../../store/getInteractiveToolsForElement.js */ "./store/getInteractiveToolsForElement.js");

var _getInteractiveToolsForElement2 = _interopRequireDefault(_getInteractiveToolsForElement);

var _getToolsWithDataForElement = __webpack_require__(/*! ./../../store/getToolsWithDataForElement.js */ "./store/getToolsWithDataForElement.js");

var _getToolsWithDataForElement2 = _interopRequireDefault(_getToolsWithDataForElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./eventDispatchers/mouseEventHandlers/mouseWheel.js":
/*!***********************************************************!*\
  !*** ./eventDispatchers/mouseEventHandlers/mouseWheel.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (evt) {
  if (_index.state.isToolLocked) {
    return;
  }

  var tools = void 0;
  var element = evt.detail.element;

  // Filter out disabled, enabled, and passive
  tools = (0, _getActiveToolsForElement2.default)(element, _index.getters.mouseTools());
  tools = tools.filter(function (tool) {
    return typeof tool.mouseWheelCallback === 'function';
  });

  if (tools.length === 0) {
    return;
  }

  tools[0].mouseWheelCallback(evt);
};

var _index = __webpack_require__(/*! ./../../store/index.js */ "./store/index.js");

var _getActiveToolsForElement = __webpack_require__(/*! ./../../store/getActiveToolsForElement.js */ "./store/getActiveToolsForElement.js");

var _getActiveToolsForElement2 = _interopRequireDefault(_getActiveToolsForElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./eventDispatchers/mouseToolEventDispatcher.js":
/*!******************************************************!*\
  !*** ./eventDispatchers/mouseToolEventDispatcher.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! ./../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _index = __webpack_require__(/*! ./mouseEventHandlers/index.js */ "./eventDispatchers/mouseEventHandlers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These listeners are emitted in order, and can be cancelled/prevented from bubbling
 * by any previous event.
 * - mouseMove: used to update the [un]hover state of a tool (highlighting)
 * - mouseDown: check to see if we are close to an existing annotation, grab it
 * - mouseDownActivate: createNewMeasurement (usually)
 * - mouseDrag: update measurement or apply strategy (wwwc)
 * - mouseDoubleClick: usually a one-time apply specialty action
 * - onImageRendered: redraw visible tool data
 * @param {*} element
 */
var enable = function enable(element) {
  element.addEventListener(_events2.default.MOUSE_CLICK, _index.mouseClick);
  element.addEventListener(_events2.default.MOUSE_DOWN, _index.mouseDown);
  element.addEventListener(_events2.default.MOUSE_DOWN_ACTIVATE, _index.mouseDownActivate);
  element.addEventListener(_events2.default.MOUSE_DOUBLE_CLICK, _index.mouseDoubleClick);
  element.addEventListener(_events2.default.MOUSE_DRAG, _index.mouseDrag);
  element.addEventListener(_events2.default.MOUSE_MOVE, _index.mouseMove);
  element.addEventListener(_events2.default.MOUSE_UP, _index.mouseUp);
  element.addEventListener(_events2.default.MOUSE_WHEEL, _index.mouseWheel);
  element.addEventListener(_events2.default.KEY_DOWN, _index.keyDown);
};

var disable = function disable(element) {
  element.removeEventListener(_events2.default.MOUSE_CLICK, _index.mouseClick);
  element.removeEventListener(_events2.default.MOUSE_DOWN, _index.mouseDown);
  element.removeEventListener(_events2.default.MOUSE_DOWN_ACTIVATE, _index.mouseDownActivate);
  element.removeEventListener(_events2.default.MOUSE_DOUBLE_CLICK, _index.mouseDoubleClick);
  element.removeEventListener(_events2.default.MOUSE_DRAG, _index.mouseDrag);
  element.removeEventListener(_events2.default.MOUSE_MOVE, _index.mouseMove);
  element.removeEventListener(_events2.default.MOUSE_UP, _index.mouseUp);
  element.removeEventListener(_events2.default.MOUSE_WHEEL, _index.mouseWheel);
  element.removeEventListener(_events2.default.KEY_DOWN, _index.keyDown);
};

exports.default = {
  enable: enable,
  disable: disable
};

/***/ }),

/***/ "./eventDispatchers/newImageEventDispatcher.js":
/*!*****************************************************!*\
  !*** ./eventDispatchers/newImageEventDispatcher.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! ./../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _index = __webpack_require__(/*! ./../store/index.js */ "./store/index.js");

var _BaseBrushTool = __webpack_require__(/*! ../base/BaseBrushTool.js */ "./base/BaseBrushTool.js");

var _BaseBrushTool2 = _interopRequireDefault(_BaseBrushTool);

var _onNewImageBrushEventHandler = __webpack_require__(/*! ../eventListeners/onNewImageBrushEventHandler.js */ "./eventListeners/onNewImageBrushEventHandler.js");

var _onNewImageBrushEventHandler2 = _interopRequireDefault(_onNewImageBrushEventHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onNewImage = function onNewImage(evt) {
  if (_index.state.isToolLocked) {
    return false;
  }

  var element = evt.detail.element;

  var tools = _index.state.tools.filter(function (tool) {
    return tool.element === element && (tool.mode === 'active' || tool.mode === 'passive' || tool.mode === 'enabled');
  });

  if (tools.length === 0) {
    return false;
  }

  tools.forEach(function (tool) {
    if (tool.newImageCallback) {
      tool.newImageCallback(evt);
    }
  });

  // Check if any brush tools are present.
  var brushTools = tools.filter(function (tool) {
    return tool instanceof _BaseBrushTool2.default;
  });

  if (brushTools.length > 0) {
    (0, _onNewImageBrushEventHandler2.default)(evt);
  }
};

var enable = function enable(element) {
  element.addEventListener(_events2.default.NEW_IMAGE, onNewImage);
};

var disable = function disable(element) {
  element.removeEventListener(_events2.default.NEW_IMAGE, onNewImage);
};

exports.default = {
  enable: enable,
  disable: disable
};

/***/ }),

/***/ "./eventDispatchers/shared/customCallbackHandler.js":
/*!**********************************************************!*\
  !*** ./eventDispatchers/shared/customCallbackHandler.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (handlerType, customFunction, evt) {
  if (_index.state.isToolLocked) {
    return false;
  }

  // TODO: We sometimes see a null detail for TOUCH_PRESS
  var tools = handlerType === 'touch' ? _index.getters.touchTools() : _index.getters.mouseTools();
  var element = evt.detail.element;

  tools = (0, _getActiveToolsForElement2.default)(element, tools);

  if (handlerType === 'touch') {
    tools = tools.filter(function (tool) {
      return tool.options.touchEnable || tool.options.touchEnable === undefined;
    });
  }

  tools = tools.filter(function (tool) {
    return typeof tool[customFunction] === 'function';
  });

  if (tools.length === 0) {
    return false;
  }

  tools[0][customFunction](evt);
};

var _index = __webpack_require__(/*! ./../../store/index.js */ "./store/index.js");

var _getActiveToolsForElement = __webpack_require__(/*! ./../../store/getActiveToolsForElement.js */ "./store/getActiveToolsForElement.js");

var _getActiveToolsForElement2 = _interopRequireDefault(_getActiveToolsForElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./eventDispatchers/touchEventHandlers/addNewMeasurement.js":
/*!******************************************************************!*\
  !*** ./eventDispatchers/touchEventHandlers/addNewMeasurement.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (evt, tool) {
  console.log('touch: addNewMeasurement');
  //
  evt.preventDefault();
  evt.stopPropagation();
  //
  var touchEventData = evt.detail;
  var element = touchEventData.element;
  var measurementData = tool.createNewMeasurement(touchEventData);

  if (!measurementData) {
    return;
  }

  (0, _toolState.addToolState)(element, tool.name, measurementData);

  // Todo: Looks like we're handling the "up" of the tap?
  if (Object.keys(measurementData.handles).length === 1 && touchEventData.type === _events2.default.TAP) {
    // Todo: bold assumptions about measurement data for all tools?
    measurementData.active = false;
    measurementData.handles.end.active = false;
    measurementData.handles.end.highlight = false;
    measurementData.invalidated = true;

    // TODO: IFF the tool supports this feature
    // If (anyHandlesOutsideImage(touchEventData, measurementData.handles)) {
    //   // Delete the measurement
    //   RemoveToolState(element, tool.name, measurementData);
    // }

    _externalModules2.default.cornerstone.updateImage(element);

    return;
  }

  _index.mutations.SET_IS_TOOL_LOCKED(true);
  _externalModules2.default.cornerstone.updateImage(element);

  (0, _moveNewHandleTouch2.default)(touchEventData, tool.name, measurementData, measurementData.handles.end, function () {
    console.log('addNewMeasurement: touchUp');
    measurementData.active = false;
    measurementData.invalidated = true;
    //   If (anyHandlesOutsideImage(touchEventData, measurementData.handles)) {
    //     // Delete the measurement
    //     RemoveToolState(element, touchToolInterface.toolType, measurementData);
    //   }

    _index.mutations.SET_IS_TOOL_LOCKED(false);
    _externalModules2.default.cornerstone.updateImage(element);
  });
};

var _events = __webpack_require__(/*! ../../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _index = __webpack_require__(/*! ../../store/index.js */ "./store/index.js");

var _moveNewHandleTouch = __webpack_require__(/*! ../../manipulators/moveNewHandleTouch.js */ "./manipulators/moveNewHandleTouch.js");

var _moveNewHandleTouch2 = _interopRequireDefault(_moveNewHandleTouch);

var _toolState = __webpack_require__(/*! ../../stateManagement/toolState.js */ "./stateManagement/toolState.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./eventDispatchers/touchEventHandlers/index.js":
/*!******************************************************!*\
  !*** ./eventDispatchers/touchEventHandlers/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.touchStartActive = exports.touchStart = exports.touchRotate = exports.touchPress = exports.touchPinch = exports.touchEnd = exports.touchDrag = exports.tap = exports.multiTouchDrag = exports.doubleTap = undefined;

var _customCallbackHandler = __webpack_require__(/*! ./../shared/customCallbackHandler.js */ "./eventDispatchers/shared/customCallbackHandler.js");

var _customCallbackHandler2 = _interopRequireDefault(_customCallbackHandler);

var _tap = __webpack_require__(/*! ./tap.js */ "./eventDispatchers/touchEventHandlers/tap.js");

var _tap2 = _interopRequireDefault(_tap);

var _touchStart = __webpack_require__(/*! ./touchStart.js */ "./eventDispatchers/touchEventHandlers/touchStart.js");

var _touchStart2 = _interopRequireDefault(_touchStart);

var _touchStartActive = __webpack_require__(/*! ./touchStartActive.js */ "./eventDispatchers/touchEventHandlers/touchStartActive.js");

var _touchStartActive2 = _interopRequireDefault(_touchStartActive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doubleTap = _customCallbackHandler2.default.bind(null, 'touch', 'doubleTapCallback');
// TODO: some touchDrag tools don't want to fire on touchStart
// TODO: Drag tools have an option `fireOnTouchStart` used to filter
// TODO: Them out of TOUCH_START handler
var touchDrag = _customCallbackHandler2.default.bind(null, 'touch', 'touchDragCallback');
var touchEnd = _customCallbackHandler2.default.bind(null, 'touch', 'touchEndCallback');
var touchPinch = _customCallbackHandler2.default.bind(null, 'touch', 'touchPinchCallback');
var touchPress = _customCallbackHandler2.default.bind(null, 'touch', 'touchPressCallback');
var multiTouchDrag = _customCallbackHandler2.default.bind(null, 'touch', 'multiTouchDragCallback');
var touchRotate = _customCallbackHandler2.default.bind(null, 'touch', 'touchRotateCallback');

exports.doubleTap = doubleTap;
exports.multiTouchDrag = multiTouchDrag;
exports.tap = _tap2.default;
exports.touchDrag = touchDrag;
exports.touchEnd = touchEnd;
exports.touchPinch = touchPinch;
exports.touchPress = touchPress;
exports.touchRotate = touchRotate;
exports.touchStart = _touchStart2.default;
exports.touchStartActive = _touchStartActive2.default;

/***/ }),

/***/ "./eventDispatchers/touchEventHandlers/shared/deactivateAllToolInstances.js":
/*!**********************************************************************************!*\
  !*** ./eventDispatchers/touchEventHandlers/shared/deactivateAllToolInstances.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (toolData) {
  if (!toolData) {
    return;
  }

  for (var i = 0; i < toolData.data.length; i++) {
    var data = toolData.data[i];

    data.active = false;
    if (!data.handles) {
      continue;
    }

    deactivateAllHandles(data.handles);
  }
};

function deactivateAllHandles(handles) {
  Object.keys(handles).forEach(function (name) {
    var handle = handles[name];

    handle.active = false;
  });
}

/***/ }),

/***/ "./eventDispatchers/touchEventHandlers/tap.js":
/*!****************************************************!*\
  !*** ./eventDispatchers/touchEventHandlers/tap.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (evt) {
  if (_index.state.isToolLocked) {
    return;
  }
  console.log('tap');

  var tools = void 0;
  var distanceFromHandle = 28;
  var element = evt.detail.element;
  var coords = evt.detail.currentPoints.canvas;

  tools = (0, _getActiveToolsForElement2.default)(element, _index.getters.touchTools());
  tools = (0, _getToolsWithDataForElement2.default)(element, tools);

  // Deactivate everything
  // DeactivateAllToolInstances(toolData);

  // Find all tools w/ handles that we are near
  var toolsWithMoveableHandles = tools.filter(function (tool) {
    var toolState = (0, _toolState2.getToolState)(element, tool.name);

    for (var i = 0; i < toolState.data.length; i++) {
      if ((0, _getHandleNearImagePoint2.default)(element, toolState.data[i].handles, coords, distanceFromHandle) !== undefined) {
        return true;
      }
    }

    return false;
  });

  // TODO: More than one? Which one was moved most recently?
  // We'll just grab the first one we encounter for now
  if (toolsWithMoveableHandles.length > 0) {
    // Todo: ignore: touch_start, tap

    var firstToolWithMoveableHandles = toolsWithMoveableHandles[0];
    var toolState = (0, _toolState2.getToolState)(element, firstToolWithMoveableHandles.name);
    var moveableHandle = toolState.data.find(function (d) {
      return (0, _getHandleNearImagePoint2.default)(element, d.handles, coords, distanceFromHandle) !== undefined;
    });

    toolState.data.active = true;
    moveableHandle.active = true; // Why here, but not touchStart?
    _externalModules2.default.cornerstone.updateImage(element);

    (0, _touchMoveHandle2.default)(evt, firstToolWithMoveableHandles.name, toolState.data, moveableHandle, function () {
      (0, _deactivateAllToolInstances2.default)(toolState);
      // If (anyHandlesOutsideImage(eventData, data.handles)) {
      //   // Delete the measurement
      //   RemoveToolState(element, touchToolInterface.toolType, data);
      // }

      _externalModules2.default.cornerstone.updateImage(element);
      // TODO: LISTEN: TAP + TOUCH_START
    });
    evt.stopImmediatePropagation();
    evt.preventDefault();
    // Why no stopPropagation?

    return;
  }

  // Find all tools near our point
  var toolsNearPoint = tools.filter(function (tool) {
    var toolState = (0, _toolState2.getToolState)(element, tool.name);
    var isNearPoint = tool.pointNearTool && toolState.data.some(function (data) {
      return tool.pointNearTool(element, data, coords);
    });

    return isNearPoint;
  });

  // TODO: More than one? Which one was moved most recently?
  // We'll just grab the first one we encounter for now
  if (toolsNearPoint.length > 0) {
    // Todo: Ignore: TAP, START, PRESS
    var firstToolNearPoint = toolsNearPoint[0];
    var _toolState = (0, _toolState2.getToolState)(element, firstToolNearPoint.name);
    var firstAnnotationNearPoint = _toolState.data.find(function (data) {
      return firstToolNearPoint.pointNearTool(element, data, coords);
    });

    // Todo: ignore: touch_start, tap
    firstAnnotationNearPoint.active = true;
    _externalModules2.default.cornerstone.updateImage(element);

    (0, _touchMoveAllHandles2.default)(evt, firstAnnotationNearPoint, _toolState, firstToolNearPoint.name, true, function () {
      (0, _deactivateAllToolInstances2.default)(_toolState);
      // If (anyHandlesOutsideImage(eventData, data.handles)) {
      //   // Delete the measurement
      //   RemoveToolState(element, touchToolInterface.toolType, data);
      // }

      _externalModules2.default.cornerstone.updateImage(element);
      // TODO: LISTEN: TAP + TOUCH_START
    });
    evt.stopImmediatePropagation();
    evt.preventDefault();
    // Why no stop propagation?

    return;
  }

  // If there is nothing to move, add a new instance of the tool
  // Need to check here to see if activation is allowed!
  // TODO: What would this be? First active tool?
  // Or should _always_ pass through to our larger event handler that checks
  // All tools anyway?
  var allActiveTools = (0, _getActiveToolsForElement2.default)(element, _index.getters.touchTools());

  if (allActiveTools.length > 0 && allActiveTools[0].touchStartActiveCallback) {
    allActiveTools[0].touchStartActiveCallback(evt);
  } else {
    (0, _touchStartActive2.default)(evt);
  }

  return false;
};

var _externalModules = __webpack_require__(/*! ../../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _touchStartActive = __webpack_require__(/*! ./touchStartActive.js */ "./eventDispatchers/touchEventHandlers/touchStartActive.js");

var _touchStartActive2 = _interopRequireDefault(_touchStartActive);

var _index = __webpack_require__(/*! ../../store/index.js */ "./store/index.js");

var _getActiveToolsForElement = __webpack_require__(/*! ../../store/getActiveToolsForElement.js */ "./store/getActiveToolsForElement.js");

var _getActiveToolsForElement2 = _interopRequireDefault(_getActiveToolsForElement);

var _getToolsWithDataForElement = __webpack_require__(/*! ../../store/getToolsWithDataForElement.js */ "./store/getToolsWithDataForElement.js");

var _getToolsWithDataForElement2 = _interopRequireDefault(_getToolsWithDataForElement);

var _toolState2 = __webpack_require__(/*! ../../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _getHandleNearImagePoint = __webpack_require__(/*! ../../manipulators/getHandleNearImagePoint.js */ "./manipulators/getHandleNearImagePoint.js");

var _getHandleNearImagePoint2 = _interopRequireDefault(_getHandleNearImagePoint);

var _touchMoveHandle = __webpack_require__(/*! ../../manipulators/touchMoveHandle.js */ "./manipulators/touchMoveHandle.js");

var _touchMoveHandle2 = _interopRequireDefault(_touchMoveHandle);

var _touchMoveAllHandles = __webpack_require__(/*! ../../manipulators/touchMoveAllHandles.js */ "./manipulators/touchMoveAllHandles.js");

var _touchMoveAllHandles2 = _interopRequireDefault(_touchMoveAllHandles);

var _deactivateAllToolInstances = __webpack_require__(/*! ./shared/deactivateAllToolInstances.js */ "./eventDispatchers/touchEventHandlers/shared/deactivateAllToolInstances.js");

var _deactivateAllToolInstances2 = _interopRequireDefault(_deactivateAllToolInstances);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./eventDispatchers/touchEventHandlers/touchStart.js":
/*!***********************************************************!*\
  !*** ./eventDispatchers/touchEventHandlers/touchStart.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (evt) {
  console.log('touchStart');
  if (_index.state.isToolLocked) {
    return;
  }

  var distanceFromHandle = 28;
  var eventData = evt.detail;
  var element = eventData.element;
  var coords = eventData.startPoints.canvas;

  var tools = (0, _getInteractiveToolsForElement2.default)(element, _index.getters.touchTools());
  tools = tools.filter(function (tool) {
    return tool.options.touchEnable || tool.options.touchEnable === undefined;
  });
  var activeTools = tools.filter(function (tool) {
    return tool.mode === 'active';
  });

  // If any tools are active, check if they have a special reason for dealing with the event.
  if (activeTools.length > 0) {
    // TODO: If length > 1, you could assess fitness and select the ideal tool
    // TODO: But because we're locking this to 'active' tools, that should rarely be an issue
    // Super-Meta-TODO: ^ I think we should just take the approach of one active tool per mouse button?
    var firstActiveToolWithCallback = activeTools.find(function (tool) {
      return typeof tool.preTouchStartCallback === 'function';
    });

    if (firstActiveToolWithCallback) {
      var consumedEvent = firstActiveToolWithCallback.preTouchStartCallback(evt);

      if (consumedEvent) {
        return;
      }
    }
  }

  var annotationTools = (0, _getToolsWithDataForElement2.default)(element, tools);

  // Find all tools w/ handles that we are near
  var annotationToolsWithMoveableHandles = annotationTools.filter(function (tool) {
    var toolState = (0, _toolState2.getToolState)(element, tool.name);

    for (var i = 0; i < toolState.data.length; i++) {
      if ((0, _getHandleNearImagePoint2.default)(eventData.element, toolState.data[i].handles, coords, distanceFromHandle) !== undefined) {
        return true;
      }
    }

    return false;
  });

  console.log('toolsWithMoveableHandles: ', annotationToolsWithMoveableHandles);

  // TODO: More than one? Which one was moved most recently?
  // We'll just grab the first one we encounter for now
  if (annotationToolsWithMoveableHandles.length > 0) {
    // Todo: Ignore TAP, START, PRESS

    var firstToolWithMoveableHandles = annotationToolsWithMoveableHandles[0];
    var toolState = (0, _toolState2.getToolState)(element, firstToolWithMoveableHandles.name);
    var dataWithMoveableHandle = toolState.data.find(function (d) {
      return (0, _getHandleNearImagePoint2.default)(element, d.handles, coords, distanceFromHandle) !== undefined;
    });
    var moveableHandle = (0, _getHandleNearImagePoint2.default)(element, dataWithMoveableHandle.handles, coords, distanceFromHandle);

    console.log('moveableHandle: ', moveableHandle);

    toolState.data.active = true;
    (0, _touchMoveHandle2.default)(evt, firstToolWithMoveableHandles.name, toolState.data, moveableHandle, function () {
      console.log('touchMoveHandle: DONE');
    } // HandleDoneMove
    );

    evt.stopImmediatePropagation();
    evt.preventDefault();
    evt.stopPropagation();

    return;
  }

  // Find all tools near our point
  var annotationToolsWithPointNearTouch = annotationTools.filter(function (tool) {
    var toolState = (0, _toolState2.getToolState)(element, tool.name);
    var isNearPoint = tool.pointNearTool && toolState.data.some(function (data) {
      return tool.pointNearTool(element, data, coords);
    });

    return isNearPoint;
  });

  // TODO: More than one? Which one was moved most recently?
  // We'll just grab the first one we encounter for now
  if (annotationToolsWithPointNearTouch.length > 0) {
    // Todo: Ignore: TAP, START, PRESS
    var firstToolNearPoint = annotationToolsWithPointNearTouch[0];
    var _toolState = (0, _toolState2.getToolState)(element, firstToolNearPoint.name);
    var firstAnnotationNearPoint = _toolState.data.find(function (data) {
      return firstToolNearPoint.pointNearTool(element, data, coords);
    });

    (0, _touchMoveAllHandles2.default)(evt, firstAnnotationNearPoint, _toolState, firstToolNearPoint.name, true, function (lastEvent, lastEventData) {
      firstAnnotationNearPoint.active = false;
      firstAnnotationNearPoint.invalidated = true;
      //   If (anyHandlesOutsideImage(eventData, data.handles)) {
      //     // Delete the measurement
      //     RemoveToolState(
      //       EventData.element,
      //       TouchToolInterface.toolType,
      //       Data
      //     );
      //   }

      _externalModules2.default.cornerstone.updateImage(element);
      // Todo: LISTEN: TAP, START, PRESS

      if (lastEvent && lastEvent.type === _events2.default.TOUCH_PRESS) {
        (0, _triggerEvent2.default)(element, lastEvent.type, lastEventData);
      }
    });
    evt.stopImmediatePropagation();
    evt.preventDefault();
    evt.stopPropagation();

    return;
  }

  // If any tools are active, check if they have a special reason for dealing with the event.
  if (activeTools.length > 0) {
    // TODO: If length > 1, you could assess fitness and select the ideal tool
    // TODO: But because we're locking this to 'active' tools, that should rarely be an issue
    // Super-Meta-TODO: ^ I think we should just take the approach of one active tool per mouse button?
    var _firstActiveToolWithCallback = activeTools.find(function (tool) {
      return typeof tool.postTouchStartCallback === 'function';
    });

    if (_firstActiveToolWithCallback) {
      var _consumedEvent = _firstActiveToolWithCallback.postTouchStartCallback(evt);

      if (_consumedEvent) {
        return;
      }
    }
  }
};

var _events = __webpack_require__(/*! ../../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _index = __webpack_require__(/*! ../../store/index.js */ "./store/index.js");

var _getHandleNearImagePoint = __webpack_require__(/*! ../../manipulators/getHandleNearImagePoint.js */ "./manipulators/getHandleNearImagePoint.js");

var _getHandleNearImagePoint2 = _interopRequireDefault(_getHandleNearImagePoint);

var _touchMoveHandle = __webpack_require__(/*! ../../manipulators/touchMoveHandle.js */ "./manipulators/touchMoveHandle.js");

var _touchMoveHandle2 = _interopRequireDefault(_touchMoveHandle);

var _touchMoveAllHandles = __webpack_require__(/*! ../../manipulators/touchMoveAllHandles.js */ "./manipulators/touchMoveAllHandles.js");

var _touchMoveAllHandles2 = _interopRequireDefault(_touchMoveAllHandles);

var _toolState2 = __webpack_require__(/*! ../../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _triggerEvent = __webpack_require__(/*! ../../util/triggerEvent.js */ "./util/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

var _getInteractiveToolsForElement = __webpack_require__(/*! ../../store/getInteractiveToolsForElement.js */ "./store/getInteractiveToolsForElement.js");

var _getInteractiveToolsForElement2 = _interopRequireDefault(_getInteractiveToolsForElement);

var _getToolsWithDataForElement = __webpack_require__(/*! ../../store/getToolsWithDataForElement.js */ "./store/getToolsWithDataForElement.js");

var _getToolsWithDataForElement2 = _interopRequireDefault(_getToolsWithDataForElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./eventDispatchers/touchEventHandlers/touchStartActive.js":
/*!*****************************************************************!*\
  !*** ./eventDispatchers/touchEventHandlers/touchStartActive.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (evt) {
  if (_index.state.isToolLocked) {
    return;
  }

  var element = evt.detail.element;
  var tools = (0, _getActiveToolsForElement2.default)(element, _index.getters.touchTools());

  tools = tools.filter(function (tool) {
    return tool.options.touchEnable || tool.options.touchEnable === undefined;
  });

  if (tools.length === 0) {
    return;
  }

  var activeTool = tools[0];

  // Note: custom `addNewMeasurement` will need to prevent event bubbling
  if (activeTool && activeTool.addNewMeasurement) {
    activeTool.addNewMeasurement(evt, 'touch');
  } else if (activeTool instanceof _BaseAnnotationTool2.default) {
    (0, _addNewMeasurement2.default)(evt, activeTool);
  }
};

var _index = __webpack_require__(/*! ./../../store/index.js */ "./store/index.js");

var _getActiveToolsForElement = __webpack_require__(/*! ./../../store/getActiveToolsForElement.js */ "./store/getActiveToolsForElement.js");

var _getActiveToolsForElement2 = _interopRequireDefault(_getActiveToolsForElement);

var _addNewMeasurement = __webpack_require__(/*! ./addNewMeasurement.js */ "./eventDispatchers/touchEventHandlers/addNewMeasurement.js");

var _addNewMeasurement2 = _interopRequireDefault(_addNewMeasurement);

var _BaseAnnotationTool = __webpack_require__(/*! ../../base/BaseAnnotationTool.js */ "./base/BaseAnnotationTool.js");

var _BaseAnnotationTool2 = _interopRequireDefault(_BaseAnnotationTool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./eventDispatchers/touchToolEventDispatcher.js":
/*!******************************************************!*\
  !*** ./eventDispatchers/touchToolEventDispatcher.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _index = __webpack_require__(/*! ./touchEventHandlers/index.js */ "./eventDispatchers/touchEventHandlers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These listeners are emitted in order, and can be cancelled/prevented from bubbling
 * by any previous event.
 * - tap:
 * - touchStart: check to see if we are close to an existing annotation, grab it
 * - touchDrag:
 * - touchStartActive: createNewMeasurement (usually)
 * - touchPress:
 * - touchRotate:
 * - doubleTap: usually a one-time apply specialty action
 * - touchPinch:
 * - onImageRendered: redraw visible tool data
 * @param {*} element
 */
var enable = function enable(element) {
  element.addEventListener(_events2.default.TAP, _index.tap);
  element.addEventListener(_events2.default.TOUCH_START, _index.touchStart);
  element.addEventListener(_events2.default.TOUCH_DRAG, _index.touchDrag);
  element.addEventListener(_events2.default.TOUCH_END, _index.touchEnd);
  // Mouse equivelant is `mouse_down_activate`
  // Should the naming pattern here match?
  element.addEventListener(_events2.default.TOUCH_START_ACTIVE, _index.touchStartActive);
  element.addEventListener(_events2.default.TOUCH_PRESS, _index.touchPress);
  element.addEventListener(_events2.default.DOUBLE_TAP, _index.doubleTap);
  element.addEventListener(_events2.default.TOUCH_PINCH, _index.touchPinch);
  element.addEventListener(_events2.default.TOUCH_ROTATE, _index.touchRotate);
  element.addEventListener(_events2.default.MULTI_TOUCH_DRAG, _index.multiTouchDrag);
};

var disable = function disable(element) {
  element.removeEventListener(_events2.default.TAP, _index.tap);
  element.removeEventListener(_events2.default.TOUCH_START, _index.touchStart);
  element.removeEventListener(_events2.default.TOUCH_DRAG, _index.touchDrag);
  element.removeEventListener(_events2.default.TOUCH_END, _index.touchEnd);
  // Mouse equivelant is `mouse_down_activate`
  // Should the naming pattern here match?
  element.removeEventListener(_events2.default.TOUCH_START_ACTIVE, _index.touchStartActive);
  element.removeEventListener(_events2.default.TOUCH_PRESS, _index.touchPress);
  element.removeEventListener(_events2.default.DOUBLE_TAP, _index.doubleTap);
  element.removeEventListener(_events2.default.TOUCH_PINCH, _index.touchPinch);
  element.removeEventListener(_events2.default.TOUCH_ROTATE, _index.touchRotate);
  element.removeEventListener(_events2.default.MULTI_TOUCH_DRAG, _index.multiTouchDrag);
};

exports.default = {
  enable: enable,
  disable: disable
};

/***/ }),

/***/ "./eventListeners/index.js":
/*!*********************************!*\
  !*** ./eventListeners/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.touchEventListeners = exports.mouseWheelEventListeners = exports.mouseEventListeners = exports.keyboardEventListeners = undefined;

var _keyboardEventListeners = __webpack_require__(/*! ./keyboardEventListeners.js */ "./eventListeners/keyboardEventListeners.js");

var _keyboardEventListeners2 = _interopRequireDefault(_keyboardEventListeners);

var _mouseEventListeners = __webpack_require__(/*! ./mouseEventListeners.js */ "./eventListeners/mouseEventListeners.js");

var _mouseEventListeners2 = _interopRequireDefault(_mouseEventListeners);

var _mouseWheelEventListeners = __webpack_require__(/*! ./mouseWheelEventListeners.js */ "./eventListeners/mouseWheelEventListeners.js");

var _mouseWheelEventListeners2 = _interopRequireDefault(_mouseWheelEventListeners);

var _touchEventListeners = __webpack_require__(/*! ./touchEventListeners.js */ "./eventListeners/touchEventListeners.js");

var _touchEventListeners2 = _interopRequireDefault(_touchEventListeners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.keyboardEventListeners = _keyboardEventListeners2.default;
exports.mouseEventListeners = _mouseEventListeners2.default;
exports.mouseWheelEventListeners = _mouseWheelEventListeners2.default;
exports.touchEventListeners = _touchEventListeners2.default;

/***/ }),

/***/ "./eventListeners/keyboardEventListeners.js":
/*!**************************************************!*\
  !*** ./eventListeners/keyboardEventListeners.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _triggerEvent = __webpack_require__(/*! ../util/triggerEvent.js */ "./util/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mouseX = void 0;
var mouseY = void 0;

function keyPress(e) {
  var element = e.currentTarget;
  var enabledElement = _externalModules2.default.cornerstone.getEnabledElement(element);

  if (!enabledElement.image) {
    return;
  }

  var keyPressData = {
    event: window.event || e, // Old IE support
    element: element,
    viewport: _externalModules2.default.cornerstone.getViewport(element),
    image: enabledElement.image,
    currentPoints: {
      page: {
        x: mouseX,
        y: mouseY
      },
      image: _externalModules2.default.cornerstone.pageToPixel(element, mouseX, mouseY)
    },
    keyCode: e.keyCode,
    which: e.which
  };

  keyPressData.currentPoints.canvas = _externalModules2.default.cornerstone.pixelToCanvas(element, keyPressData.currentPoints.image);

  var keyPressEvents = {
    keydown: _events2.default.KEY_DOWN,
    keypress: _events2.default.KEY_PRESS,
    keyup: _events2.default.KEY_UP
  };

  (0, _triggerEvent2.default)(element, keyPressEvents[e.type], keyPressData);
}

function mouseMove(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
}

var keyboardEvents = ['keydown', 'keypress', 'keyup'];

function enable(element) {
  keyboardEvents.forEach(function (eventType) {
    element.removeEventListener(eventType, keyPress);
    element.addEventListener(eventType, keyPress);
  });

  element.removeEventListener('mousemove', mouseMove);
  element.addEventListener('mousemove', mouseMove);
}

function disable(element) {
  keyboardEvents.forEach(function (eventType) {
    element.removeEventListener(eventType, keyPress);
  });

  element.removeEventListener('mousemove', mouseMove);
}

exports.default = {
  enable: enable,
  disable: disable
};

/***/ }),

/***/ "./eventListeners/mouseEventListeners.js":
/*!***********************************************!*\
  !*** ./eventListeners/mouseEventListeners.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _copyPoints = __webpack_require__(/*! ../util/copyPoints.js */ "./util/copyPoints.js");

var _copyPoints2 = _interopRequireDefault(_copyPoints);

var _triggerEvent = __webpack_require__(/*! ../util/triggerEvent.js */ "./util/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isClickEvent = true;
var preventClickTimeout = void 0;
var clickDelay = 200;

function getEventButtons(event) {
  if (typeof event.buttons === 'number') {
    return event.buttons;
  }

  switch (event.which) {
    // No button
    case 0:
      return 0;
    // Left
    case 1:
      return 1;
    // Middle
    case 2:
      return 4;
    // Right
    case 3:
      return 2;
  }

  return 0;
}

function preventClickHandler() {
  isClickEvent = false;
}

function mouseDoubleClick(e) {
  var element = e.currentTarget;
  var enabledElement = _externalModules2.default.cornerstone.getEnabledElement(element);

  if (!enabledElement.image) {
    return;
  }

  var eventType = _events2.default.MOUSE_DOUBLE_CLICK;

  var startPoints = {
    page: _externalModules2.default.cornerstoneMath.point.pageToPoint(e),
    image: _externalModules2.default.cornerstone.pageToPixel(element, e.pageX, e.pageY),
    client: {
      x: e.clientX,
      y: e.clientY
    }
  };

  startPoints.canvas = _externalModules2.default.cornerstone.pixelToCanvas(element, startPoints.image);

  var lastPoints = (0, _copyPoints2.default)(startPoints);

  console.log('double-click: ' + getEventButtons(e));
  var eventData = {
    event: e,
    buttons: getEventButtons(e),
    viewport: _externalModules2.default.cornerstone.getViewport(element),
    image: enabledElement.image,
    element: element,
    startPoints: startPoints,
    lastPoints: lastPoints,
    currentPoints: startPoints,
    deltaPoints: {
      x: 0,
      y: 0
    },
    type: eventType
  };

  (0, _triggerEvent2.default)(element, eventType, eventData);
}

function mouseDown(e) {
  var element = e.currentTarget;
  var enabledElement = _externalModules2.default.cornerstone.getEnabledElement(element);

  if (!enabledElement.image) {
    return;
  }

  preventClickTimeout = setTimeout(preventClickHandler, clickDelay);

  var eventType = _events2.default.MOUSE_DOWN;

  // Prevent CornerstoneToolsMouseMove while mouse is down
  element.removeEventListener('mousemove', mouseMove);

  var startPoints = {
    page: _externalModules2.default.cornerstoneMath.point.pageToPoint(e),
    image: _externalModules2.default.cornerstone.pageToPixel(element, e.pageX, e.pageY),
    client: {
      x: e.clientX,
      y: e.clientY
    }
  };

  startPoints.canvas = _externalModules2.default.cornerstone.pixelToCanvas(element, startPoints.image);

  var lastPoints = (0, _copyPoints2.default)(startPoints);

  console.log('mousedown: ' + getEventButtons(e));
  var eventData = {
    event: e,
    buttons: getEventButtons(e),
    viewport: _externalModules2.default.cornerstone.getViewport(element),
    image: enabledElement.image,
    element: element,
    startPoints: startPoints,
    lastPoints: lastPoints,
    currentPoints: startPoints,
    deltaPoints: {
      x: 0,
      y: 0
    },
    type: eventType
  };

  var eventPropagated = (0, _triggerEvent2.default)(eventData.element, eventType, eventData);

  if (eventPropagated) {
    // No tools responded to this event, create a new tool
    eventData.type = _events2.default.MOUSE_DOWN_ACTIVATE;
    (0, _triggerEvent2.default)(eventData.element, _events2.default.MOUSE_DOWN_ACTIVATE, eventData);
  }

  function onMouseMove(e) {
    // Calculate our current points in page and image coordinates
    var eventType = _events2.default.MOUSE_DRAG;
    var currentPoints = {
      page: _externalModules2.default.cornerstoneMath.point.pageToPoint(e),
      image: _externalModules2.default.cornerstone.pageToPixel(element, e.pageX, e.pageY),
      client: {
        x: e.clientX,
        y: e.clientY
      }
    };

    currentPoints.canvas = _externalModules2.default.cornerstone.pixelToCanvas(element, currentPoints.image);

    // Calculate delta values in page and image coordinates
    var deltaPoints = {
      page: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.page, lastPoints.page),
      image: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.image, lastPoints.image),
      client: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.client, lastPoints.client),
      canvas: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.canvas, lastPoints.canvas)
    };

    console.log('mousemove ' + getEventButtons(e));
    var eventData = {
      buttons: getEventButtons(e),
      viewport: _externalModules2.default.cornerstone.getViewport(element),
      image: enabledElement.image,
      element: element,
      startPoints: startPoints,
      lastPoints: lastPoints,
      currentPoints: currentPoints,
      deltaPoints: deltaPoints,
      type: eventType,
      ctrlKey: e.ctrlKey,
      metaKey: e.metaKey,
      shiftKey: e.shiftKey
    };

    (0, _triggerEvent2.default)(eventData.element, eventType, eventData);

    // Update the last points
    lastPoints = (0, _copyPoints2.default)(currentPoints);
  }

  // Hook mouseup so we can unbind our event listeners
  // When they stop dragging
  function onMouseUp(e) {
    // Cancel the timeout preventing the click event from triggering
    clearTimeout(preventClickTimeout);

    var eventType = _events2.default.MOUSE_UP;

    if (isClickEvent) {
      eventType = _events2.default.MOUSE_CLICK;
    }

    // Calculate our current points in page and image coordinates
    var currentPoints = {
      page: _externalModules2.default.cornerstoneMath.point.pageToPoint(e),
      image: _externalModules2.default.cornerstone.pageToPixel(element, e.pageX, e.pageY),
      client: {
        x: e.clientX,
        y: e.clientY
      }
    };

    currentPoints.canvas = _externalModules2.default.cornerstone.pixelToCanvas(element, currentPoints.image);

    // Calculate delta values in page and image coordinates
    var deltaPoints = {
      page: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.page, lastPoints.page),
      image: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.image, lastPoints.image),
      client: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.client, lastPoints.client),
      canvas: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.canvas, lastPoints.canvas)
    };

    console.log('mouseup: ' + getEventButtons(e));
    var eventData = {
      event: e,
      buttons: getEventButtons(e),
      viewport: _externalModules2.default.cornerstone.getViewport(element),
      image: enabledElement.image,
      element: element,
      startPoints: startPoints,
      lastPoints: lastPoints,
      currentPoints: currentPoints,
      deltaPoints: deltaPoints,
      type: eventType
    };

    (0, _triggerEvent2.default)(eventData.element, eventType, eventData);

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    element.addEventListener('mousemove', mouseMove);

    isClickEvent = true;
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

function mouseMove(e) {
  var element = e.currentTarget;
  var enabledElement = _externalModules2.default.cornerstone.getEnabledElement(element);

  if (!enabledElement.image) {
    return;
  }

  var eventType = _events2.default.MOUSE_MOVE;

  var startPoints = {
    page: _externalModules2.default.cornerstoneMath.point.pageToPoint(e),
    image: _externalModules2.default.cornerstone.pageToPixel(element, e.pageX, e.pageY),
    client: {
      x: e.clientX,
      y: e.clientY
    }
  };

  startPoints.canvas = _externalModules2.default.cornerstone.pixelToCanvas(element, startPoints.image);

  var lastPoints = (0, _copyPoints2.default)(startPoints);

  // Calculate our current points in page and image coordinates
  var currentPoints = {
    page: _externalModules2.default.cornerstoneMath.point.pageToPoint(e),
    image: _externalModules2.default.cornerstone.pageToPixel(element, e.pageX, e.pageY),
    client: {
      x: e.clientX,
      y: e.clientY
    }
  };

  currentPoints.canvas = _externalModules2.default.cornerstone.pixelToCanvas(element, currentPoints.image);

  // Calculate delta values in page and image coordinates
  var deltaPoints = {
    page: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.page, lastPoints.page),
    image: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.image, lastPoints.image),
    client: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.client, lastPoints.client),
    canvas: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.canvas, lastPoints.canvas)
  };

  var eventData = {
    viewport: _externalModules2.default.cornerstone.getViewport(element),
    image: enabledElement.image,
    element: element,
    startPoints: startPoints,
    lastPoints: lastPoints,
    currentPoints: currentPoints,
    deltaPoints: deltaPoints,
    type: eventType
  };

  (0, _triggerEvent2.default)(element, eventType, eventData);

  // Update the last points
  lastPoints = (0, _copyPoints2.default)(currentPoints);
}

function disable(element) {
  element.removeEventListener('mousedown', mouseDown);
  element.removeEventListener('mousemove', mouseMove);
  element.removeEventListener('dblclick', mouseDoubleClick);
}

function enable(element) {
  // Prevent handlers from being attached multiple times
  disable(element);

  element.addEventListener('mousedown', mouseDown);
  element.addEventListener('mousemove', mouseMove);
  element.addEventListener('dblclick', mouseDoubleClick);
}

exports.default = {
  enable: enable,
  disable: disable
};

/***/ }),

/***/ "./eventListeners/mouseWheelEventListeners.js":
/*!****************************************************!*\
  !*** ./eventListeners/mouseWheelEventListeners.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _triggerEvent = __webpack_require__(/*! ../util/triggerEvent.js */ "./util/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mouseWheel(e) {
  var element = e.currentTarget;
  var enabledElement = _externalModules2.default.cornerstone.getEnabledElement(element);

  if (!enabledElement.image) {
    return;
  }

  // !!!HACK/NOTE/WARNING!!!
  // For some reason I am getting mousewheel and DOMMouseScroll events on my
  // Mac os x mavericks system when middle mouse button dragging.
  // I couldn't find any info about this so this might break other systems
  // Webkit hack
  if (e.type === 'mousewheel' && e.wheelDeltaY === 0) {
    return;
  }
  // Firefox hack
  if (e.type === 'DOMMouseScroll' && e.axis === 1) {
    return;
  }

  e.preventDefault();

  var x = void 0;
  var y = void 0;

  if (e.pageX !== undefined && e.pageY !== undefined) {
    x = e.pageX;
    y = e.pageY;
  } else {
    // IE9 & IE10
    x = e.x;
    y = e.y;
  }

  var startingCoords = _externalModules2.default.cornerstone.pageToPixel(element, x, y);

  e = window.event && window.event.wheelDelta ? window.event : e; // Old IE support

  var wheelDelta = void 0;

  if (e.wheelDelta) {
    wheelDelta = e.wheelDelta;
  } else if (e.deltaY) {
    wheelDelta = -e.deltaY;
  } else if (e.detail) {
    wheelDelta = -e.detail;
  } else {
    wheelDelta = e.wheelDelta;
  }

  var direction = wheelDelta < 0 ? -1 : 1;

  var mouseWheelData = {
    element: element,
    viewport: _externalModules2.default.cornerstone.getViewport(element),
    detail: e,
    image: enabledElement.image,
    direction: direction,
    pageX: x,
    pageY: y,
    imageX: startingCoords.x,
    imageY: startingCoords.y
  };

  (0, _triggerEvent2.default)(element, _events2.default.MOUSE_WHEEL, mouseWheelData);
}

var mouseWheelEvents = ['mousewheel', 'DOMMouseScroll'];

function enable(element) {
  // Prevent handlers from being attached multiple times
  disable(element);

  mouseWheelEvents.forEach(function (eventType) {
    element.addEventListener(eventType, mouseWheel);
  });
}

function disable(element) {
  mouseWheelEvents.forEach(function (eventType) {
    element.removeEventListener(eventType, mouseWheel);
  });
}

exports.default = {
  enable: enable,
  disable: disable
};

/***/ }),

/***/ "./eventListeners/onImageRenderedBrushEventHandler.js":
/*!************************************************************!*\
  !*** ./eventListeners/onImageRenderedBrushEventHandler.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (evt) {
  var eventData = evt.detail;
  var element = eventData.element;
  var maxSegmentations = _BaseBrushTool2.default.getNumberOfColors();
  var toolData = (0, _toolState.getToolState)(element, _BaseBrushTool2.default.getReferencedToolDataName());

  if (!toolData) {
    // Make toolData array as big as max number of segmentations.
    for (var i = 0; i < maxSegmentations; i++) {
      (0, _toolState.addToolState)(element, _BaseBrushTool2.default.getReferencedToolDataName(), {});
    }

    toolData = (0, _toolState.getToolState)(element, _BaseBrushTool2.default.getReferencedToolDataName());

    // TEMP: HACK: Create first pixel data such that the tool has some data and the brush
    // cursor can be rendered. Can be replaced once we have a mechanism for SVG cursors.
    var newPixelData = new Uint8ClampedArray(eventData.image.width * eventData.image.height);
    toolData.data[0].pixelData = newPixelData;

    toolData = (0, _toolState.getToolState)(element, _BaseBrushTool2.default.getReferencedToolDataName());
  }

  var enabledElement = _externalModules2.default.cornerstone.getEnabledElement(element);
  var enabledElementUID = enabledElement.uuid;

  var segData = {
    visibleSegmentations: brushState.getters.visibleSegmentationsForElement(enabledElementUID),
    imageBitmapCache: brushState.getters.imageBitmapCacheForElement(enabledElementUID),
    toolData: toolData
  };

  for (var segIndex = 0; segIndex < maxSegmentations; segIndex++) {
    if (shouldRenderSegmentation(evt, segIndex, segData)) {
      renderSegmentation(evt, segIndex, segData);
    }
  }
};

var _index = __webpack_require__(/*! ../store/index.js */ "./store/index.js");

var _index2 = _interopRequireDefault(_index);

var _getActiveToolsForElement = __webpack_require__(/*! ../store/getActiveToolsForElement.js */ "./store/getActiveToolsForElement.js");

var _getActiveToolsForElement2 = _interopRequireDefault(_getActiveToolsForElement);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseBrushTool = __webpack_require__(/*! ../base/BaseBrushTool.js */ "./base/BaseBrushTool.js");

var _BaseBrushTool2 = _interopRequireDefault(_BaseBrushTool);

var _drawing = __webpack_require__(/*! ../util/drawing.js */ "./util/drawing.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var brushState = _index2.default.modules.brush;

/**
 * Used to redraw the brush label map data per render.
 *
 * @param {Object} evt - The event.
 */


function shouldRenderSegmentation(evt, segIndex, segData) {
  var element = evt.detail.element;
  var toolData = segData.toolData;
  var visibleSegmentations = segData.visibleSegmentations;

  if (!toolData.data[segIndex].pixelData) {
    // No data, no render.
    return false;
  }

  if (visibleSegmentations[segIndex]) {
    // Has data and marked as visible, render!
    return true;
  }

  var currentColor = brushState.getters.draw();

  if (currentColor !== segIndex) {
    // Hidden and not current color, don't render.
    return false;
  }

  // Check that a brush tool is active.
  var activeTools = (0, _getActiveToolsForElement2.default)(element, _index2.default.state.tools);
  var brushTools = activeTools.filter(function (tool) {
    return tool instanceof _BaseBrushTool2.default;
  });

  if (brushTools.length > 0) {
    // Active brush tool with same color, render!
    return true;
  }

  return false;
}

function renderSegmentation(evt, segIndex, segData) {
  var toolData = segData.toolData;
  var imageBitmapCache = segData.imageBitmapCache;
  var visibleSegmentations = segData.visibleSegmentations;

  // Draw previous image if cached.
  if (imageBitmapCache && imageBitmapCache[segIndex]) {
    _drawImageBitmap(evt, imageBitmapCache[segIndex], visibleSegmentations[segIndex]);
  }

  if (toolData.data[segIndex].invalidated) {
    createNewBitmapAndQueueRenderOfSegmentation(evt, toolData, segIndex);
  }
}

function createNewBitmapAndQueueRenderOfSegmentation(evt, toolData, segIndex) {
  var eventData = evt.detail;
  var element = eventData.element;
  var enabledElement = _externalModules2.default.cornerstone.getEnabledElement(element);

  var pixelData = toolData.data[segIndex].pixelData;

  var colormapId = brushState.getters.colorMapId();
  var colormap = _externalModules2.default.cornerstone.colors.getColormap(colormapId);
  var colorLutTable = [[0, 0, 0, 0], colormap.getColor(segIndex)];

  var imageData = new ImageData(eventData.image.width, eventData.image.height);
  var image = {
    stats: {},
    minPixelValue: 0,
    getPixelData: function getPixelData() {
      return pixelData;
    }
  };

  _externalModules2.default.cornerstone.storedPixelDataToCanvasImageDataColorLUT(image, colorLutTable, imageData.data);

  window.createImageBitmap(imageData).then(function (newImageBitmap) {
    brushState.mutations.SET_ELEMENT_IMAGE_BITMAP_CACHE(enabledElement.uuid, segIndex, newImageBitmap);
    toolData.data[segIndex].invalidated = false;

    _externalModules2.default.cornerstone.updateImage(eventData.element);
  });
}

/**
 * Draws the ImageBitmap the canvas.
 *
 * @param  {Object} evt description
 */
function _drawImageBitmap(evt, imageBitmap, alwaysVisible) {
  var eventData = evt.detail;
  var context = (0, _drawing.getNewContext)(eventData.canvasContext.canvas);

  var canvasTopLeft = _externalModules2.default.cornerstone.pixelToCanvas(eventData.element, {
    x: 0,
    y: 0
  });
  var canvasBottomRight = _externalModules2.default.cornerstone.pixelToCanvas(eventData.element, {
    x: eventData.image.width,
    y: eventData.image.height
  });
  var canvasWidth = canvasBottomRight.x - canvasTopLeft.x;
  var canvasHeight = canvasBottomRight.y - canvasTopLeft.y;

  context.imageSmoothingEnabled = false;
  context.globalAlpha = getLayerAlpha(alwaysVisible);
  context.drawImage(imageBitmap, canvasTopLeft.x, canvasTopLeft.y, canvasWidth, canvasHeight);
  context.globalAlpha = 1.0;
}

function getLayerAlpha(alwaysVisible) {
  if (alwaysVisible) {
    return brushState.getters.alpha();
  }

  return brushState.getters.hiddenButActiveAlpha();
}

/***/ }),

/***/ "./eventListeners/onNewImageBrushEventHandler.js":
/*!*******************************************************!*\
  !*** ./eventListeners/onNewImageBrushEventHandler.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (evt) {
  var eventData = evt.detail;
  var element = eventData.element;
  var toolData = (0, _toolState.getToolState)(element, _BaseBrushTool2.default.getReferencedToolDataName());

  if (!toolData) {
    // Make toolData array as big as max number of segmentations.
    var _maxSegmentations = _BaseBrushTool2.default.getNumberOfColors();

    for (var i = 0; i < _maxSegmentations; i++) {
      (0, _toolState.addToolState)(element, _BaseBrushTool2.default.getReferencedToolDataName(), {});
    }

    toolData = (0, _toolState.getToolState)(element, _BaseBrushTool2.default.getReferencedToolDataName());

    // TEMP: HACK: Create first pixel data such that the tool has some data and the brush
    // cursor can be rendered. Can be replaced once we have a mechanism for SVG cursors.
    var newPixelData = new Uint8ClampedArray(eventData.image.width * eventData.image.height);
    toolData.data[0].pixelData = newPixelData;

    toolData = (0, _toolState.getToolState)(element, _BaseBrushTool2.default.getReferencedToolDataName());
  }
  var enabledElement = _externalModules2.default.cornerstone.getEnabledElement(element);
  var maxSegmentations = _BaseBrushTool2.default.getNumberOfColors();

  // Clear the element's cache
  brushState.mutations.CLEAR_ELEMENT_IMAGE_BITMAP_CACHE(enabledElement.uuid);

  // invalidate the segmentation bitmap such that it gets redrawn.
  for (var _i = 0; _i < maxSegmentations; _i++) {
    toolData.data[_i].invalidated = true;
  }

  // Refresh the canvas
  _externalModules2.default.cornerstone.updateImage(eventData.element);
};

var _index = __webpack_require__(/*! ../store/index.js */ "./store/index.js");

var _index2 = _interopRequireDefault(_index);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _BaseBrushTool = __webpack_require__(/*! ../base/BaseBrushTool.js */ "./base/BaseBrushTool.js");

var _BaseBrushTool2 = _interopRequireDefault(_BaseBrushTool);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _getToolForElement = __webpack_require__(/*! ../store/getToolForElement.js */ "./store/getToolForElement.js");

var _getToolForElement2 = _interopRequireDefault(_getToolForElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var brushState = _index2.default.modules.brush;

/**
* Clears the brush imageBitmapCache,
* invaldates the data and calls for a re-render.
* @event
* @param {Object} evt - The event.
*/

/***/ }),

/***/ "./eventListeners/preventGhostClick.js":
/*!*********************************************!*\
  !*** ./eventListeners/preventGhostClick.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Functions to prevent ghost clicks following a touch
// All credit to @kosich
// https://gist.github.com/kosich/23188dd86633b6c2efb7

var antiGhostDelay = 2000,
    pointerType = {
  mouse: 0,
  touch: 1
};

var lastInteractionType = void 0,
    lastInteractionTime = void 0;

function handleTap(type, e) {
  var now = Date.now();

  if (type !== lastInteractionType) {
    if (now - lastInteractionTime <= antiGhostDelay) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();

      return false;
    }

    lastInteractionType = type;
  }

  lastInteractionTime = now;
}

// Cacheing the function references
// Necessary because a new function reference is created after .bind() is called
// http://stackoverflow.com/questions/11565471/removing-event-listener-which-was-added-with-bind
var handleTapMouse = handleTap.bind(null, pointerType.mouse);
var handleTapTouch = handleTap.bind(null, pointerType.touch);

function attachEvents(element, eventList, interactionType) {
  var tapHandler = interactionType ? handleTapMouse : handleTapTouch;

  eventList.forEach(function (eventName) {
    element.addEventListener(eventName, tapHandler);
  });
}

function removeEvents(element, eventList, interactionType) {
  var tapHandler = interactionType ? handleTapMouse : handleTapTouch;

  eventList.forEach(function (eventName) {
    element.removeEventListener(eventName, tapHandler);
  });
}

var mouseEvents = ['mousedown', 'mouseup'];
var touchEvents = ['touchstart', 'touchend'];

function disable(element) {
  removeEvents(element, mouseEvents, pointerType.mouse);
  removeEvents(element, touchEvents, pointerType.touch);
}

function enable(element) {
  disable(element);
  attachEvents(element, mouseEvents, pointerType.mouse);
  attachEvents(element, touchEvents, pointerType.touch);
}

exports.default = {
  enable: enable,
  disable: disable
};

/***/ }),

/***/ "./eventListeners/touchEventListeners.js":
/*!***********************************************!*\
  !*** ./eventListeners/touchEventListeners.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _copyPoints = __webpack_require__(/*! ../util/copyPoints.js */ "./util/copyPoints.js");

var _copyPoints2 = _interopRequireDefault(_copyPoints);

var _preventGhostClick = __webpack_require__(/*! ./preventGhostClick.js */ "./eventListeners/preventGhostClick.js");

var _preventGhostClick2 = _interopRequireDefault(_preventGhostClick);

var _triggerEvent = __webpack_require__(/*! ../util/triggerEvent.js */ "./util/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

var _toolOptions = __webpack_require__(/*! ../toolOptions.js */ "./toolOptions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startPoints = void 0,
    currentPoints = void 0,
    lastPoints = void 0,
    deltaPoints = void 0,
    eventData = void 0,
    touchStartDelay = void 0,
    pressTimeout = void 0,
    pageDistanceMoved = void 0;

var lastScale = 1.0,
    lastRotation = 0.0,
    preventNextPinch = false,
    isPress = false,
    lastDelta = void 0;

var pressDelay = 700,
    pressMaxDistance = 5;

var toolType = 'touchInput';

function onTouch(e) {
  var element = e.currentTarget || e.srcEvent.currentTarget;
  var enabledElement = _externalModules2.default.cornerstone.getEnabledElement(element);

  if (!enabledElement.image) {
    return;
  }

  var eventType = void 0,
      scaleChange = void 0,
      delta = void 0,
      remainingPointers = void 0,
      rotation = void 0;

  // Prevent mouse events from occurring alongside touch events
  e.preventDefault();

  // If more than one finger is placed on the element, stop the press timeout
  if (e.pointers && e.pointers.length > 1 || e.touches && e.touches.length > 1) {
    isPress = false;
    clearTimeout(pressTimeout);
  }

  switch (e.type) {
    case 'tap':
      isPress = false;
      clearTimeout(pressTimeout);

      // Calculate our current points in page and image coordinates
      currentPoints = {
        page: _externalModules2.default.cornerstoneMath.point.pageToPoint(e.pointers[0]),
        image: _externalModules2.default.cornerstone.pageToPixel(element, e.pointers[0].pageX, e.pointers[0].pageY),
        client: {
          x: e.pointers[0].clientX,
          y: e.pointers[0].clientY
        }
      };
      currentPoints.canvas = _externalModules2.default.cornerstone.pixelToCanvas(element, currentPoints.image);

      eventType = _events2.default.TAP;
      eventData = {
        event: e,
        viewport: _externalModules2.default.cornerstone.getViewport(element),
        image: enabledElement.image,
        element: element,
        currentPoints: currentPoints,
        type: eventType,
        isTouchEvent: true
      };

      (0, _triggerEvent2.default)(element, eventType, eventData);
      break;

    case 'doubletap':
      isPress = false;
      clearTimeout(pressTimeout);

      // Calculate our current points in page and image coordinates
      currentPoints = {
        page: _externalModules2.default.cornerstoneMath.point.pageToPoint(e.pointers[0]),
        image: _externalModules2.default.cornerstone.pageToPixel(element, e.pointers[0].pageX, e.pointers[0].pageY),
        client: {
          x: e.pointers[0].clientX,
          y: e.pointers[0].clientY
        }
      };
      currentPoints.canvas = _externalModules2.default.cornerstone.pixelToCanvas(element, currentPoints.image);

      eventType = _events2.default.DOUBLE_TAP;
      eventData = {
        event: e,
        viewport: _externalModules2.default.cornerstone.getViewport(element),
        image: enabledElement.image,
        element: element,
        currentPoints: currentPoints,
        type: eventType,
        isTouchEvent: true
      };

      (0, _triggerEvent2.default)(element, eventType, eventData);
      break;

    case 'pinchstart':
      isPress = false;
      clearTimeout(pressTimeout);

      lastScale = 1.0;
      break;

    case 'pinchmove':
      isPress = false;
      clearTimeout(pressTimeout);

      if (preventNextPinch === true) {
        lastScale = e.scale;
        preventNextPinch = false;
        break;
      }

      scaleChange = (e.scale - lastScale) / lastScale;

      startPoints = {
        page: e.center,
        image: _externalModules2.default.cornerstone.pageToPixel(element, e.center.x, e.center.y)
      };
      startPoints.canvas = _externalModules2.default.cornerstone.pixelToCanvas(element, startPoints.image);

      eventType = _events2.default.TOUCH_PINCH;
      eventData = {
        event: e,
        startPoints: startPoints,
        viewport: _externalModules2.default.cornerstone.getViewport(element),
        image: enabledElement.image,
        element: element,
        direction: e.scale < 1 ? 1 : -1,
        scaleChange: scaleChange,
        type: eventType,
        isTouchEvent: true
      };

      (0, _triggerEvent2.default)(element, eventType, eventData);

      lastScale = e.scale;
      break;

    case 'touchstart':
      lastScale = 1.0;

      clearTimeout(pressTimeout);

      clearTimeout(touchStartDelay);
      touchStartDelay = setTimeout(function () {
        startPoints = {
          page: _externalModules2.default.cornerstoneMath.point.pageToPoint(e.touches[0]),
          image: _externalModules2.default.cornerstone.pageToPixel(element, e.touches[0].pageX, e.touches[0].pageY),
          client: {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
          }
        };
        startPoints.canvas = _externalModules2.default.cornerstone.pixelToCanvas(element, startPoints.image);

        eventType = _events2.default.TOUCH_START;
        if (e.touches.length > 1) {
          eventType = _events2.default.MULTI_TOUCH_START;
        }

        eventData = {
          event: e,
          viewport: _externalModules2.default.cornerstone.getViewport(element),
          image: enabledElement.image,
          element: element,
          startPoints: startPoints,
          currentPoints: startPoints,
          type: eventType,
          isTouchEvent: true
        };

        var eventPropagated = (0, _triggerEvent2.default)(element, eventType, eventData);

        if (eventPropagated === true) {
          // IsPress = false;
          // ClearTimeout(pressTimeout);

          // No current tools responded to the drag action.
          // Create new tool measurement
          eventType = _events2.default.TOUCH_START_ACTIVE;
          if (e.touches.length > 1) {
            eventType = _events2.default.MULTI_TOUCH_START_ACTIVE;
          }

          eventData.type = eventType;
          (0, _triggerEvent2.default)(element, eventType, eventData);
        }

        // Console.log(eventType);
        lastPoints = (0, _copyPoints2.default)(startPoints);
      }, 50);

      isPress = true;
      pageDistanceMoved = 0;
      pressTimeout = setTimeout(function () {
        if (!isPress) {
          return;
        }

        currentPoints = {
          page: _externalModules2.default.cornerstoneMath.point.pageToPoint(e.touches[0]),
          image: _externalModules2.default.cornerstone.pageToPixel(element, e.touches[0].pageX, e.touches[0].pageY),
          client: {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
          }
        };
        currentPoints.canvas = _externalModules2.default.cornerstone.pixelToCanvas(element, startPoints.image);

        eventType = _events2.default.TOUCH_PRESS;
        eventData = {
          event: e,
          viewport: _externalModules2.default.cornerstone.getViewport(element),
          image: enabledElement.image,
          element: element,
          currentPoints: currentPoints,
          type: eventType,
          isTouchEvent: true
        };

        (0, _triggerEvent2.default)(element, eventType, eventData);

        // Console.log(eventType);
      }, pressDelay);
      break;

    case 'touchend':
      lastScale = 1.0;

      isPress = false;
      clearTimeout(pressTimeout);

      setTimeout(function () {
        startPoints = {
          page: _externalModules2.default.cornerstoneMath.point.pageToPoint(e.changedTouches[0]),
          image: _externalModules2.default.cornerstone.pageToPixel(element, e.changedTouches[0].pageX, e.changedTouches[0].pageY),
          client: {
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY
          }
        };
        startPoints.canvas = _externalModules2.default.cornerstone.pixelToCanvas(element, startPoints.image);

        eventType = _events2.default.TOUCH_END;

        eventData = {
          event: e,
          viewport: _externalModules2.default.cornerstone.getViewport(element),
          image: enabledElement.image,
          element: element,
          startPoints: startPoints,
          currentPoints: startPoints,
          type: eventType,
          isTouchEvent: true
        };

        (0, _triggerEvent2.default)(element, eventType, eventData);
      }, 50);
      break;

    case 'panmove':
      // Using the delta-value of HammerJS, because it takes all pointers into account
      // This is very important when using panning in combination with pinch-zooming
      // But HammerJS' delta is relative to the start of the pan event
      // So it needs to be converted to a per-event-delta for CornerstoneTools
      delta = {
        x: e.deltaX - lastDelta.x,
        y: e.deltaY - lastDelta.y
      };

      lastDelta = {
        x: e.deltaX,
        y: e.deltaY
      };

      // Calculate our current points in page and image coordinates
      currentPoints = {
        page: {
          x: lastPoints.page.x + delta.x,
          y: lastPoints.page.y + delta.y
        },
        image: _externalModules2.default.cornerstone.pageToPixel(element, lastPoints.page.x + delta.x, lastPoints.page.y + delta.y),
        client: {
          x: lastPoints.client.x + delta.x,
          y: lastPoints.client.y + delta.y
        }
      };
      currentPoints.canvas = _externalModules2.default.cornerstone.pixelToCanvas(element, currentPoints.image);

      // Calculate delta values in page and image coordinates
      deltaPoints = {
        page: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.page, lastPoints.page),
        image: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.image, lastPoints.image),
        client: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.client, lastPoints.client),
        canvas: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.canvas, lastPoints.canvas)
      };

      pageDistanceMoved += Math.sqrt(deltaPoints.page.x * deltaPoints.page.x + deltaPoints.page.y * deltaPoints.page.y);
      // Console.log("pageDistanceMoved: " + pageDistanceMoved);
      if (pageDistanceMoved > pressMaxDistance) {
        // Console.log('Press event aborted due to movement');
        isPress = false;
        clearTimeout(pressTimeout);
      }

      eventType = _events2.default.TOUCH_DRAG;
      if (e.pointers.length > 1) {
        eventType = _events2.default.MULTI_TOUCH_DRAG;
      }

      eventData = {
        viewport: _externalModules2.default.cornerstone.getViewport(element),
        image: enabledElement.image,
        element: element,
        startPoints: startPoints,
        lastPoints: lastPoints,
        currentPoints: currentPoints,
        deltaPoints: deltaPoints,
        numPointers: e.pointers.length,
        type: eventType,
        isTouchEvent: true
      };

      (0, _triggerEvent2.default)(element, eventType, eventData);

      lastPoints = (0, _copyPoints2.default)(currentPoints);
      break;

    case 'panstart':
      lastDelta = {
        x: e.deltaX,
        y: e.deltaY
      };

      currentPoints = {
        page: _externalModules2.default.cornerstoneMath.point.pageToPoint(e.pointers[0]),
        image: _externalModules2.default.cornerstone.pageToPixel(element, e.pointers[0].pageX, e.pointers[0].pageY),
        client: {
          x: e.pointers[0].clientX,
          y: e.pointers[0].clientY
        }
      };
      currentPoints.canvas = _externalModules2.default.cornerstone.pixelToCanvas(element, currentPoints.image);
      lastPoints = (0, _copyPoints2.default)(currentPoints);
      break;

    case 'panend':
      isPress = false;
      clearTimeout(pressTimeout);

      // If lastPoints is not yet set, it means panend fired without panstart or pan,
      // So we can ignore this event
      if (!lastPoints) {
        return false;
      }

      currentPoints = {
        page: _externalModules2.default.cornerstoneMath.point.pageToPoint(e.pointers[0]),
        image: _externalModules2.default.cornerstone.pageToPixel(element, e.pointers[0].pageX, e.pointers[0].pageY),
        client: {
          x: e.pointers[0].clientX,
          y: e.pointers[0].clientY
        }
      };
      currentPoints.canvas = _externalModules2.default.cornerstone.pixelToCanvas(element, currentPoints.image);

      // Calculate delta values in page and image coordinates
      deltaPoints = {
        page: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.page, lastPoints.page),
        image: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.image, lastPoints.image),
        client: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.client, lastPoints.client),
        canvas: _externalModules2.default.cornerstoneMath.point.subtract(currentPoints.canvas, lastPoints.canvas)
      };

      eventType = _events2.default.TOUCH_DRAG_END;

      eventData = {
        event: e.srcEvent,
        viewport: _externalModules2.default.cornerstone.getViewport(element),
        image: enabledElement.image,
        element: element,
        startPoints: startPoints,
        lastPoints: lastPoints,
        currentPoints: currentPoints,
        deltaPoints: deltaPoints,
        type: eventType,
        isTouchEvent: true
      };

      (0, _triggerEvent2.default)(element, eventType, eventData);

      remainingPointers = e.pointers.length - e.changedPointers.length;

      if (remainingPointers === 2) {
        preventNextPinch = true;
      }
      break;

    case 'rotatemove':
      isPress = false;
      clearTimeout(pressTimeout);

      rotation = e.rotation - lastRotation;

      lastRotation = e.rotation;

      eventType = _events2.default.TOUCH_ROTATE;
      eventData = {
        event: e.srcEvent,
        viewport: _externalModules2.default.cornerstone.getViewport(element),
        image: enabledElement.image,
        element: element,
        rotation: rotation,
        type: eventType
      };
      (0, _triggerEvent2.default)(element, eventType, eventData);
      break;
  }

  return false;
}

function enable(element) {
  disable(element);
  var Hammer = _externalModules2.default.Hammer;

  var hammerOptions = {
    inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
  };

  var mc = new Hammer.Manager(element, hammerOptions);

  var panOptions = {
    pointers: 0,
    direction: Hammer.DIRECTION_ALL,
    threshold: 0
  };

  var pan = new Hammer.Pan(panOptions);
  var pinch = new Hammer.Pinch({
    threshold: 0
  });
  var rotate = new Hammer.Rotate({
    threshold: 0
  });

  pinch.recognizeWith(pan);
  pinch.recognizeWith(rotate);
  rotate.recognizeWith(pan);

  var doubleTap = new Hammer.Tap({
    event: 'doubletap',
    taps: 2,
    interval: 1500,
    threshold: 50,
    posThreshold: 50
  });

  doubleTap.recognizeWith(pan);

  // Add to the Manager
  mc.add([doubleTap, pan, rotate, pinch]);
  mc.on('tap doubletap panstart panmove panend pinchstart pinchmove rotatemove', onTouch);

  _preventGhostClick2.default.enable(element);

  var touchEvents = ['touchstart', 'touchend'];

  touchEvents.forEach(function (eventType) {
    element.addEventListener(eventType, onTouch);
  });

  var options = (0, _toolOptions.getToolOptions)(toolType, element);

  options.hammer = mc;

  (0, _toolOptions.setToolOptions)(toolType, element, options);
}

function disable(element) {
  _preventGhostClick2.default.disable(element);

  var touchEvents = ['touchstart', 'touchend'];

  touchEvents.forEach(function (eventType) {
    element.removeEventListener(eventType, onTouch);
  });

  var options = (0, _toolOptions.getToolOptions)(toolType, element);
  var mc = options.hammer;

  if (mc) {
    mc.off('tap doubletap panstart panmove panend pinchstart pinchmove rotatemove', onTouch);
  }
}

// Module exports
var touchInput = {
  enable: enable,
  disable: disable
};

exports.default = touchInput;

/***/ }),

/***/ "./eventListeners/windowResizeHandler.js":
/*!***********************************************!*\
  !*** ./eventListeners/windowResizeHandler.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./../store/index.js */ "./store/index.js");

var _externalModules = __webpack_require__(/*! ./../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enable = function enable() {
  window.addEventListener('resize', resizeThrottler, false);
};

var disable = function disable() {
  window.addEventListener('resize', resizeThrottler, false);
};

var resizeTimeout = void 0;

function resizeThrottler() {
  // Ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(function () {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

function actualResizeHandler() {
  _index.state.enabledElements.forEach(function (element) {
    _externalModules2.default.cornerstone.resize(element);
  });
}

exports.default = {
  enable: enable,
  disable: disable
};

/***/ }),

/***/ "./events.js":
/*!*******************!*\
  !*** ./events.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EVENTS = {
  // Events from Cornerstone Core
  IMAGE_RENDERED: 'cornerstoneimagerendered',
  NEW_IMAGE: 'cornerstonenewimage',
  IMAGE_CACHE_PROMISE_REMOVED: 'cornerstoneimagecachepromiseremoved',
  ELEMENT_DISABLED: 'cornerstoneelementdisabled',

  // Mouse events
  MOUSE_DOWN: 'cornerstonetoolsmousedown',
  MOUSE_UP: 'cornerstonetoolsmouseup',
  MOUSE_DOWN_ACTIVATE: 'cornerstonetoolsmousedownactivate',
  MOUSE_DRAG: 'cornerstonetoolsmousedrag',
  MOUSE_MOVE: 'cornerstonetoolsmousemove',
  MOUSE_CLICK: 'cornerstonetoolsmouseclick',
  MOUSE_DOUBLE_CLICK: 'cornerstonetoolsmousedoubleclick',
  MOUSE_WHEEL: 'cornerstonetoolsmousewheel',

  // Touch events
  TOUCH_START: 'cornerstonetoolstouchstart',
  TOUCH_START_ACTIVE: 'cornerstonetoolstouchstartactive',
  TOUCH_END: 'cornerstonetoolstouchend',
  TOUCH_DRAG: 'cornerstonetoolstouchdrag',
  TOUCH_DRAG_END: 'cornerstonetoolstouchdragend',
  TOUCH_PINCH: 'cornerstonetoolstouchpinch',
  TOUCH_ROTATE: 'cornerstonetoolstouchrotate',
  TOUCH_PRESS: 'cornerstonetoolstouchpress',
  TAP: 'cornerstonetoolstap',
  DOUBLE_TAP: 'cornerstonetoolsdoubletap',
  MULTI_TOUCH_START: 'cornerstonetoolsmultitouchstart',
  MULTI_TOUCH_START_ACTIVE: 'cornerstonetoolsmultitouchstartactive',
  MULTI_TOUCH_DRAG: 'cornerstonetoolsmultitouchdrag',

  // Keyboard events
  KEY_DOWN: 'cornerstonetoolskeydown',
  KEY_UP: 'cornerstonetoolskeyup',
  KEY_PRESS: 'cornerstonetoolskeypress',

  // Measurement / tool events
  MEASUREMENT_ADDED: 'cornerstonetoolsmeasurementadded',
  MEASUREMENT_MODIFIED: 'cornerstonetoolsmeasurementmodified',
  MEASUREMENT_REMOVED: 'cornerstonemeasurementremoved',
  TOOL_DEACTIVATED: 'cornerstonetoolstooldeactivated',
  CLIP_STOPPED: 'cornerstonetoolsclipstopped',
  STACK_SCROLL: 'cornerstonestackscroll', // Should be renamed

  LINE_SAMPLE_UPDATED: 'cornerstonelinesampleupdated'
};

exports.default = EVENTS;

/***/ }),

/***/ "./externalModules.js":
/*!****************************!*\
  !*** ./externalModules.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cornerstone = window.cornerstone;
var cornerstoneMath = window.cornerstoneMath;
var Hammer = window.Hammer;

exports.default = {
  set cornerstone(cs) {
    cornerstone = cs;
  },
  get cornerstone() {
    return cornerstone;
  },
  set cornerstoneMath(cm) {
    cornerstoneMath = cm;
  },
  get cornerstoneMath() {
    return cornerstoneMath;
  },
  set Hammer(module) {
    Hammer = module;
  },
  get Hammer() {
    return Hammer;
  }
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToolOptions = exports.setToolOptions = exports.version = undefined;
exports.touchMoveHandle = exports.touchMoveAllHandles = exports.moveNewHandleTouch = exports.moveNewHandle = exports.moveHandle = exports.moveAllHandles = exports.handleActivator = exports.getHandleNearImagePoint = exports.drawHandles = exports.anyHandlesOutsideImage = exports.stopClip = exports.playClip = exports.stackRenderers = exports.stackPrefetch = exports.globalFrameOfReferenceSpecificToolStateManager = exports.newFrameOfReferenceSpecificToolStateManager = exports.globalImageIdSpecificToolStateManager = exports.newImageIdSpecificToolStateManager = exports.loadHandlerManager = exports.addStackStateManager = exports.newStackSpecificToolStateManager = exports.stackSpecificStateManager = exports.textStyle = exports.newTimeSeriesSpecificToolStateManager = exports.addTimeSeriesStateManager = exports.toolColors = exports.toolCoordinates = exports.getElementToolStateManager = exports.setElementToolStateManager = exports.clearToolState = exports.removeToolState = exports.getToolState = exports.addToolState = exports.toolStyle = exports.panZoomSynchronizer = exports.stackImageIndexSynchronizer = exports.stackImagePositionOffsetSynchronizer = exports.stackImagePositionSynchronizer = exports.stackScrollSynchronizer = exports.Synchronizer = exports.updateImageSynchronizer = exports.wwwcSynchronizer = exports.calculateEllipseStatistics = exports.calculateSUV = exports.copyPoints = exports.drawArrow = exports.drawCircle = exports.drawEllipse = exports.drawTextBox = exports.getLuminance = exports.isMobileDevice = exports.getBrowserInfo = exports.getMaxSimultaneousRequests = exports.getDefaultSimultaneousRequests = exports.getRGBPixels = exports.makeUnselectable = exports.pointInEllipse = exports.pointInsideBoundingBox = exports.planePlaneIntersection = exports.imagePointToPatientPoint = exports.projectPatientPointToImagePlane = exports.roundToDecimal = exports.scroll = exports.scrollToIndex = exports.setContextToDisplayFontSize = exports.requestPoolManager = exports.orientation = exports.referenceLines = exports.EVENTS = exports.external = exports.drawing = exports.BrushTool = exports.CrosshairsTool = exports.ZoomMouseWheelTool = exports.ZoomTouchPinchTool = exports.ZoomTool = exports.WwwcRegionTool = exports.WwwcTool = exports.StackScrollMouseWheelTool = exports.StackScrollMultiTouchTool = exports.StackScrollTool = exports.ScaleOverlayTool = exports.SaveAsTool = exports.RotateTouchTool = exports.RotateTool = exports.RectangleRoiTool = exports.PanMultiTouchTool = exports.PanTool = exports.ProbeTool = exports.MagnifyTool = exports.LengthTool = exports.TextMarkerTool = exports.FreehandSculpterMouseTool = exports.FreehandMouseTool = exports.EraserTool = exports.EllipticalRoiTool = exports.DoubleTapFitToWindowTool = exports.AngleTool = exports.ArrowAnnotateTool = exports.init = undefined;

var _init = __webpack_require__(/*! ./init.js */ "./init.js");

Object.defineProperty(exports, 'init', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_init).default;
  }
});

var _ArrowAnnotateTool = __webpack_require__(/*! ./tools/ArrowAnnotateTool.js */ "./tools/ArrowAnnotateTool.js");

Object.defineProperty(exports, 'ArrowAnnotateTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ArrowAnnotateTool).default;
  }
});

var _AngleTool = __webpack_require__(/*! ./tools/AngleTool.js */ "./tools/AngleTool.js");

Object.defineProperty(exports, 'AngleTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AngleTool).default;
  }
});

var _DoubleTapFitToWindowTool = __webpack_require__(/*! ./tools/DoubleTapFitToWindowTool.js */ "./tools/DoubleTapFitToWindowTool.js");

Object.defineProperty(exports, 'DoubleTapFitToWindowTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DoubleTapFitToWindowTool).default;
  }
});

var _EllipticalRoiTool = __webpack_require__(/*! ./tools/EllipticalRoiTool.js */ "./tools/EllipticalRoiTool.js");

Object.defineProperty(exports, 'EllipticalRoiTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_EllipticalRoiTool).default;
  }
});

var _EraserTool = __webpack_require__(/*! ./tools/EraserTool.js */ "./tools/EraserTool.js");

Object.defineProperty(exports, 'EraserTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_EraserTool).default;
  }
});

var _FreehandMouseTool = __webpack_require__(/*! ./tools/FreehandMouseTool.js */ "./tools/FreehandMouseTool.js");

Object.defineProperty(exports, 'FreehandMouseTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FreehandMouseTool).default;
  }
});

var _FreehandSculpterMouseTool = __webpack_require__(/*! ./tools/FreehandSculpterMouseTool.js */ "./tools/FreehandSculpterMouseTool.js");

Object.defineProperty(exports, 'FreehandSculpterMouseTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FreehandSculpterMouseTool).default;
  }
});

var _TextMarkerTool = __webpack_require__(/*! ./tools/TextMarkerTool.js */ "./tools/TextMarkerTool.js");

Object.defineProperty(exports, 'TextMarkerTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TextMarkerTool).default;
  }
});

var _LengthTool = __webpack_require__(/*! ./tools/LengthTool.js */ "./tools/LengthTool.js");

Object.defineProperty(exports, 'LengthTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LengthTool).default;
  }
});

var _MagnifyTool = __webpack_require__(/*! ./tools/MagnifyTool.js */ "./tools/MagnifyTool.js");

Object.defineProperty(exports, 'MagnifyTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MagnifyTool).default;
  }
});

var _ProbeTool = __webpack_require__(/*! ./tools/ProbeTool.js */ "./tools/ProbeTool.js");

Object.defineProperty(exports, 'ProbeTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ProbeTool).default;
  }
});

var _PanTool = __webpack_require__(/*! ./tools/PanTool.js */ "./tools/PanTool.js");

Object.defineProperty(exports, 'PanTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PanTool).default;
  }
});

var _PanMultiTouchTool = __webpack_require__(/*! ./tools/PanMultiTouchTool.js */ "./tools/PanMultiTouchTool.js");

Object.defineProperty(exports, 'PanMultiTouchTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PanMultiTouchTool).default;
  }
});

var _RectangleRoiTool = __webpack_require__(/*! ./tools/RectangleRoiTool.js */ "./tools/RectangleRoiTool.js");

Object.defineProperty(exports, 'RectangleRoiTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RectangleRoiTool).default;
  }
});

var _RotateTool = __webpack_require__(/*! ./tools/RotateTool.js */ "./tools/RotateTool.js");

Object.defineProperty(exports, 'RotateTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RotateTool).default;
  }
});

var _RotateTouchTool = __webpack_require__(/*! ./tools/RotateTouchTool.js */ "./tools/RotateTouchTool.js");

Object.defineProperty(exports, 'RotateTouchTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RotateTouchTool).default;
  }
});

var _SaveAsTool = __webpack_require__(/*! ./tools/SaveAsTool.js */ "./tools/SaveAsTool.js");

Object.defineProperty(exports, 'SaveAsTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SaveAsTool).default;
  }
});

var _ScaleOverlayTool = __webpack_require__(/*! ./tools/ScaleOverlayTool.js */ "./tools/ScaleOverlayTool.js");

Object.defineProperty(exports, 'ScaleOverlayTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScaleOverlayTool).default;
  }
});

var _StackScrollTool = __webpack_require__(/*! ./tools/StackScrollTool.js */ "./tools/StackScrollTool.js");

Object.defineProperty(exports, 'StackScrollTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StackScrollTool).default;
  }
});

var _StackScrollMultiTouchTool = __webpack_require__(/*! ./tools/StackScrollMultiTouchTool.js */ "./tools/StackScrollMultiTouchTool.js");

Object.defineProperty(exports, 'StackScrollMultiTouchTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StackScrollMultiTouchTool).default;
  }
});

var _StackScrollMouseWheelTool = __webpack_require__(/*! ./tools/StackScrollMouseWheelTool.js */ "./tools/StackScrollMouseWheelTool.js");

Object.defineProperty(exports, 'StackScrollMouseWheelTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StackScrollMouseWheelTool).default;
  }
});

var _WwwcTool = __webpack_require__(/*! ./tools/WwwcTool.js */ "./tools/WwwcTool.js");

Object.defineProperty(exports, 'WwwcTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_WwwcTool).default;
  }
});

var _WwwcRegionTool = __webpack_require__(/*! ./tools/WwwcRegionTool.js */ "./tools/WwwcRegionTool.js");

Object.defineProperty(exports, 'WwwcRegionTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_WwwcRegionTool).default;
  }
});

var _ZoomTool = __webpack_require__(/*! ./tools/ZoomTool.js */ "./tools/ZoomTool.js");

Object.defineProperty(exports, 'ZoomTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ZoomTool).default;
  }
});

var _ZoomTouchPinchTool = __webpack_require__(/*! ./tools/ZoomTouchPinchTool.js */ "./tools/ZoomTouchPinchTool.js");

Object.defineProperty(exports, 'ZoomTouchPinchTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ZoomTouchPinchTool).default;
  }
});

var _ZoomMouseWheelTool = __webpack_require__(/*! ./tools/ZoomMouseWheelTool.js */ "./tools/ZoomMouseWheelTool.js");

Object.defineProperty(exports, 'ZoomMouseWheelTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ZoomMouseWheelTool).default;
  }
});

var _CrosshairsTool = __webpack_require__(/*! ./tools/CrosshairsTool.js */ "./tools/CrosshairsTool.js");

Object.defineProperty(exports, 'CrosshairsTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CrosshairsTool).default;
  }
});

var _BrushTool = __webpack_require__(/*! ./tools/BrushTool.js */ "./tools/BrushTool.js");

Object.defineProperty(exports, 'BrushTool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BrushTool).default;
  }
});

var _externalModules = __webpack_require__(/*! ./externalModules.js */ "./externalModules.js");

Object.defineProperty(exports, 'external', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_externalModules).default;
  }
});

var _events = __webpack_require__(/*! ./events.js */ "./events.js");

Object.defineProperty(exports, 'EVENTS', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_events).default;
  }
});

var _index = __webpack_require__(/*! ./referenceLines/index.js */ "./referenceLines/index.js");

Object.defineProperty(exports, 'referenceLines', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

var _index2 = __webpack_require__(/*! ./orientation/index.js */ "./orientation/index.js");

Object.defineProperty(exports, 'orientation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index2).default;
  }
});

var _requestPoolManager = __webpack_require__(/*! ./requestPool/requestPoolManager.js */ "./requestPool/requestPoolManager.js");

Object.defineProperty(exports, 'requestPoolManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_requestPoolManager).default;
  }
});

var _setContextToDisplayFontSize = __webpack_require__(/*! ./util/setContextToDisplayFontSize.js */ "./util/setContextToDisplayFontSize.js");

Object.defineProperty(exports, 'setContextToDisplayFontSize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_setContextToDisplayFontSize).default;
  }
});

var _scrollToIndex = __webpack_require__(/*! ./util/scrollToIndex.js */ "./util/scrollToIndex.js");

Object.defineProperty(exports, 'scrollToIndex', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scrollToIndex).default;
  }
});

var _scroll = __webpack_require__(/*! ./util/scroll.js */ "./util/scroll.js");

Object.defineProperty(exports, 'scroll', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scroll).default;
  }
});

var _roundToDecimal = __webpack_require__(/*! ./util/roundToDecimal.js */ "./util/roundToDecimal.js");

Object.defineProperty(exports, 'roundToDecimal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_roundToDecimal).default;
  }
});

var _pointProjector = __webpack_require__(/*! ./util/pointProjector.js */ "./util/pointProjector.js");

Object.defineProperty(exports, 'projectPatientPointToImagePlane', {
  enumerable: true,
  get: function get() {
    return _pointProjector.projectPatientPointToImagePlane;
  }
});
Object.defineProperty(exports, 'imagePointToPatientPoint', {
  enumerable: true,
  get: function get() {
    return _pointProjector.imagePointToPatientPoint;
  }
});
Object.defineProperty(exports, 'planePlaneIntersection', {
  enumerable: true,
  get: function get() {
    return _pointProjector.planePlaneIntersection;
  }
});

var _pointInsideBoundingBox = __webpack_require__(/*! ./util/pointInsideBoundingBox.js */ "./util/pointInsideBoundingBox.js");

Object.defineProperty(exports, 'pointInsideBoundingBox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pointInsideBoundingBox).default;
  }
});

var _pointInEllipse = __webpack_require__(/*! ./util/pointInEllipse.js */ "./util/pointInEllipse.js");

Object.defineProperty(exports, 'pointInEllipse', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pointInEllipse).default;
  }
});

var _makeUnselectable = __webpack_require__(/*! ./util/makeUnselectable.js */ "./util/makeUnselectable.js");

Object.defineProperty(exports, 'makeUnselectable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_makeUnselectable).default;
  }
});

var _getRGBPixels = __webpack_require__(/*! ./util/getRGBPixels.js */ "./util/getRGBPixels.js");

Object.defineProperty(exports, 'getRGBPixels', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getRGBPixels).default;
  }
});

var _getMaxSimultaneousRequests = __webpack_require__(/*! ./util/getMaxSimultaneousRequests.js */ "./util/getMaxSimultaneousRequests.js");

Object.defineProperty(exports, 'getDefaultSimultaneousRequests', {
  enumerable: true,
  get: function get() {
    return _getMaxSimultaneousRequests.getDefaultSimultaneousRequests;
  }
});
Object.defineProperty(exports, 'getMaxSimultaneousRequests', {
  enumerable: true,
  get: function get() {
    return _getMaxSimultaneousRequests.getMaxSimultaneousRequests;
  }
});
Object.defineProperty(exports, 'getBrowserInfo', {
  enumerable: true,
  get: function get() {
    return _getMaxSimultaneousRequests.getBrowserInfo;
  }
});
Object.defineProperty(exports, 'isMobileDevice', {
  enumerable: true,
  get: function get() {
    return _getMaxSimultaneousRequests.isMobileDevice;
  }
});

var _getLuminance = __webpack_require__(/*! ./util/getLuminance.js */ "./util/getLuminance.js");

Object.defineProperty(exports, 'getLuminance', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getLuminance).default;
  }
});

var _drawTextBox = __webpack_require__(/*! ./util/drawTextBox.js */ "./util/drawTextBox.js");

Object.defineProperty(exports, 'drawTextBox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_drawTextBox).default;
  }
});

var _drawEllipse = __webpack_require__(/*! ./util/drawEllipse.js */ "./util/drawEllipse.js");

Object.defineProperty(exports, 'drawEllipse', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_drawEllipse).default;
  }
});

var _drawCircle = __webpack_require__(/*! ./util/drawCircle.js */ "./util/drawCircle.js");

Object.defineProperty(exports, 'drawCircle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_drawCircle).default;
  }
});

var _drawArrow = __webpack_require__(/*! ./util/drawArrow.js */ "./util/drawArrow.js");

Object.defineProperty(exports, 'drawArrow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_drawArrow).default;
  }
});

var _copyPoints = __webpack_require__(/*! ./util/copyPoints.js */ "./util/copyPoints.js");

Object.defineProperty(exports, 'copyPoints', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_copyPoints).default;
  }
});

var _calculateSUV = __webpack_require__(/*! ./util/calculateSUV.js */ "./util/calculateSUV.js");

Object.defineProperty(exports, 'calculateSUV', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_calculateSUV).default;
  }
});

var _calculateEllipseStatistics = __webpack_require__(/*! ./util/calculateEllipseStatistics.js */ "./util/calculateEllipseStatistics.js");

Object.defineProperty(exports, 'calculateEllipseStatistics', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_calculateEllipseStatistics).default;
  }
});

var _wwwcSynchronizer = __webpack_require__(/*! ./synchronization/wwwcSynchronizer.js */ "./synchronization/wwwcSynchronizer.js");

Object.defineProperty(exports, 'wwwcSynchronizer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wwwcSynchronizer).default;
  }
});

var _updateImageSynchronizer = __webpack_require__(/*! ./synchronization/updateImageSynchronizer.js */ "./synchronization/updateImageSynchronizer.js");

Object.defineProperty(exports, 'updateImageSynchronizer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_updateImageSynchronizer).default;
  }
});

var _Synchronizer = __webpack_require__(/*! ./synchronization/Synchronizer.js */ "./synchronization/Synchronizer.js");

Object.defineProperty(exports, 'Synchronizer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Synchronizer).default;
  }
});

var _stackScrollSynchronizer = __webpack_require__(/*! ./synchronization/stackScrollSynchronizer.js */ "./synchronization/stackScrollSynchronizer.js");

Object.defineProperty(exports, 'stackScrollSynchronizer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stackScrollSynchronizer).default;
  }
});

var _stackImagePositionSynchronizer = __webpack_require__(/*! ./synchronization/stackImagePositionSynchronizer.js */ "./synchronization/stackImagePositionSynchronizer.js");

Object.defineProperty(exports, 'stackImagePositionSynchronizer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stackImagePositionSynchronizer).default;
  }
});

var _stackImagePositionOffsetSynchronizer = __webpack_require__(/*! ./synchronization/stackImagePositionOffsetSynchronizer.js */ "./synchronization/stackImagePositionOffsetSynchronizer.js");

Object.defineProperty(exports, 'stackImagePositionOffsetSynchronizer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stackImagePositionOffsetSynchronizer).default;
  }
});

var _stackImageIndexSynchronizer = __webpack_require__(/*! ./synchronization/stackImageIndexSynchronizer.js */ "./synchronization/stackImageIndexSynchronizer.js");

Object.defineProperty(exports, 'stackImageIndexSynchronizer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stackImageIndexSynchronizer).default;
  }
});

var _panZoomSynchronizer = __webpack_require__(/*! ./synchronization/panZoomSynchronizer.js */ "./synchronization/panZoomSynchronizer.js");

Object.defineProperty(exports, 'panZoomSynchronizer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_panZoomSynchronizer).default;
  }
});

var _toolStyle = __webpack_require__(/*! ./stateManagement/toolStyle.js */ "./stateManagement/toolStyle.js");

Object.defineProperty(exports, 'toolStyle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toolStyle).default;
  }
});

var _toolState = __webpack_require__(/*! ./stateManagement/toolState.js */ "./stateManagement/toolState.js");

Object.defineProperty(exports, 'addToolState', {
  enumerable: true,
  get: function get() {
    return _toolState.addToolState;
  }
});
Object.defineProperty(exports, 'getToolState', {
  enumerable: true,
  get: function get() {
    return _toolState.getToolState;
  }
});
Object.defineProperty(exports, 'removeToolState', {
  enumerable: true,
  get: function get() {
    return _toolState.removeToolState;
  }
});
Object.defineProperty(exports, 'clearToolState', {
  enumerable: true,
  get: function get() {
    return _toolState.clearToolState;
  }
});
Object.defineProperty(exports, 'setElementToolStateManager', {
  enumerable: true,
  get: function get() {
    return _toolState.setElementToolStateManager;
  }
});
Object.defineProperty(exports, 'getElementToolStateManager', {
  enumerable: true,
  get: function get() {
    return _toolState.getElementToolStateManager;
  }
});

var _toolCoordinates = __webpack_require__(/*! ./stateManagement/toolCoordinates.js */ "./stateManagement/toolCoordinates.js");

Object.defineProperty(exports, 'toolCoordinates', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toolCoordinates).default;
  }
});

var _toolColors = __webpack_require__(/*! ./stateManagement/toolColors.js */ "./stateManagement/toolColors.js");

Object.defineProperty(exports, 'toolColors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toolColors).default;
  }
});

var _timeSeriesSpecificStateManager = __webpack_require__(/*! ./stateManagement/timeSeriesSpecificStateManager.js */ "./stateManagement/timeSeriesSpecificStateManager.js");

Object.defineProperty(exports, 'addTimeSeriesStateManager', {
  enumerable: true,
  get: function get() {
    return _timeSeriesSpecificStateManager.addTimeSeriesStateManager;
  }
});
Object.defineProperty(exports, 'newTimeSeriesSpecificToolStateManager', {
  enumerable: true,
  get: function get() {
    return _timeSeriesSpecificStateManager.newTimeSeriesSpecificToolStateManager;
  }
});

var _textStyle = __webpack_require__(/*! ./stateManagement/textStyle.js */ "./stateManagement/textStyle.js");

Object.defineProperty(exports, 'textStyle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_textStyle).default;
  }
});

var _stackSpecificStateManager = __webpack_require__(/*! ./stateManagement/stackSpecificStateManager.js */ "./stateManagement/stackSpecificStateManager.js");

Object.defineProperty(exports, 'stackSpecificStateManager', {
  enumerable: true,
  get: function get() {
    return _stackSpecificStateManager.stackSpecificStateManager;
  }
});
Object.defineProperty(exports, 'newStackSpecificToolStateManager', {
  enumerable: true,
  get: function get() {
    return _stackSpecificStateManager.newStackSpecificToolStateManager;
  }
});
Object.defineProperty(exports, 'addStackStateManager', {
  enumerable: true,
  get: function get() {
    return _stackSpecificStateManager.addStackStateManager;
  }
});

var _loadHandlerManager = __webpack_require__(/*! ./stateManagement/loadHandlerManager.js */ "./stateManagement/loadHandlerManager.js");

Object.defineProperty(exports, 'loadHandlerManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadHandlerManager).default;
  }
});

var _imageIdSpecificStateManager = __webpack_require__(/*! ./stateManagement/imageIdSpecificStateManager.js */ "./stateManagement/imageIdSpecificStateManager.js");

Object.defineProperty(exports, 'newImageIdSpecificToolStateManager', {
  enumerable: true,
  get: function get() {
    return _imageIdSpecificStateManager.newImageIdSpecificToolStateManager;
  }
});
Object.defineProperty(exports, 'globalImageIdSpecificToolStateManager', {
  enumerable: true,
  get: function get() {
    return _imageIdSpecificStateManager.globalImageIdSpecificToolStateManager;
  }
});

var _frameOfReferenceStateManager = __webpack_require__(/*! ./stateManagement/frameOfReferenceStateManager.js */ "./stateManagement/frameOfReferenceStateManager.js");

Object.defineProperty(exports, 'newFrameOfReferenceSpecificToolStateManager', {
  enumerable: true,
  get: function get() {
    return _frameOfReferenceStateManager.newFrameOfReferenceSpecificToolStateManager;
  }
});
Object.defineProperty(exports, 'globalFrameOfReferenceSpecificToolStateManager', {
  enumerable: true,
  get: function get() {
    return _frameOfReferenceStateManager.globalFrameOfReferenceSpecificToolStateManager;
  }
});

var _stackPrefetch = __webpack_require__(/*! ./stackTools/stackPrefetch.js */ "./stackTools/stackPrefetch.js");

Object.defineProperty(exports, 'stackPrefetch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stackPrefetch).default;
  }
});

var _stackRenderers = __webpack_require__(/*! ./stackTools/stackRenderers.js */ "./stackTools/stackRenderers.js");

Object.defineProperty(exports, 'stackRenderers', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stackRenderers).default;
  }
});

var _playClip = __webpack_require__(/*! ./stackTools/playClip.js */ "./stackTools/playClip.js");

Object.defineProperty(exports, 'playClip', {
  enumerable: true,
  get: function get() {
    return _playClip.playClip;
  }
});
Object.defineProperty(exports, 'stopClip', {
  enumerable: true,
  get: function get() {
    return _playClip.stopClip;
  }
});

var _anyHandlesOutsideImage = __webpack_require__(/*! ./manipulators/anyHandlesOutsideImage.js */ "./manipulators/anyHandlesOutsideImage.js");

Object.defineProperty(exports, 'anyHandlesOutsideImage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_anyHandlesOutsideImage).default;
  }
});

var _drawHandles = __webpack_require__(/*! ./manipulators/drawHandles.js */ "./manipulators/drawHandles.js");

Object.defineProperty(exports, 'drawHandles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_drawHandles).default;
  }
});

var _getHandleNearImagePoint = __webpack_require__(/*! ./manipulators/getHandleNearImagePoint.js */ "./manipulators/getHandleNearImagePoint.js");

Object.defineProperty(exports, 'getHandleNearImagePoint', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getHandleNearImagePoint).default;
  }
});

var _handleActivator = __webpack_require__(/*! ./manipulators/handleActivator.js */ "./manipulators/handleActivator.js");

Object.defineProperty(exports, 'handleActivator', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_handleActivator).default;
  }
});

var _moveAllHandles = __webpack_require__(/*! ./manipulators/moveAllHandles.js */ "./manipulators/moveAllHandles.js");

Object.defineProperty(exports, 'moveAllHandles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_moveAllHandles).default;
  }
});

var _moveHandle = __webpack_require__(/*! ./manipulators/moveHandle.js */ "./manipulators/moveHandle.js");

Object.defineProperty(exports, 'moveHandle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_moveHandle).default;
  }
});

var _moveNewHandle = __webpack_require__(/*! ./manipulators/moveNewHandle.js */ "./manipulators/moveNewHandle.js");

Object.defineProperty(exports, 'moveNewHandle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_moveNewHandle).default;
  }
});

var _moveNewHandleTouch = __webpack_require__(/*! ./manipulators/moveNewHandleTouch.js */ "./manipulators/moveNewHandleTouch.js");

Object.defineProperty(exports, 'moveNewHandleTouch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_moveNewHandleTouch).default;
  }
});

var _touchMoveAllHandles = __webpack_require__(/*! ./manipulators/touchMoveAllHandles.js */ "./manipulators/touchMoveAllHandles.js");

Object.defineProperty(exports, 'touchMoveAllHandles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_touchMoveAllHandles).default;
  }
});

var _touchMoveHandle = __webpack_require__(/*! ./manipulators/touchMoveHandle.js */ "./manipulators/touchMoveHandle.js");

Object.defineProperty(exports, 'touchMoveHandle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_touchMoveHandle).default;
  }
});

var _version = __webpack_require__(/*! ./version.js */ "./version.js");

Object.defineProperty(exports, 'version', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_version).default;
  }
});

var _toolOptions = __webpack_require__(/*! ./toolOptions.js */ "./toolOptions.js");

Object.defineProperty(exports, 'setToolOptions', {
  enumerable: true,
  get: function get() {
    return _toolOptions.setToolOptions;
  }
});
Object.defineProperty(exports, 'getToolOptions', {
  enumerable: true,
  get: function get() {
    return _toolOptions.getToolOptions;
  }
});

var _drawing = __webpack_require__(/*! ./util/drawing.js */ "./util/drawing.js");

var drawing = _interopRequireWildcard(_drawing);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// END V3 EXPORTS

exports.drawing = drawing;

/***/ }),

/***/ "./init.js":
/*!*****************!*\
  !*** ./init.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  _windowResizeHandler2.default.enable();

  return Object.freeze({
    store: _index2.default,
    addTool: _addTool.addTool,
    addToolForElement: _addTool.addToolForElement,
    getToolForElement: _getToolForElement2.default,
    setToolOptions: _setToolOptions.setToolOptions,
    setToolOptionsForElement: _setToolOptions.setToolOptionsForElement,
    addEnabledElement: _addEnabledElement2.default,
    // Tool Modes
    setToolActive: _setToolMode.setToolActive,
    setToolActiveForElement: _setToolMode.setToolActiveForElement,
    setToolEnabled: _setToolMode.setToolEnabled,
    setToolEnabledForElement: _setToolMode.setToolEnabledForElement,
    setToolDisabled: _setToolMode.setToolDisabled,
    setToolDisabledForElement: _setToolMode.setToolDisabledForElement,
    setToolPassive: _setToolMode.setToolPassive,
    setToolPassiveForElement: _setToolMode.setToolPassiveForElement
  });
};

var _index = __webpack_require__(/*! ./store/index.js */ "./store/index.js");

var _index2 = _interopRequireDefault(_index);

var _addTool = __webpack_require__(/*! ./store/addTool.js */ "./store/addTool.js");

var _getToolForElement = __webpack_require__(/*! ./store/getToolForElement.js */ "./store/getToolForElement.js");

var _getToolForElement2 = _interopRequireDefault(_getToolForElement);

var _setToolOptions = __webpack_require__(/*! ./store/setToolOptions.js */ "./store/setToolOptions.js");

var _addEnabledElement = __webpack_require__(/*! ./store/addEnabledElement.js */ "./store/addEnabledElement.js");

var _addEnabledElement2 = _interopRequireDefault(_addEnabledElement);

var _setToolMode = __webpack_require__(/*! ./store/setToolMode.js */ "./store/setToolMode.js");

var _windowResizeHandler = __webpack_require__(/*! ./eventListeners/windowResizeHandler.js */ "./eventListeners/windowResizeHandler.js");

var _windowResizeHandler2 = _interopRequireDefault(_windowResizeHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./manipulators/anyHandlesOutsideImage.js":
/*!************************************************!*\
  !*** ./manipulators/anyHandlesOutsideImage.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (renderData, handles) {
  var image = renderData.image;
  var imageRect = {
    left: 0,
    top: 0,
    width: image.width,
    height: image.height
  };

  var handleOutsideImage = false;

  Object.keys(handles).forEach(function (name) {
    var handle = handles[name];

    if (handle.allowedOutsideImage === true) {
      return;
    }

    if (_externalModules2.default.cornerstoneMath.point.insideRect(handle, imageRect) === false) {
      handleOutsideImage = true;
    }
  });

  return handleOutsideImage;
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./manipulators/drawHandles.js":
/*!*************************************!*\
  !*** ./manipulators/drawHandles.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context, renderData, handles, color, options) {
  context.strokeStyle = color;

  Object.keys(handles).forEach(function (name) {
    var handle = handles[name];

    if (handle.drawnIndependently === true) {
      return;
    }

    if (options && options.drawHandlesIfActive === true && !handle.active) {
      return;
    }

    var lineWidth = handle.active ? _toolStyle2.default.getActiveWidth() : _toolStyle2.default.getToolWidth();
    var fillStyle = options && options.fill;

    (0, _drawing.path)(context, { lineWidth: lineWidth,
      fillStyle: fillStyle }, function (context) {
      var handleCanvasCoords = _externalModules2.default.cornerstone.pixelToCanvas(renderData.element, handle);

      var handleRadius = getHandleRadius(options);

      context.arc(handleCanvasCoords.x, handleCanvasCoords.y, handleRadius, 0, 2 * Math.PI);
    });
  });
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _toolStyle = __webpack_require__(/*! ../stateManagement/toolStyle.js */ "./stateManagement/toolStyle.js");

var _toolStyle2 = _interopRequireDefault(_toolStyle);

var _drawing = __webpack_require__(/*! ../util/drawing.js */ "./util/drawing.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultHandleRadius = 6;

function getHandleRadius(options) {
  var handleRadius = void 0;

  if (options && options.handleRadius) {
    handleRadius = options.handleRadius;
  } else {
    handleRadius = defaultHandleRadius;
  }

  return handleRadius;
}

/***/ }),

/***/ "./manipulators/getHandleNearImagePoint.js":
/*!*************************************************!*\
  !*** ./manipulators/getHandleNearImagePoint.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, handles, coords, distanceThreshold) {
  var nearbyHandle = void 0;

  if (!handles) {
    return;
  }

  Object.keys(handles).forEach(function (name) {
    var handle = handles[name];

    if (handle.hasOwnProperty('pointNearHandle')) {
      if (handle.pointNearHandle(element, handle, coords)) {
        nearbyHandle = handle;

        return;
      }
    } else if (handle.hasBoundingBox === true) {
      if ((0, _pointInsideBoundingBox2.default)(handle, coords)) {
        nearbyHandle = handle;

        return;
      }
    } else {
      var handleCanvas = _externalModules2.default.cornerstone.pixelToCanvas(element, handle);
      var distance = _externalModules2.default.cornerstoneMath.point.distance(handleCanvas, coords);

      if (distance <= distanceThreshold) {
        nearbyHandle = handle;

        return;
      }
    }
  });

  return nearbyHandle;
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _pointInsideBoundingBox = __webpack_require__(/*! ../util/pointInsideBoundingBox.js */ "./util/pointInsideBoundingBox.js");

var _pointInsideBoundingBox2 = _interopRequireDefault(_pointInsideBoundingBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./manipulators/handleActivator.js":
/*!*****************************************!*\
  !*** ./manipulators/handleActivator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, handles, canvasPoint, distanceThreshold) {
  if (!distanceThreshold) {
    distanceThreshold = 6;
  }

  var activeHandle = getActiveHandle(handles);
  var nearbyHandle = (0, _getHandleNearImagePoint2.default)(element, handles, canvasPoint, distanceThreshold);

  if (activeHandle !== nearbyHandle) {
    if (nearbyHandle !== undefined) {
      nearbyHandle.active = true;
    }

    if (activeHandle !== undefined) {
      activeHandle.active = false;
    }

    return true;
  }

  return false;
};

var _getHandleNearImagePoint = __webpack_require__(/*! ./getHandleNearImagePoint.js */ "./manipulators/getHandleNearImagePoint.js");

var _getHandleNearImagePoint2 = _interopRequireDefault(_getHandleNearImagePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getActiveHandle(handles) {
  var activeHandle = void 0;

  Object.keys(handles).forEach(function (name) {
    var handle = handles[name];

    if (handle.active === true) {
      activeHandle = handle;

      return;
    }
  });

  return activeHandle;
}

/***/ }),

/***/ "./manipulators/moveAllHandles.js":
/*!****************************************!*\
  !*** ./manipulators/moveAllHandles.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (e, data, toolData, toolType, options, doneMovingCallback) {
  var mouseEventData = e.detail;
  var element = mouseEventData.element;

  function mouseDragCallback(e) {
    var eventData = e.detail;

    data.active = true;

    Object.keys(data.handles).forEach(function (name) {
      var handle = data.handles[name];

      if (handle.movesIndependently === true) {
        return;
      }

      handle.x += eventData.deltaPoints.image.x;
      handle.y += eventData.deltaPoints.image.y;

      if (options.preventHandleOutsideImage) {
        (0, _clip.clipToBox)(handle, eventData.image);
      }
    });

    _externalModules2.default.cornerstone.updateImage(element);

    var eventType = _events2.default.MEASUREMENT_MODIFIED;
    var modifiedEventData = {
      toolType: toolType,
      element: element,
      measurementData: data
    };

    (0, _triggerEvent2.default)(element, eventType, modifiedEventData);

    e.preventDefault();
    e.stopPropagation();
  }

  element.addEventListener(_events2.default.MOUSE_DRAG, mouseDragCallback);

  function mouseUpCallback(e) {
    var eventData = e.detail;

    data.invalidated = true;

    element.removeEventListener(_events2.default.MOUSE_DRAG, mouseDragCallback);
    element.removeEventListener(_events2.default.MOUSE_UP, mouseUpCallback);
    element.removeEventListener(_events2.default.MOUSE_CLICK, mouseUpCallback);

    // If any handle is outside the image, delete the tool data
    if (options.deleteIfHandleOutsideImage === true && (0, _anyHandlesOutsideImage2.default)(eventData, data.handles)) {
      (0, _toolState.removeToolState)(element, toolType, data);
    }

    _externalModules2.default.cornerstone.updateImage(element);

    if (typeof doneMovingCallback === 'function') {
      doneMovingCallback();
    }
  }

  element.addEventListener(_events2.default.MOUSE_UP, mouseUpCallback);
  element.addEventListener(_events2.default.MOUSE_CLICK, mouseUpCallback);

  return true;
};

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _anyHandlesOutsideImage = __webpack_require__(/*! ./anyHandlesOutsideImage.js */ "./manipulators/anyHandlesOutsideImage.js");

var _anyHandlesOutsideImage2 = _interopRequireDefault(_anyHandlesOutsideImage);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _triggerEvent = __webpack_require__(/*! ../util/triggerEvent.js */ "./util/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

var _clip = __webpack_require__(/*! ../util/clip.js */ "./util/clip.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./manipulators/moveHandle.js":
/*!************************************!*\
  !*** ./manipulators/moveHandle.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (mouseEventData, toolType, data, handle, doneMovingCallback, preventHandleOutsideImage) {
  var element = mouseEventData.element;
  var distanceFromTool = {
    x: handle.x - mouseEventData.currentPoints.image.x,
    y: handle.y - mouseEventData.currentPoints.image.y
  };

  function mouseDragCallback(e) {
    var eventData = e.detail;

    if (handle.hasMoved === false) {
      handle.hasMoved = true;
    }

    handle.active = true;
    handle.x = eventData.currentPoints.image.x + distanceFromTool.x;
    handle.y = eventData.currentPoints.image.y + distanceFromTool.y;

    if (preventHandleOutsideImage) {
      (0, _clip.clipToBox)(handle, eventData.image);
    }

    _externalModules2.default.cornerstone.updateImage(element);

    var eventType = _events2.default.MEASUREMENT_MODIFIED;
    var modifiedEventData = {
      toolType: toolType,
      element: element,
      measurementData: data
    };

    (0, _triggerEvent2.default)(element, eventType, modifiedEventData);
  }

  element.addEventListener(_events2.default.MOUSE_DRAG, mouseDragCallback);

  function mouseUpCallback() {
    handle.active = false;
    element.removeEventListener(_events2.default.MOUSE_DRAG, mouseDragCallback);
    element.removeEventListener(_events2.default.MOUSE_UP, mouseUpCallback);
    element.removeEventListener(_events2.default.MOUSE_CLICK, mouseUpCallback);
    _externalModules2.default.cornerstone.updateImage(element);

    if (typeof doneMovingCallback === 'function') {
      doneMovingCallback();
    }
  }

  element.addEventListener(_events2.default.MOUSE_UP, mouseUpCallback);
  element.addEventListener(_events2.default.MOUSE_CLICK, mouseUpCallback);
};

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _triggerEvent = __webpack_require__(/*! ../util/triggerEvent.js */ "./util/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

var _clip = __webpack_require__(/*! ../util/clip.js */ "./util/clip.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./manipulators/moveNewHandle.js":
/*!***************************************!*\
  !*** ./manipulators/moveNewHandle.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (mouseEventData, toolType, data, handle, doneMovingCallback, preventHandleOutsideImage) {
  var element = mouseEventData.element;

  function moveCallback(e) {
    var eventData = e.detail;

    handle.active = true;
    handle.x = eventData.currentPoints.image.x;
    handle.y = eventData.currentPoints.image.y;

    if (preventHandleOutsideImage) {
      (0, _clip.clipToBox)(handle, eventData.image);
    }

    _externalModules2.default.cornerstone.updateImage(element);

    var eventType = _events2.default.MEASUREMENT_MODIFIED;
    var modifiedEventData = {
      toolType: toolType,
      element: element,
      measurementData: data
    };

    (0, _triggerEvent2.default)(element, eventType, modifiedEventData);
  }

  function whichMovement(e) {
    element.removeEventListener(_events2.default.MOUSE_MOVE, whichMovement);
    element.removeEventListener(_events2.default.MOUSE_DRAG, whichMovement);

    element.addEventListener(_events2.default.MOUSE_MOVE, moveCallback);
    element.addEventListener(_events2.default.MOUSE_DRAG, moveCallback);

    element.addEventListener(_events2.default.MOUSE_CLICK, moveEndCallback);
    if (e.type === _events2.default.MOUSE_DRAG) {
      element.addEventListener(_events2.default.MOUSE_UP, moveEndCallback);
    }
  }

  function measurementRemovedCallback(e) {
    var eventData = e.detail;

    if (eventData.measurementData === data) {
      moveEndCallback();
    }
  }

  function toolDeactivatedCallback(e) {
    var eventData = e.detail;

    if (eventData.toolType === toolType) {
      element.removeEventListener(_events2.default.MOUSE_MOVE, moveCallback);
      element.removeEventListener(_events2.default.MOUSE_DRAG, moveCallback);
      element.removeEventListener(_events2.default.MOUSE_CLICK, moveEndCallback);
      element.removeEventListener(_events2.default.MOUSE_UP, moveEndCallback);
      element.removeEventListener(_events2.default.MEASUREMENT_REMOVED, measurementRemovedCallback);
      element.removeEventListener(_events2.default.TOOL_DEACTIVATED, toolDeactivatedCallback);

      handle.active = false;
      _externalModules2.default.cornerstone.updateImage(element);
    }
  }

  element.addEventListener(_events2.default.MOUSE_DRAG, whichMovement);
  element.addEventListener(_events2.default.MOUSE_MOVE, whichMovement);
  element.addEventListener(_events2.default.MEASUREMENT_REMOVED, measurementRemovedCallback);
  element.addEventListener(_events2.default.TOOL_DEACTIVATED, toolDeactivatedCallback);

  function moveEndCallback() {
    element.removeEventListener(_events2.default.MOUSE_MOVE, moveCallback);
    element.removeEventListener(_events2.default.MOUSE_DRAG, moveCallback);
    element.removeEventListener(_events2.default.MOUSE_CLICK, moveEndCallback);
    element.removeEventListener(_events2.default.MOUSE_UP, moveEndCallback);
    element.removeEventListener(_events2.default.MEASUREMENT_REMOVED, measurementRemovedCallback);
    element.removeEventListener(_events2.default.TOOL_DEACTIVATED, toolDeactivatedCallback);

    handle.active = false;
    _externalModules2.default.cornerstone.updateImage(element);

    if (typeof doneMovingCallback === 'function') {
      doneMovingCallback();
    }
  }
};

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _triggerEvent = __webpack_require__(/*! ../util/triggerEvent.js */ "./util/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

var _clip = __webpack_require__(/*! ../util/clip.js */ "./util/clip.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./manipulators/moveNewHandleTouch.js":
/*!********************************************!*\
  !*** ./manipulators/moveNewHandleTouch.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (eventData, toolType, data, handle, doneMovingCallback, preventHandleOutsideImage) {
  // Console.log('moveNewHandleTouch');
  var element = eventData.element;
  var imageCoords = _externalModules2.default.cornerstone.pageToPixel(element, eventData.currentPoints.page.x, eventData.currentPoints.page.y + 50);
  var distanceFromTouch = {
    x: handle.x - imageCoords.x,
    y: handle.y - imageCoords.y
  };

  handle.active = true;
  data.active = true;

  function moveCallback(e) {
    var eventData = e.detail;

    handle.x = eventData.currentPoints.image.x + distanceFromTouch.x;
    handle.y = eventData.currentPoints.image.y + distanceFromTouch.y;

    if (preventHandleOutsideImage) {
      (0, _clip.clipToBox)(handle, eventData.image);
    }

    _externalModules2.default.cornerstone.updateImage(element);

    var eventType = _events2.default.MEASUREMENT_MODIFIED;
    var modifiedEventData = {
      toolType: toolType,
      element: element,
      measurementData: data
    };

    (0, _triggerEvent2.default)(element, eventType, modifiedEventData);
  }

  function moveEndCallback(e) {
    var eventData = e.detail;

    element.removeEventListener(_events2.default.TOUCH_DRAG, moveCallback);
    element.removeEventListener(_events2.default.TOUCH_PINCH, moveEndCallback);
    element.removeEventListener(_events2.default.TOUCH_END, moveEndCallback);
    element.removeEventListener(_events2.default.TAP, moveEndCallback);
    element.removeEventListener(_events2.default.TOUCH_START, stopImmediatePropagation);
    element.removeEventListener(_events2.default.TOOL_DEACTIVATED, toolDeactivatedCallback);

    if (e.type === _events2.default.TOUCH_PINCH || e.type === _events2.default.TOUCH_PRESS) {
      handle.active = false;
      _externalModules2.default.cornerstone.updateImage(element);
      doneMovingCallback();

      return;
    }

    handle.active = false;
    data.active = false;
    handle.x = eventData.currentPoints.image.x + distanceFromTouch.x;
    handle.y = eventData.currentPoints.image.y + distanceFromTouch.y;

    if (preventHandleOutsideImage) {
      (0, _clip.clipToBox)(handle, eventData.image);
    }

    _externalModules2.default.cornerstone.updateImage(element);

    if (typeof doneMovingCallback === 'function') {
      doneMovingCallback();
    }
  }

  function stopImmediatePropagation(e) {
    // Stop the CornerstoneToolsTouchStart event from
    // Become a CornerstoneToolsTouchStartActive event when
    // MoveNewHandleTouch ends
    e.stopImmediatePropagation();

    return false;
  }

  element.addEventListener(_events2.default.TOUCH_DRAG, moveCallback);
  element.addEventListener(_events2.default.TOUCH_PINCH, moveEndCallback);
  element.addEventListener(_events2.default.TOUCH_END, moveEndCallback);
  element.addEventListener(_events2.default.TAP, moveEndCallback);
  element.addEventListener(_events2.default.TOUCH_START, stopImmediatePropagation);

  function toolDeactivatedCallback() {
    element.removeEventListener(_events2.default.TOUCH_DRAG, moveCallback);
    element.removeEventListener(_events2.default.TOUCH_PINCH, moveEndCallback);
    element.removeEventListener(_events2.default.TOUCH_END, moveEndCallback);
    element.removeEventListener(_events2.default.TAP, moveEndCallback);
    element.removeEventListener(_events2.default.TOUCH_START, stopImmediatePropagation);
    element.removeEventListener(_events2.default.TOOL_DEACTIVATED, toolDeactivatedCallback);

    handle.active = false;
    data.active = false;
    handle.x = eventData.currentPoints.image.x + distanceFromTouch.x;
    handle.y = eventData.currentPoints.image.y + distanceFromTouch.y;

    if (preventHandleOutsideImage) {
      (0, _clip.clipToBox)(handle, eventData.image);
    }

    _externalModules2.default.cornerstone.updateImage(element);
  }

  element.addEventListener(_events2.default.TOOL_DEACTIVATED, toolDeactivatedCallback);
};

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _triggerEvent = __webpack_require__(/*! ../util/triggerEvent.js */ "./util/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

var _clip = __webpack_require__(/*! ../util/clip.js */ "./util/clip.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./manipulators/touchMoveAllHandles.js":
/*!*********************************************!*\
  !*** ./manipulators/touchMoveAllHandles.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (event, data, toolData, toolType, deleteIfHandleOutsideImage, doneMovingCallback) {
  var touchEventData = event.detail;
  var element = touchEventData.element;

  function touchDragCallback(e) {
    var eventData = e.detail;

    data.active = true;

    Object.keys(data.handles).forEach(function (name) {
      var handle = data.handles[name];

      if (handle.movesIndependently === true) {
        return;
      }

      handle.x += eventData.deltaPoints.image.x;
      handle.y += eventData.deltaPoints.image.y;
    });
    _externalModules2.default.cornerstone.updateImage(element);

    var eventType = _events2.default.MEASUREMENT_MODIFIED;
    var modifiedEventData = {
      toolType: toolType,
      element: element,
      measurementData: data
    };

    (0, _triggerEvent2.default)(element, eventType, modifiedEventData);

    e.preventDefault();
    e.stopPropagation();
  }

  element.addEventListener(_events2.default.TOUCH_DRAG, touchDragCallback);

  function touchEndCallback(e) {
    var eventData = e.detail;

    // Console.log('touchMoveAllHandles touchEndCallback: ' + e.type);
    data.active = false;
    data.invalidated = false;

    element.removeEventListener(_events2.default.TOUCH_DRAG, touchDragCallback);

    element.removeEventListener(_events2.default.TOUCH_PINCH, touchEndCallback);
    element.removeEventListener(_events2.default.TOUCH_PRESS, touchEndCallback);
    element.removeEventListener(_events2.default.TOUCH_END, touchEndCallback);
    element.removeEventListener(_events2.default.TOUCH_DRAG_END, touchEndCallback);
    element.removeEventListener(_events2.default.TAP, touchEndCallback);

    // If any handle is outside the image, delete the tool data
    var handlesOutsideImage = (0, _anyHandlesOutsideImage2.default)(eventData, data.handles);

    if (deleteIfHandleOutsideImage === true && handlesOutsideImage === true) {
      (0, _toolState.removeToolState)(element, toolType, data);
    }

    _externalModules2.default.cornerstone.updateImage(element);

    if (typeof doneMovingCallback === 'function') {
      doneMovingCallback(e);
    }
  }

  element.addEventListener(_events2.default.TOUCH_PINCH, touchEndCallback);
  element.addEventListener(_events2.default.TOUCH_PRESS, touchEndCallback);
  element.addEventListener(_events2.default.TOUCH_END, touchEndCallback);
  element.addEventListener(_events2.default.TOUCH_DRAG_END, touchEndCallback);
  element.addEventListener(_events2.default.TAP, touchEndCallback);

  return true;
};

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _anyHandlesOutsideImage = __webpack_require__(/*! ./anyHandlesOutsideImage.js */ "./manipulators/anyHandlesOutsideImage.js");

var _anyHandlesOutsideImage2 = _interopRequireDefault(_anyHandlesOutsideImage);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _triggerEvent = __webpack_require__(/*! ../util/triggerEvent.js */ "./util/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./manipulators/touchMoveHandle.js":
/*!*****************************************!*\
  !*** ./manipulators/touchMoveHandle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (event, toolType, data, handle, doneMovingCallback) {
  // Console.log('touchMoveHandle');
  runAnimation.value = true;

  var touchEventData = event.detail;
  var element = touchEventData.element;
  var enabledElement = _externalModules2.default.cornerstone.getEnabledElement(element);

  var time = new Date().getTime();

  // Average pixel width of index finger is 45-57 pixels
  // https://www.smashingmagazine.com/2012/02/finger-friendly-design-ideal-mobile-touchscreen-target-sizes/
  var fingerDistance = -57;

  var aboveFinger = {
    x: touchEventData.currentPoints.page.x,
    y: touchEventData.currentPoints.page.y + fingerDistance
  };

  var targetLocation = _externalModules2.default.cornerstone.pageToPixel(element, aboveFinger.x, aboveFinger.y);

  function touchDragCallback(e) {
    var eventData = e.detail;

    // Console.log('touchMoveHandle touchDragCallback: ' + e.type);
    runAnimation.value = false;

    if (handle.hasMoved === false) {
      handle.hasMoved = true;
    }

    handle.active = true;

    var currentPoints = eventData.currentPoints;
    var aboveFinger = {
      x: currentPoints.page.x,
      y: currentPoints.page.y + fingerDistance
    };

    targetLocation = _externalModules2.default.cornerstone.pageToPixel(element, aboveFinger.x, aboveFinger.y);
    handle.x = targetLocation.x;
    handle.y = targetLocation.y;

    _externalModules2.default.cornerstone.updateImage(element);

    var eventType = _events2.default.MEASUREMENT_MODIFIED;
    var modifiedEventData = {
      toolType: toolType,
      element: element,
      measurementData: data
    };

    (0, _triggerEvent2.default)(element, eventType, modifiedEventData);
  }

  element.addEventListener(_events2.default.TOUCH_DRAG, touchDragCallback);

  function touchEndCallback(e) {
    var eventData = e.detail;
    // Console.log('touchMoveHandle touchEndCallback: ' + e.type);

    runAnimation.value = false;

    handle.active = false;
    element.removeEventListener(_events2.default.TOUCH_DRAG, touchDragCallback);
    touchEndEvents.forEach(function (eventType) {
      element.removeEventListener(eventType, touchEndCallback);
    });

    _externalModules2.default.cornerstone.updateImage(element);

    if (e.type === _events2.default.TOUCH_PRESS) {
      eventData.handlePressed = data;

      handle.x = touchEventData.currentPoints.image.x;
      handle.y = touchEventData.currentPoints.image.y;
    }

    if (typeof doneMovingCallback === 'function') {
      doneMovingCallback(e);
    }
  }

  touchEndEvents.forEach(function (eventType) {
    element.addEventListener(eventType, touchEndCallback);
  });

  animate(time, handle, runAnimation, enabledElement, targetLocation);
};

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _triggerEvent = __webpack_require__(/*! ../util/triggerEvent.js */ "./util/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Define the runAnimation boolean as an object
 * so that it can be modified by reference
 */
var runAnimation = {
  value: false
};

var touchEndEvents = [_events2.default.TOUCH_END, _events2.default.TOUCH_DRAG_END, _events2.default.TOUCH_PINCH, _events2.default.TOUCH_PRESS, _events2.default.TAP];

function animate(lastTime, handle, runAnimation, enabledElement, targetLocation) {
  // See http://www.html5canvastutorials.com/advanced/html5-canvas-start-and-stop-an-animation/
  if (!runAnimation.value) {
    return;
  }

  // Update
  var time = new Date().getTime();
  // Var timeDiff = time - lastTime;

  // Pixels / second
  var distanceRemaining = Math.abs(handle.y - targetLocation.y);
  var linearDistEachFrame = distanceRemaining / 10;

  if (distanceRemaining < 1) {
    handle.y = targetLocation.y;
    runAnimation.value = false;

    return;
  }

  if (handle.y > targetLocation.y) {
    handle.y -= linearDistEachFrame;
  } else if (handle.y < targetLocation.y) {
    handle.y += linearDistEachFrame;
  }

  // Update the image
  _externalModules2.default.cornerstone.updateImage(enabledElement.element);

  // Request a new frame
  _externalModules2.default.cornerstone.requestAnimationFrame(function () {
    animate(time, handle, runAnimation, enabledElement, targetLocation);
  });
}

/***/ }),

/***/ "./orientation/getOrientationString.js":
/*!*********************************************!*\
  !*** ./orientation/getOrientationString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (vector) {
  var vec3 = (0, _convertToVector2.default)(vector);

  // Thanks to David Clunie
  // https://sites.google.com/site/dicomnotes/

  var orientation = '';
  var orientationX = vec3.x < 0 ? 'R' : 'L';
  var orientationY = vec3.y < 0 ? 'A' : 'P';
  var orientationZ = vec3.z < 0 ? 'F' : 'H';

  // Should probably make this a function vector3.abs
  var abs = new _externalModules2.default.cornerstoneMath.Vector3(Math.abs(vec3.x), Math.abs(vec3.y), Math.abs(vec3.z));

  for (var i = 0; i < 3; i++) {
    if (abs.x > 0.0001 && abs.x > abs.y && abs.x > abs.z) {
      orientation += orientationX;
      abs.x = 0;
    } else if (abs.y > 0.0001 && abs.y > abs.x && abs.y > abs.z) {
      orientation += orientationY;
      abs.y = 0;
    } else if (abs.z > 0.0001 && abs.z > abs.x && abs.z > abs.y) {
      orientation += orientationZ;
      abs.z = 0;
    } else {
      break;
    }
  }

  return orientation;
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _convertToVector = __webpack_require__(/*! ../util/convertToVector3.js */ "./util/convertToVector3.js");

var _convertToVector2 = _interopRequireDefault(_convertToVector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./orientation/index.js":
/*!******************************!*\
  !*** ./orientation/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOrientationString = __webpack_require__(/*! ./getOrientationString.js */ "./orientation/getOrientationString.js");

var _getOrientationString2 = _interopRequireDefault(_getOrientationString);

var _invertOrientationString = __webpack_require__(/*! ./invertOrientationString.js */ "./orientation/invertOrientationString.js");

var _invertOrientationString2 = _interopRequireDefault(_invertOrientationString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orientation = {
  getOrientationString: _getOrientationString2.default,
  invertOrientationString: _invertOrientationString2.default
};

exports.default = orientation;

/***/ }),

/***/ "./orientation/invertOrientationString.js":
/*!************************************************!*\
  !*** ./orientation/invertOrientationString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (string) {
  var inverted = string.replace('H', 'f');

  inverted = inverted.replace('F', 'h');
  inverted = inverted.replace('R', 'l');
  inverted = inverted.replace('L', 'r');
  inverted = inverted.replace('A', 'p');
  inverted = inverted.replace('P', 'a');
  inverted = inverted.toUpperCase();

  return inverted;
};

/***/ }),

/***/ "./referenceLines/calculateReferenceLine.js":
/*!**************************************************!*\
  !*** ./referenceLines/calculateReferenceLine.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (targetImagePlane, referenceImagePlane) {
  var points = (0, _pointProjector.planePlaneIntersection)(targetImagePlane, referenceImagePlane);

  if (!points) {
    return;
  }

  return {
    start: (0, _pointProjector.projectPatientPointToImagePlane)(points.start, targetImagePlane),
    end: (0, _pointProjector.projectPatientPointToImagePlane)(points.end, targetImagePlane)
  };
};

var _pointProjector = __webpack_require__(/*! ../util/pointProjector.js */ "./util/pointProjector.js");

/***/ }),

/***/ "./referenceLines/index.js":
/*!*********************************!*\
  !*** ./referenceLines/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _calculateReferenceLine = __webpack_require__(/*! ./calculateReferenceLine.js */ "./referenceLines/calculateReferenceLine.js");

var _calculateReferenceLine2 = _interopRequireDefault(_calculateReferenceLine);

var _referenceLinesTool = __webpack_require__(/*! ./referenceLinesTool.js */ "./referenceLines/referenceLinesTool.js");

var _referenceLinesTool2 = _interopRequireDefault(_referenceLinesTool);

var _renderActiveReferenceLine = __webpack_require__(/*! ./renderActiveReferenceLine.js */ "./referenceLines/renderActiveReferenceLine.js");

var _renderActiveReferenceLine2 = _interopRequireDefault(_renderActiveReferenceLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var referenceLines = {
  calculateReferenceLine: _calculateReferenceLine2.default,
  tool: _referenceLinesTool2.default,
  renderActiveReferenceLine: _renderActiveReferenceLine2.default
};

exports.default = referenceLines;

/***/ }),

/***/ "./referenceLines/referenceLinesTool.js":
/*!**********************************************!*\
  !*** ./referenceLines/referenceLinesTool.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _renderActiveReferenceLine = __webpack_require__(/*! ./renderActiveReferenceLine.js */ "./referenceLines/renderActiveReferenceLine.js");

var _renderActiveReferenceLine2 = _interopRequireDefault(_renderActiveReferenceLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toolType = 'referenceLines';

function onImageRendered(e) {
  var eventData = e.detail;

  // If we have no toolData for this element, return immediately as there is nothing to do
  var toolData = (0, _toolState.getToolState)(e.currentTarget, toolType);

  if (toolData === undefined) {
    return;
  }

  // Get the enabled elements associated with this synchronization context and draw them
  var syncContext = toolData.data[0].synchronizationContext;
  var enabledElements = syncContext.getSourceElements();

  var renderer = toolData.data[0].renderer;

  // Create the canvas context and reset it to the pixel coordinate system
  var context = eventData.canvasContext.canvas.getContext('2d');

  _externalModules2.default.cornerstone.setToPixelCoordinateSystem(eventData.enabledElement, context);

  // Iterate over each referenced element
  enabledElements.forEach(function (referenceEnabledElement) {

    // Don't draw ourselves
    if (referenceEnabledElement === e.currentTarget) {
      return;
    }

    // Render it
    renderer(context, eventData, e.currentTarget, referenceEnabledElement);
  });
}

// Enables the reference line tool for a given element.  Note that a custom renderer
// Can be provided if you want different rendering (e.g. all reference lines, first/last/active, etc)
function enable(element, synchronizationContext, renderer) {
  renderer = renderer || _renderActiveReferenceLine2.default;

  (0, _toolState.addToolState)(element, toolType, {
    synchronizationContext: synchronizationContext,
    renderer: renderer
  });

  element.removeEventListener(_events2.default.IMAGE_RENDERED, onImageRendered);
  element.addEventListener(_events2.default.IMAGE_RENDERED, onImageRendered);
  _externalModules2.default.cornerstone.updateImage(element);
}

// Disables the reference line tool for the given element
function disable(element) {
  element.removeEventListener(_events2.default.IMAGE_RENDERED, onImageRendered);
  _externalModules2.default.cornerstone.updateImage(element);
}

// Module/private exports
var tool = {
  enable: enable,
  disable: disable
};

exports.default = tool;

/***/ }),

/***/ "./referenceLines/renderActiveReferenceLine.js":
/*!*****************************************************!*\
  !*** ./referenceLines/renderActiveReferenceLine.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context, eventData, targetElement, referenceElement) {
  var cornerstone = _externalModules2.default.cornerstone;
  var targetImage = cornerstone.getEnabledElement(targetElement).image;
  var referenceImage = cornerstone.getEnabledElement(referenceElement).image;

  // Make sure the images are actually loaded for the target and reference
  if (!targetImage || !referenceImage) {
    return;
  }

  var targetImagePlane = cornerstone.metaData.get('imagePlaneModule', targetImage.imageId);
  var referenceImagePlane = cornerstone.metaData.get('imagePlaneModule', referenceImage.imageId);

  // Make sure the target and reference actually have image plane metadata
  if (!targetImagePlane || !referenceImagePlane || !targetImagePlane.rowCosines || !targetImagePlane.columnCosines || !targetImagePlane.imagePositionPatient || !referenceImagePlane.rowCosines || !referenceImagePlane.columnCosines || !referenceImagePlane.imagePositionPatient) {
    return;
  }

  // The image planes must be in the same frame of reference
  if (targetImagePlane.frameOfReferenceUID !== referenceImagePlane.frameOfReferenceUID) {
    return;
  }

  targetImagePlane.rowCosines = (0, _convertToVector2.default)(targetImagePlane.rowCosines);
  targetImagePlane.columnCosines = (0, _convertToVector2.default)(targetImagePlane.columnCosines);
  targetImagePlane.imagePositionPatient = (0, _convertToVector2.default)(targetImagePlane.imagePositionPatient);
  referenceImagePlane.rowCosines = (0, _convertToVector2.default)(referenceImagePlane.rowCosines);
  referenceImagePlane.columnCosines = (0, _convertToVector2.default)(referenceImagePlane.columnCosines);
  referenceImagePlane.imagePositionPatient = (0, _convertToVector2.default)(referenceImagePlane.imagePositionPatient);

  // The image plane normals must be > 30 degrees apart
  var targetNormal = targetImagePlane.rowCosines.clone().cross(targetImagePlane.columnCosines);
  var referenceNormal = referenceImagePlane.rowCosines.clone().cross(referenceImagePlane.columnCosines);
  var angleInRadians = targetNormal.angleTo(referenceNormal);

  angleInRadians = Math.abs(angleInRadians);
  if (angleInRadians < 0.5) {
    // 0.5 radians = ~30 degrees
    return;
  }

  var referenceLine = (0, _calculateReferenceLine2.default)(targetImagePlane, referenceImagePlane);

  if (!referenceLine) {
    return;
  }

  var color = _toolColors2.default.getActiveColor();

  // Draw the referenceLines
  context.setTransform(1, 0, 0, 1, 0, 0);

  (0, _drawing.draw)(context, function (context) {
    (0, _drawing.drawLine)(context, eventData.element, referenceLine.start, referenceLine.end, { color: color });
  });
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _calculateReferenceLine = __webpack_require__(/*! ./calculateReferenceLine.js */ "./referenceLines/calculateReferenceLine.js");

var _calculateReferenceLine2 = _interopRequireDefault(_calculateReferenceLine);

var _toolColors = __webpack_require__(/*! ../stateManagement/toolColors.js */ "./stateManagement/toolColors.js");

var _toolColors2 = _interopRequireDefault(_toolColors);

var _convertToVector = __webpack_require__(/*! ../util/convertToVector3.js */ "./util/convertToVector3.js");

var _convertToVector2 = _interopRequireDefault(_convertToVector);

var _drawing = __webpack_require__(/*! ../util/drawing.js */ "./util/drawing.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./requestPool/requestPoolManager.js":
/*!*******************************************!*\
  !*** ./requestPool/requestPoolManager.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _getMaxSimultaneousRequests = __webpack_require__(/*! ../util/getMaxSimultaneousRequests.js */ "./util/getMaxSimultaneousRequests.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestPool = {
  interaction: [],
  thumbnail: [],
  prefetch: []
};

var numRequests = {
  interaction: 0,
  thumbnail: 0,
  prefetch: 0
};

var maxNumRequests = {
  interaction: 6,
  thumbnail: 6,
  prefetch: 5
};

var awake = false;
var grabDelay = 20;

function addRequest(element, imageId, type, preventCache, doneCallback, failCallback, addToBeginning) {
  if (!requestPool.hasOwnProperty(type)) {
    throw new Error('Request type must be one of interaction, thumbnail, or prefetch');
  }

  if (!element || !imageId) {
    return;
  }

  // Describe the request
  var requestDetails = {
    type: type,
    imageId: imageId,
    preventCache: preventCache,
    doneCallback: doneCallback,
    failCallback: failCallback
  };

  // If this imageId is in the cache, resolve it immediately
  var imageLoadObject = _externalModules2.default.cornerstone.imageCache.getImageLoadObject(imageId);

  if (imageLoadObject) {
    imageLoadObject.promise.then(function (image) {
      doneCallback(image);
    }, function (error) {
      failCallback(error);
    });

    return;
  }

  if (addToBeginning) {
    // Add it to the beginning of the stack
    requestPool[type].unshift(requestDetails);
  } else {
    // Add it to the end of the stack
    requestPool[type].push(requestDetails);
  }

  // Wake up
  awake = true;
}

function clearRequestStack(type) {
  // Console.log('clearRequestStack');
  if (!requestPool.hasOwnProperty(type)) {
    throw new Error('Request type must be one of interaction, thumbnail, or prefetch');
  }

  requestPool[type] = [];
}

function startAgain() {
  if (!awake) {
    return;
  }

  setTimeout(function () {
    startGrabbing();
  }, grabDelay);
}

function sendRequest(requestDetails) {
  var cornerstone = _externalModules2.default.cornerstone;
  // Increment the number of current requests of this type
  var type = requestDetails.type;

  numRequests[type]++;

  awake = true;
  var imageId = requestDetails.imageId;
  var doneCallback = requestDetails.doneCallback;
  var failCallback = requestDetails.failCallback;

  // Check if we already have this image promise in the cache
  var imageLoadObject = cornerstone.imageCache.getImageLoadObject(imageId);

  if (imageLoadObject) {
    // If we do, remove from list (when resolved, as we could have
    // Pending prefetch requests) and stop processing this iteration
    imageLoadObject.promise.then(function (image) {
      numRequests[type]--;
      // Console.log(numRequests);

      doneCallback(image);
      startAgain();
    }, function (error) {
      numRequests[type]--;
      // Console.log(numRequests);
      failCallback(error);
      startAgain();
    });

    return;
  }

  function requestTypeToLoadPriority(requestDetails) {
    if (requestDetails.type === 'prefetch') {
      return -5;
    } else if (requestDetails.type === 'interactive') {
      return 0;
    } else if (requestDetails.type === 'thumbnail') {
      return 5;
    }
  }

  var priority = requestTypeToLoadPriority(requestDetails);

  var loader = void 0;

  if (requestDetails.preventCache === true) {
    loader = cornerstone.loadImage(imageId, {
      priority: priority,
      type: requestDetails.type
    });
  } else {
    loader = cornerstone.loadAndCacheImage(imageId, {
      priority: priority,
      type: requestDetails.type
    });
  }

  // Load and cache the image
  loader.then(function (image) {
    numRequests[type]--;
    // Console.log(numRequests);
    doneCallback(image);
    startAgain();
  }, function (error) {
    numRequests[type]--;
    // Console.log(numRequests);
    failCallback(error);
    startAgain();
  });
}

function startGrabbing() {
  // Begin by grabbing X images
  var maxSimultaneousRequests = (0, _getMaxSimultaneousRequests.getMaxSimultaneousRequests)();

  maxNumRequests = {
    interaction: Math.max(maxSimultaneousRequests, 1),
    thumbnail: Math.max(maxSimultaneousRequests - 2, 1),
    prefetch: Math.max(maxSimultaneousRequests - 1, 1)
  };

  var currentRequests = numRequests.interaction + numRequests.thumbnail + numRequests.prefetch;
  var requestsToSend = maxSimultaneousRequests - currentRequests;

  for (var i = 0; i < requestsToSend; i++) {
    var requestDetails = getNextRequest();

    if (requestDetails) {
      sendRequest(requestDetails);
    }
  }
}

function getNextRequest() {
  if (requestPool.interaction.length && numRequests.interaction < maxNumRequests.interaction) {
    return requestPool.interaction.shift();
  }

  if (requestPool.thumbnail.length && numRequests.thumbnail < maxNumRequests.thumbnail) {
    return requestPool.thumbnail.shift();
  }

  if (requestPool.prefetch.length && numRequests.prefetch < maxNumRequests.prefetch) {
    return requestPool.prefetch.shift();
  }

  if (!requestPool.interaction.length && !requestPool.thumbnail.length && !requestPool.prefetch.length) {
    awake = false;
  }

  return false;
}

function getRequestPool() {
  return requestPool;
}

exports.default = {
  addRequest: addRequest,
  clearRequestStack: clearRequestStack,
  startGrabbing: startGrabbing,
  getRequestPool: getRequestPool
};

/***/ }),

/***/ "./stackTools/fusionRenderer.js":
/*!**************************************!*\
  !*** ./stackTools/fusionRenderer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FusionRenderer = function () {
  function FusionRenderer() {
    _classCallCheck(this, FusionRenderer);

    this.currentImageIdIndex = 0;
    this.layerIds = [];
    this.findImageFn = undefined;
  }

  _createClass(FusionRenderer, [{
    key: 'render',
    value: function render(element, imageStacks) {
      var _this = this;

      // Move this to base Renderer class
      if (!Number.isInteger(this.currentImageIdIndex)) {
        throw new Error('FusionRenderer: render - Image ID Index is not an integer');
      }

      if (!this.findImageFn) {
        throw new Error('No findImage function has been defined');
      }

      if (!imageStacks) {
        var toolData = (0, _toolState.getToolState)(element, 'stack');

        imageStacks = toolData.data;
      }
      // TODO: Figure out what to do with LoadHandlers in this scenario...

      var cornerstone = _externalModules2.default.cornerstone;

      // For the base layer, go to the currentImageIdIndex
      var baseImageObject = imageStacks[0];
      var currentImageId = baseImageObject.imageIds[this.currentImageIdIndex];
      var overlayImageStacks = imageStacks.slice(1, imageStacks.length);

      cornerstone.loadAndCacheImage(currentImageId).then(function (baseImage) {
        var baseLayerId = _this.layerIds[0];

        // Get the base layer if one exists
        if (baseLayerId) {
          cornerstone.setLayerImage(element, baseImage, baseLayerId);
        } else {
          // Otherwise, create a new layer with the base layer's image
          baseLayerId = cornerstone.addLayer(element, baseImage, baseImageObject.options);
          _this.layerIds.push(baseLayerId);
        }

        // Display the image immediately while the overlay images are identified
        cornerstone.displayImage(element, baseImage);

        // Loop through the remaining 'overlay' image stacks
        overlayImageStacks.forEach(function (imgObj, overlayLayerIndex) {
          var imageId = _this.findImageFn(imgObj.imageIds, currentImageId);
          var layerIndex = overlayLayerIndex + 1;
          var currentLayerId = _this.layerIds[layerIndex];

          // If no layer exists yet for this overlaid stack, create
          // One and add it to the layerIds property for this instance
          // Of the fusion renderer.
          if (!currentLayerId) {
            currentLayerId = cornerstone.addLayer(element, undefined, imgObj.options);
            _this.layerIds.push(currentLayerId);
          }

          if (imageId) {
            // If an imageId was returned from the findImage function,
            // Load it, make sure it's visible and update the layer
            // With the new image object.
            cornerstone.loadAndCacheImage(imageId).then(function (image) {
              cornerstone.setLayerImage(element, image, currentLayerId);
              cornerstone.updateImage(element);
            });
          } else {
            // If no imageId was returned from the findImage function.
            // This means that there is no relevant image to display.
            cornerstone.setLayerImage(element, undefined, currentLayerId);
            cornerstone.setActiveLayer(element, baseLayerId);
            cornerstone.updateImage(element);
          }
        });
      });
    }
  }]);

  return FusionRenderer;
}();

exports.default = FusionRenderer;

/***/ }),

/***/ "./stackTools/playClip.js":
/*!********************************!*\
  !*** ./stackTools/playClip.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopClip = exports.playClip = undefined;

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _loadHandlerManager = __webpack_require__(/*! ../stateManagement/loadHandlerManager.js */ "./stateManagement/loadHandlerManager.js");

var _loadHandlerManager2 = _interopRequireDefault(_loadHandlerManager);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _triggerEvent = __webpack_require__(/*! ../util/triggerEvent.js */ "./util/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toolType = 'playClip';

/**
 * [private] Turns a Frame Time Vector (0018,1065) array into a normalized array of timeouts. Each element
 * ... of the resulting array represents the amount of time each frame will remain on the screen.
 * @param {Array} vector A Frame Time Vector (0018,1065) as specified in section C.7.6.5.1.2 of DICOM standard.
 * @param {Number} speed A speed factor which will be applied to each element of the resulting array.
 * @return {Array} An array with timeouts for each animation frame.
 */
/* eslint no-bitwise:0 */
function getPlayClipTimeouts(vector, speed) {

  var i = void 0;
  var sample = void 0;
  var delay = void 0;
  var sum = 0;
  var limit = vector.length;
  var timeouts = [];

  // Initialize time varying to false
  timeouts.isTimeVarying = false;

  if (typeof speed !== 'number' || speed <= 0) {
    speed = 1;
  }

  // First element of a frame time vector must be discarded
  for (i = 1; i < limit; i++) {
    delay = Number(vector[i]) / speed | 0; // Integral part only
    timeouts.push(delay);
    if (i === 1) {
      // Use first item as a sample for comparison
      sample = delay;
    } else if (delay !== sample) {
      timeouts.isTimeVarying = true;
    }

    sum += delay;
  }

  if (timeouts.length > 0) {
    if (timeouts.isTimeVarying) {
      // If it's a time varying vector, make the last item an average...
      delay = sum / timeouts.length | 0;
    } else {
      delay = timeouts[0];
    }

    timeouts.push(delay);
  }

  return timeouts;
}

/**
 * [private] Performs the heavy lifting of stopping an ongoing animation.
 * @param {Object} playClipData The data from playClip that needs to be stopped.
 * @return void
 */
function stopClipWithData(playClipData) {
  var id = playClipData.intervalId;

  if (typeof id !== 'undefined') {
    playClipData.intervalId = undefined;
    if (playClipData.usingFrameTimeVector) {
      clearTimeout(id);
    } else {
      clearInterval(id);
    }
  }
}

/**
 * [private] Trigger playClip tool stop event.
 * @param element
 * @return void
 */
function triggerStopEvent(element) {
  var eventDetail = {
    element: element
  };

  (0, _triggerEvent2.default)(element, _events2.default.CLIP_STOPPED, eventDetail);
}

/**
 * Starts playing a clip or adjusts the frame rate of an already playing clip.  framesPerSecond is
 * optional and defaults to 30 if not specified.  A negative framesPerSecond will play the clip in reverse.
 * The element must be a stack of images
 * @param element
 * @param framesPerSecond
 */
function playClip(element, framesPerSecond) {
  var playClipData = void 0;
  var playClipTimeouts = void 0;

  if (element === undefined) {
    throw new Error('playClip: element must not be undefined');
  }

  var stackToolData = (0, _toolState.getToolState)(element, 'stack');

  if (!stackToolData || !stackToolData.data || !stackToolData.data.length) {
    return;
  }

  var cornerstone = _externalModules2.default.cornerstone;
  // If we have more than one stack, check if we have a stack renderer defined
  var stackRenderer = void 0;

  if (stackToolData.data.length > 1) {
    var stackRendererData = (0, _toolState.getToolState)(element, 'stackRenderer');

    if (stackRendererData && stackRendererData.data && stackRendererData.data.length) {
      stackRenderer = stackRendererData.data[0];
    }
  }

  var stackData = stackToolData.data[0];

  var playClipToolData = (0, _toolState.getToolState)(element, toolType);

  if (!playClipToolData || !playClipToolData.data || !playClipToolData.data.length) {
    playClipData = {
      intervalId: undefined,
      framesPerSecond: 30,
      lastFrameTimeStamp: undefined,
      frameRate: 0,
      frameTimeVector: undefined,
      ignoreFrameTimeVector: false,
      usingFrameTimeVector: false,
      speed: 1,
      reverse: false,
      loop: true
    };
    (0, _toolState.addToolState)(element, toolType, playClipData);
  } else {
    playClipData = playClipToolData.data[0];
    // Make sure the specified clip is not running before any property update
    stopClipWithData(playClipData);
  }

  // If a framesPerSecond is specified and is valid, update the playClipData now
  if (framesPerSecond < 0 || framesPerSecond > 0) {
    playClipData.framesPerSecond = Number(framesPerSecond);
    playClipData.reverse = playClipData.framesPerSecond < 0;
    // If framesPerSecond is given, frameTimeVector will be ignored...
    playClipData.ignoreFrameTimeVector = true;
  }

  // Determine if frame time vector should be used instead of a fixed frame rate...
  if (playClipData.ignoreFrameTimeVector !== true && playClipData.frameTimeVector && playClipData.frameTimeVector.length === stackData.imageIds.length) {
    playClipTimeouts = getPlayClipTimeouts(playClipData.frameTimeVector, playClipData.speed);
  }

  // This function encapsulates the frame rendering logic...
  var playClipAction = function playClipAction() {

    // Hoisting of context variables
    var loader = void 0,
        startLoadingHandler = void 0,
        endLoadingHandler = void 0,
        errorLoadingHandler = void 0,
        newImageIdIndex = stackData.currentImageIdIndex;

    var imageCount = stackData.imageIds.length;

    if (playClipData.reverse) {
      newImageIdIndex--;
    } else {
      newImageIdIndex++;
    }

    if (!playClipData.loop && (newImageIdIndex < 0 || newImageIdIndex >= imageCount)) {
      stopClipWithData(playClipData);
      triggerStopEvent(element);

      return;
    }

    // Loop around if we go outside the stack
    if (newImageIdIndex >= imageCount) {
      newImageIdIndex = 0;
    }

    if (newImageIdIndex < 0) {
      newImageIdIndex = imageCount - 1;
    }

    if (newImageIdIndex !== stackData.currentImageIdIndex) {

      startLoadingHandler = _loadHandlerManager2.default.getStartLoadHandler();
      endLoadingHandler = _loadHandlerManager2.default.getEndLoadHandler();
      errorLoadingHandler = _loadHandlerManager2.default.getErrorLoadingHandler();

      if (startLoadingHandler) {
        startLoadingHandler(element);
      }

      if (stackData.preventCache === true) {
        loader = cornerstone.loadImage(stackData.imageIds[newImageIdIndex]);
      } else {
        loader = cornerstone.loadAndCacheImage(stackData.imageIds[newImageIdIndex]);
      }

      loader.then(function (image) {
        try {
          stackData.currentImageIdIndex = newImageIdIndex;
          if (stackRenderer) {
            stackRenderer.currentImageIdIndex = newImageIdIndex;
            stackRenderer.render(element, stackToolData.data);
          } else {
            cornerstone.displayImage(element, image);
          }
          if (endLoadingHandler) {
            endLoadingHandler(element, image);
          }
        } catch (error) {
          return;
        }
      }, function (error) {
        var imageId = stackData.imageIds[newImageIdIndex];

        if (errorLoadingHandler) {
          errorLoadingHandler(element, imageId, error);
        }
      });
    }
  };

  // If playClipTimeouts array is available, not empty and its elements are NOT uniform ...
  // ... (at least one timeout is different from the others), use alternate setTimeout implementation
  if (playClipTimeouts && playClipTimeouts.length > 0 && playClipTimeouts.isTimeVarying) {
    playClipData.usingFrameTimeVector = true;
    playClipData.intervalId = setTimeout(function playClipTimeoutHandler() {
      playClipData.intervalId = setTimeout(playClipTimeoutHandler, playClipTimeouts[stackData.currentImageIdIndex]);
      playClipAction();
    }, 0);
  } else {
    // ... otherwise user setInterval implementation which is much more efficient.
    playClipData.usingFrameTimeVector = false;
    playClipData.intervalId = setInterval(playClipAction, 1000 / Math.abs(playClipData.framesPerSecond));
  }
}

/**
 * Stops an already playing clip.
 * * @param element
 */
function stopClip(element) {

  var playClipToolData = (0, _toolState.getToolState)(element, toolType);

  if (!playClipToolData || !playClipToolData.data || !playClipToolData.data.length) {
    return;
  }

  stopClipWithData(playClipToolData.data[0]);
}

exports.playClip = playClip;
exports.stopClip = stopClip;

/***/ }),

/***/ "./stackTools/stackPrefetch.js":
/*!*************************************!*\
  !*** ./stackTools/stackPrefetch.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _requestPoolManager = __webpack_require__(/*! ../requestPool/requestPoolManager.js */ "./requestPool/requestPoolManager.js");

var _requestPoolManager2 = _interopRequireDefault(_requestPoolManager);

var _loadHandlerManager = __webpack_require__(/*! ../stateManagement/loadHandlerManager.js */ "./stateManagement/loadHandlerManager.js");

var _loadHandlerManager2 = _interopRequireDefault(_loadHandlerManager);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _getMaxSimultaneousRequests = __webpack_require__(/*! ../util/getMaxSimultaneousRequests.js */ "./util/getMaxSimultaneousRequests.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toolType = 'stackPrefetch';
var requestType = 'prefetch';

var configuration = {
  maxImagesToPrefetch: Infinity
};

var resetPrefetchTimeout = void 0;
var resetPrefetchDelay = 10;

function range(lowEnd, highEnd) {
  // Javascript version of Python's range function
  // http://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-an-array-based-on-suppl
  lowEnd = Math.round(lowEnd) || 0;
  highEnd = Math.round(highEnd) || 0;

  var arr = [];
  var c = highEnd - lowEnd + 1;

  if (c <= 0) {
    return arr;
  }

  while (c--) {
    arr[c] = highEnd--;
  }

  return arr;
}

var max = function max(arr) {
  return Math.max.apply(null, arr);
};

var min = function min(arr) {
  return Math.min.apply(null, arr);
};

function nearestIndex(arr, x) {
  // Return index of nearest values in array
  // http://stackoverflow.com/questions/25854212/return-index-of-nearest-values-in-an-array
  var l = [];
  var h = [];

  arr.forEach(function (v) {
    if (v < x) {
      l.push(v);
    } else if (v > x) {
      h.push(v);
    }
  });

  return {
    low: arr.indexOf(max(l)),
    high: arr.indexOf(min(h))
  };
}

function prefetch(element) {
  // Check to make sure stack data exists
  var stackData = (0, _toolState.getToolState)(element, 'stack');

  if (!stackData || !stackData.data || !stackData.data.length) {
    return;
  }

  var stack = stackData.data[0];

  // Get the stackPrefetch tool data
  var stackPrefetchData = (0, _toolState.getToolState)(element, toolType);

  if (!stackPrefetchData) {
    return;
  }

  var stackPrefetch = stackPrefetchData.data[0] || {};

  // If all the requests are complete, disable the stackPrefetch tool
  if (!stackPrefetch.indicesToRequest || !stackPrefetch.indicesToRequest.length) {
    stackPrefetch.enabled = false;
  }

  // Make sure the tool is still enabled
  if (stackPrefetch.enabled === false) {
    return;
  }

  // Remove an imageIdIndex from the list of indices to request
  // This fires when the individual image loading deferred is resolved
  function removeFromList(imageIdIndex) {
    var index = stackPrefetch.indicesToRequest.indexOf(imageIdIndex);

    if (index > -1) {
      // Don't remove last element if imageIdIndex not found
      stackPrefetch.indicesToRequest.splice(index, 1);
    }
  }

  // Remove all already cached images from the
  // IndicesToRequest array
  stackPrefetchData.data[0].indicesToRequest.sort(function (a, b) {
    return a - b;
  });
  var indicesToRequestCopy = stackPrefetch.indicesToRequest.slice();

  indicesToRequestCopy.forEach(function (imageIdIndex) {
    var imageId = stack.imageIds[imageIdIndex];

    if (!imageId) {
      return;
    }

    var imageLoadObject = _externalModules2.default.cornerstone.imageCache.getImageLoadObject(imageId);

    if (imageLoadObject) {
      removeFromList(imageIdIndex);
    }
  });

  // Stop here if there are no images left to request
  // After those in the cache have been removed
  if (!stackPrefetch.indicesToRequest.length) {
    return;
  }

  // Clear the requestPool of prefetch requests
  _requestPoolManager2.default.clearRequestStack(requestType);

  // Identify the nearest imageIdIndex to the currentImageIdIndex
  var nearest = nearestIndex(stackPrefetch.indicesToRequest, stack.currentImageIdIndex);

  var imageId = void 0;
  var nextImageIdIndex = void 0;
  var preventCache = false;

  function doneCallback(image) {
    // Console.log('prefetch done: ' + image.imageId);
    var imageIdIndex = stack.imageIds.indexOf(image.imageId);

    removeFromList(imageIdIndex);
  }

  // Retrieve the errorLoadingHandler if one exists
  var errorLoadingHandler = _loadHandlerManager2.default.getErrorLoadingHandler();

  function failCallback(error) {
    console.log('prefetch errored: ' + error);
    if (errorLoadingHandler) {
      errorLoadingHandler(element, imageId, error, 'stackPrefetch');
    }
  }

  // Prefetch images around the current image (before and after)
  var lowerIndex = nearest.low;
  var higherIndex = nearest.high;

  while (lowerIndex >= 0 || higherIndex < stackPrefetch.indicesToRequest.length) {
    var currentIndex = stack.currentImageIdIndex;
    var shouldSkipLower = currentIndex - stackPrefetch.indicesToRequest[lowerIndex] > configuration.maxImagesToPrefetch;
    var shouldSkipHigher = stackPrefetch.indicesToRequest[higherIndex] - currentIndex > configuration.maxImagesToPrefetch;

    var shouldLoadLower = !shouldSkipLower && lowerIndex >= 0;
    var shouldLoadHigher = !shouldSkipHigher && higherIndex < stackPrefetch.indicesToRequest.length;

    if (!shouldLoadHigher && !shouldLoadLower) {
      break;
    }

    if (shouldLoadLower) {
      nextImageIdIndex = stackPrefetch.indicesToRequest[lowerIndex--];
      imageId = stack.imageIds[nextImageIdIndex];
      _requestPoolManager2.default.addRequest(element, imageId, requestType, preventCache, doneCallback, failCallback);
    }

    if (shouldLoadHigher) {
      nextImageIdIndex = stackPrefetch.indicesToRequest[higherIndex++];
      imageId = stack.imageIds[nextImageIdIndex];
      _requestPoolManager2.default.addRequest(element, imageId, requestType, preventCache, doneCallback, failCallback);
    }
  }

  // Try to start the requestPool's grabbing procedure
  // In case it isn't already running
  _requestPoolManager2.default.startGrabbing();
}

function getPromiseRemovedHandler(element) {
  return function (e) {
    var eventData = e.detail;

    // When an imagePromise has been pushed out of the cache, re-add its index
    // It to the indicesToRequest list so that it will be retrieved later if the
    // CurrentImageIdIndex is changed to an image nearby
    var stackData = void 0;

    try {
      // It will throw an exception in some cases (eg: thumbnails)
      stackData = (0, _toolState.getToolState)(element, 'stack');
    } catch (error) {
      return;
    }

    if (!stackData || !stackData.data || !stackData.data.length) {
      return;
    }

    var stack = stackData.data[0];
    var imageIdIndex = stack.imageIds.indexOf(eventData.imageId);

    // Make sure the image that was removed is actually in this stack
    // Before adding it to the indicesToRequest array
    if (imageIdIndex < 0) {
      return;
    }

    var stackPrefetchData = (0, _toolState.getToolState)(element, toolType);

    if (!stackPrefetchData || !stackPrefetchData.data || !stackPrefetchData.data.length) {
      return;
    }

    stackPrefetchData.data[0].indicesToRequest.push(imageIdIndex);
  };
}

function onImageUpdated(e) {
  // Start prefetching again (after a delay)
  // When the user has scrolled to a new image
  clearTimeout(resetPrefetchTimeout);
  resetPrefetchTimeout = setTimeout(function () {
    var element = e.target;

    // If playClip is enabled and the user loads a different series in the viewport
    // An exception will be thrown because the element will not be enabled anymore
    try {
      prefetch(element);
    } catch (error) {
      return;
    }
  }, resetPrefetchDelay);
}

function enable(element) {
  // Clear old prefetch data. Skipping this can cause problems when changing the series inside an element
  var stackPrefetchDataArray = (0, _toolState.getToolState)(element, toolType);

  stackPrefetchDataArray.data = [];

  // First check that there is stack data available
  var stackData = (0, _toolState.getToolState)(element, 'stack');

  if (!stackData || !stackData.data || !stackData.data.length) {
    return;
  }

  var stack = stackData.data[0];

  // Check if we are allowed to cache images in this stack
  if (stack.preventCache === true) {
    console.warn('A stack that should not be cached was given the stackPrefetch');

    return;
  }

  // Use the currentImageIdIndex from the stack as the initalImageIdIndex
  var stackPrefetchData = {
    indicesToRequest: range(0, stack.imageIds.length - 1),
    enabled: true,
    direction: 1
  };

  // Remove the currentImageIdIndex from the list to request
  var indexOfCurrentImage = stackPrefetchData.indicesToRequest.indexOf(stack.currentImageIdIndex);

  stackPrefetchData.indicesToRequest.splice(indexOfCurrentImage, 1);

  (0, _toolState.addToolState)(element, toolType, stackPrefetchData);

  prefetch(element);

  element.removeEventListener(_events2.default.NEW_IMAGE, onImageUpdated);
  element.addEventListener(_events2.default.NEW_IMAGE, onImageUpdated);

  var promiseRemovedHandler = getPromiseRemovedHandler(element);

  _externalModules2.default.cornerstone.events.removeEventListener(_events2.default.IMAGE_CACHE_PROMISE_REMOVED, promiseRemovedHandler);
  _externalModules2.default.cornerstone.events.addEventListener(_events2.default.IMAGE_CACHE_PROMISE_REMOVED, promiseRemovedHandler);
}

function disable(element) {
  clearTimeout(resetPrefetchTimeout);
  element.removeEventListener(_events2.default.NEW_IMAGE, onImageUpdated);

  var promiseRemovedHandler = getPromiseRemovedHandler(element);

  _externalModules2.default.cornerstone.events.removeEventListener(_events2.default.IMAGE_CACHE_PROMISE_REMOVED, promiseRemovedHandler);

  var stackPrefetchData = (0, _toolState.getToolState)(element, toolType);
  // If there is actually something to disable, disable it

  if (stackPrefetchData && stackPrefetchData.data.length) {
    stackPrefetchData.data[0].enabled = false;

    // Clear current prefetch requests from the requestPool
    _requestPoolManager2.default.clearRequestStack(requestType);
  }
}

function getConfiguration() {
  return configuration;
}

function setConfiguration(config) {
  configuration = config;

  if (config.maxSimultaneousRequests) {
    (0, _getMaxSimultaneousRequests.setMaxSimultaneousRequests)(config.maxSimultaneousRequests);
  }
}

// Module/private exports
var stackPrefetch = {
  enable: enable,
  disable: disable,
  getConfiguration: getConfiguration,
  setConfiguration: setConfiguration
};

exports.default = stackPrefetch;

/***/ }),

/***/ "./stackTools/stackRenderers.js":
/*!**************************************!*\
  !*** ./stackTools/stackRenderers.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fusionRenderer = __webpack_require__(/*! ./fusionRenderer.js */ "./stackTools/fusionRenderer.js");

var _fusionRenderer2 = _interopRequireDefault(_fusionRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stackRenderers = {};

stackRenderers.FusionRenderer = _fusionRenderer2.default;

exports.default = stackRenderers;

/***/ }),

/***/ "./stateManagement/frameOfReferenceStateManager.js":
/*!*********************************************************!*\
  !*** ./stateManagement/frameOfReferenceStateManager.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// This implements a frame-of-reference specific tool state management strategy.  This means that
// Measurement data are tied to a specific frame of reference UID and only visible to objects using
// That frame-of-reference UID

function newFrameOfReferenceSpecificToolStateManager() {
  var toolState = {};

  // Here we add tool state, this is done by tools as well
  // As modules that restore saved state
  function addFrameOfReferenceSpecificToolState(frameOfReference, toolType, data) {
    // If we don't have any tool state for this frameOfReference, add an empty object
    if (toolState.hasOwnProperty(frameOfReference) === false) {
      toolState[frameOfReference] = {};
    }

    var frameOfReferenceToolState = toolState[frameOfReference];

    // If we don't have tool state for this type of tool, add an empty object
    if (frameOfReferenceToolState.hasOwnProperty(toolType) === false) {
      frameOfReferenceToolState[toolType] = {
        data: []
      };
    }

    var toolData = frameOfReferenceToolState[toolType];

    // Finally, add this new tool to the state
    toolData.data.push(data);
  }

  // Here you can get state - used by tools as well as modules
  // That save state persistently
  function getFrameOfReferenceSpecificToolState(frameOfReference, toolType) {
    // If we don't have any tool state for this frame of reference, return undefined
    if (toolState.hasOwnProperty(frameOfReference) === false) {
      return;
    }

    var frameOfReferenceToolState = toolState[frameOfReference];

    // If we don't have tool state for this type of tool, return undefined
    if (frameOfReferenceToolState.hasOwnProperty(toolType) === false) {
      return;
    }

    var toolData = frameOfReferenceToolState[toolType];

    return toolData;
  }

  function removeFrameOfReferenceSpecificToolState(frameOfReference, toolType, data) {
    // If we don't have any tool state for this frame of reference, return undefined
    if (toolState.hasOwnProperty(frameOfReference) === false) {
      return;
    }

    var frameOfReferenceToolState = toolState[frameOfReference];

    // If we don't have tool state for this type of tool, return undefined
    if (frameOfReferenceToolState.hasOwnProperty(toolType) === false) {
      return;
    }

    var toolData = frameOfReferenceToolState[toolType];
    // Find this tool data
    var indexOfData = -1;

    for (var i = 0; i < toolData.data.length; i++) {
      if (toolData.data[i] === data) {
        indexOfData = i;
      }
    }

    if (indexOfData !== -1) {
      toolData.data.splice(indexOfData, 1);
    }
  }

  return {
    get: getFrameOfReferenceSpecificToolState,
    add: addFrameOfReferenceSpecificToolState,
    remove: removeFrameOfReferenceSpecificToolState
  };
}

// A global frameOfReferenceSpecificToolStateManager - the most common case is to share 3d information
// Between stacks of images
var globalFrameOfReferenceSpecificToolStateManager = newFrameOfReferenceSpecificToolStateManager();

exports.newFrameOfReferenceSpecificToolStateManager = newFrameOfReferenceSpecificToolStateManager;
exports.globalFrameOfReferenceSpecificToolStateManager = globalFrameOfReferenceSpecificToolStateManager;

/***/ }),

/***/ "./stateManagement/imageIdSpecificStateManager.js":
/*!********************************************************!*\
  !*** ./stateManagement/imageIdSpecificStateManager.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalImageIdSpecificToolStateManager = exports.newImageIdSpecificToolStateManager = undefined;

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This implements an imageId specific tool state management strategy.  This means that
// Measurements data is tied to a specific imageId and only visible for enabled elements
// That are displaying that imageId.

function newImageIdSpecificToolStateManager() {
  var toolState = {};

  // Here we add tool state, this is done by tools as well
  // As modules that restore saved state

  function saveImageIdToolState(imageId) {
    return toolState[imageId];
  }

  function restoreImageIdToolState(imageId, imageIdToolState) {
    toolState[imageId] = imageIdToolState;
  }

  function saveToolState() {
    return toolState;
  }

  function restoreToolState(savedToolState) {
    toolState = savedToolState;
  }

  // Here we add tool state, this is done by tools as well
  // As modules that restore saved state
  function addImageIdSpecificToolState(element, toolType, data) {
    var enabledImage = _externalModules2.default.cornerstone.getEnabledElement(element);
    // If we don't have any tool state for this imageId, add an empty object

    if (!enabledImage.image || toolState.hasOwnProperty(enabledImage.image.imageId) === false) {
      toolState[enabledImage.image.imageId] = {};
    }

    var imageIdToolState = toolState[enabledImage.image.imageId];

    // If we don't have tool state for this type of tool, add an empty object
    if (imageIdToolState.hasOwnProperty(toolType) === false) {
      imageIdToolState[toolType] = {
        data: []
      };
    }

    var toolData = imageIdToolState[toolType];

    // Finally, add this new tool to the state
    toolData.data.push(data);
  }

  // Here you can get state - used by tools as well as modules
  // That save state persistently
  function getImageIdSpecificToolState(element, toolType) {
    var enabledImage = _externalModules2.default.cornerstone.getEnabledElement(element);
    // If we don't have any tool state for this imageId, return undefined

    if (!enabledImage.image || toolState.hasOwnProperty(enabledImage.image.imageId) === false) {
      return;
    }

    var imageIdToolState = toolState[enabledImage.image.imageId];

    // If we don't have tool state for this type of tool, return undefined
    if (imageIdToolState.hasOwnProperty(toolType) === false) {
      return;
    }

    var toolData = imageIdToolState[toolType];

    return toolData;
  }

  // Clears all tool data from this toolStateManager.
  function clearImageIdSpecificToolStateManager(element) {
    var enabledImage = _externalModules2.default.cornerstone.getEnabledElement(element);

    if (!enabledImage.image || toolState.hasOwnProperty(enabledImage.image.imageId) === false) {
      return;
    }

    delete toolState[enabledImage.image.imageId];
  }

  return {
    get: getImageIdSpecificToolState,
    add: addImageIdSpecificToolState,
    clear: clearImageIdSpecificToolStateManager,
    saveImageIdToolState: saveImageIdToolState,
    restoreImageIdToolState: restoreImageIdToolState,
    saveToolState: saveToolState,
    restoreToolState: restoreToolState,
    toolState: toolState
  };
}

// A global imageIdSpecificToolStateManager - the most common case is to share state between all
// Visible enabled images
var globalImageIdSpecificToolStateManager = newImageIdSpecificToolStateManager();

exports.newImageIdSpecificToolStateManager = newImageIdSpecificToolStateManager;
exports.globalImageIdSpecificToolStateManager = globalImageIdSpecificToolStateManager;

/***/ }),

/***/ "./stateManagement/loadHandlerManager.js":
/*!***********************************************!*\
  !*** ./stateManagement/loadHandlerManager.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultStartLoadHandler = void 0;
var defaultEndLoadHandler = void 0;
var defaultErrorLoadingHandler = void 0;

function setStartLoadHandler(handler) {
  defaultStartLoadHandler = handler;
}

function getStartLoadHandler() {
  return defaultStartLoadHandler;
}

function setEndLoadHandler(handler) {
  defaultEndLoadHandler = handler;
}

function getEndLoadHandler() {
  return defaultEndLoadHandler;
}

function setErrorLoadingHandler(handler) {
  defaultErrorLoadingHandler = handler;
}

function getErrorLoadingHandler() {
  return defaultErrorLoadingHandler;
}

var loadHandlerManager = {
  setStartLoadHandler: setStartLoadHandler,
  getStartLoadHandler: getStartLoadHandler,
  setEndLoadHandler: setEndLoadHandler,
  getEndLoadHandler: getEndLoadHandler,
  setErrorLoadingHandler: setErrorLoadingHandler,
  getErrorLoadingHandler: getErrorLoadingHandler
};

exports.default = loadHandlerManager;

/***/ }),

/***/ "./stateManagement/stackSpecificStateManager.js":
/*!******************************************************!*\
  !*** ./stateManagement/stackSpecificStateManager.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addStackStateManager = exports.newStackSpecificToolStateManager = exports.stackSpecificStateManager = undefined;

var _imageIdSpecificStateManager = __webpack_require__(/*! ./imageIdSpecificStateManager.js */ "./stateManagement/imageIdSpecificStateManager.js");

var _toolState = __webpack_require__(/*! ./toolState.js */ "./stateManagement/toolState.js");

// This implements an Stack specific tool state management strategy.  This means
// That tool data is shared between all imageIds in a given stack
function newStackSpecificToolStateManager(toolTypes, oldStateManager) {
  var toolState = {};

  function saveToolState() {
    return toolState;
  }

  function restoreToolState(stackToolState) {
    toolState = stackToolState;
  }

  // Here we add tool state, this is done by tools as well
  // As modules that restore saved state
  function addStackSpecificToolState(element, toolType, data) {
    // If this is a tool type to apply to the stack, do so
    if (toolTypes.indexOf(toolType) >= 0) {

      // If we don't have tool state for this type of tool, add an empty object
      if (toolState.hasOwnProperty(toolType) === false) {
        toolState[toolType] = {
          data: []
        };
      }

      var toolData = toolState[toolType];

      // Finally, add this new tool to the state
      toolData.data.push(data);
    } else {
      // Call the imageId specific tool state manager
      return oldStateManager.add(element, toolType, data);
    }
  }

  // Here you can get state - used by tools as well as modules
  // That save state persistently
  function getStackSpecificToolState(element, toolType) {
    // If this is a tool type to apply to the stack, do so
    if (toolTypes.indexOf(toolType) >= 0) {
      // If we don't have tool state for this type of tool, add an empty object
      if (toolState.hasOwnProperty(toolType) === false) {
        toolState[toolType] = {
          data: []
        };
      }

      return toolState[toolType];
    }

    // Call the imageId specific tool state manager
    return oldStateManager.get(element, toolType);
  }

  var stackSpecificToolStateManager = {
    get: getStackSpecificToolState,
    add: addStackSpecificToolState,
    saveToolState: saveToolState,
    restoreToolState: restoreToolState,
    toolState: toolState
  };

  return stackSpecificToolStateManager;
}

var stackStateManagers = [];

function addStackStateManager(element, otherTools) {
  var oldStateManager = (0, _toolState.getElementToolStateManager)(element);

  if (!oldStateManager) {
    oldStateManager = _imageIdSpecificStateManager.globalImageIdSpecificToolStateManager;
  }

  var stackTools = ['stack', 'stackPrefetch', 'playClip', 'volume', 'slab', 'referenceLines', 'crosshairs', 'stackRenderer'];

  if (otherTools) {
    stackTools = stackTools.concat(otherTools);
  }

  var stackSpecificStateManager = newStackSpecificToolStateManager(stackTools, oldStateManager);

  stackStateManagers.push(stackSpecificStateManager);
  (0, _toolState.setElementToolStateManager)(element, stackSpecificStateManager);
}

var stackSpecificStateManager = {
  newStackSpecificToolStateManager: newStackSpecificToolStateManager,
  addStackStateManager: addStackStateManager
};

exports.stackSpecificStateManager = stackSpecificStateManager;
exports.newStackSpecificToolStateManager = newStackSpecificToolStateManager;
exports.addStackStateManager = addStackStateManager;

/***/ }),

/***/ "./stateManagement/textStyle.js":
/*!**************************************!*\
  !*** ./stateManagement/textStyle.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultFontSize = 15,
    defaultFont = defaultFontSize + 'px Arial',
    defaultBackgroundColor = 'transparent';

function setFont(font) {
  defaultFont = font;
}

function getFont() {
  return defaultFont;
}

function setFontSize(fontSize) {
  defaultFontSize = fontSize;
}

function getFontSize() {
  return defaultFontSize;
}

function setBackgroundColor(backgroundColor) {
  defaultBackgroundColor = backgroundColor;
}

function getBackgroundColor() {
  return defaultBackgroundColor;
}

var textStyle = {
  setFont: setFont,
  getFont: getFont,
  setFontSize: setFontSize,
  getFontSize: getFontSize,
  setBackgroundColor: setBackgroundColor,
  getBackgroundColor: getBackgroundColor
};

exports.default = textStyle;

/***/ }),

/***/ "./stateManagement/timeSeriesSpecificStateManager.js":
/*!***********************************************************!*\
  !*** ./stateManagement/timeSeriesSpecificStateManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newTimeSeriesSpecificToolStateManager = exports.addTimeSeriesStateManager = undefined;

var _imageIdSpecificStateManager = __webpack_require__(/*! ./imageIdSpecificStateManager.js */ "./stateManagement/imageIdSpecificStateManager.js");

var _toolState = __webpack_require__(/*! ./toolState.js */ "./stateManagement/toolState.js");

// This implements an Stack specific tool state management strategy.  This means
// That tool data is shared between all imageIds in a given stack
function newTimeSeriesSpecificToolStateManager(toolTypes, oldStateManager) {
  var toolState = {};

  // Here we add tool state, this is done by tools as well
  // As modules that restore saved state
  function addStackSpecificToolState(element, toolType, data) {
    // If this is a tool type to apply to the stack, do so
    if (toolTypes.indexOf(toolType) >= 0) {

      // If we don't have tool state for this type of tool, add an empty object
      if (toolState.hasOwnProperty(toolType) === false) {
        toolState[toolType] = {
          data: []
        };
      }

      var toolData = toolState[toolType];

      // Finally, add this new tool to the state
      toolData.data.push(data);
    } else {
      // Call the imageId specific tool state manager
      return oldStateManager.add(element, toolType, data);
    }
  }

  // Here you can get state - used by tools as well as modules
  // That save state persistently
  function getStackSpecificToolState(element, toolType) {
    // If this is a tool type to apply to the stack, do so
    if (toolTypes.indexOf(toolType) >= 0) {
      // If we don't have tool state for this type of tool, add an empty object
      if (toolState.hasOwnProperty(toolType) === false) {
        toolState[toolType] = {
          data: []
        };
      }

      return toolState[toolType];
    }

    // Call the imageId specific tool state manager
    return oldStateManager.get(element, toolType);
  }

  var imageIdToolStateManager = {
    get: getStackSpecificToolState,
    add: addStackSpecificToolState
  };

  return imageIdToolStateManager;
}

var timeSeriesStateManagers = [];

function addTimeSeriesStateManager(element, tools) {
  tools = tools || ['timeSeries'];
  var oldStateManager = (0, _toolState.getElementToolStateManager)(element);

  if (oldStateManager === undefined) {
    oldStateManager = _imageIdSpecificStateManager.globalImageIdSpecificToolStateManager;
  }

  var timeSeriesSpecificStateManager = newTimeSeriesSpecificToolStateManager(tools, oldStateManager);

  timeSeriesStateManagers.push(timeSeriesSpecificStateManager);
  (0, _toolState.setElementToolStateManager)(element, timeSeriesSpecificStateManager);
}

exports.addTimeSeriesStateManager = addTimeSeriesStateManager;
exports.newTimeSeriesSpecificToolStateManager = newTimeSeriesSpecificToolStateManager;

/***/ }),

/***/ "./stateManagement/toolColors.js":
/*!***************************************!*\
  !*** ./stateManagement/toolColors.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var defaultColor = 'white',
    activeColor = 'greenyellow',
    fillColor = 'transparent';

function setFillColor(color) {
  fillColor = color;
}

function getFillColor() {
  return fillColor;
}

function setToolColor(color) {
  defaultColor = color;
}

function getToolColor() {
  return defaultColor;
}

function setActiveColor(color) {
  activeColor = color;
}

function getActiveColor() {
  return activeColor;
}

function getColorIfActive(data) {
  if (data.color) {
    return data.color;
  }

  return data.active ? activeColor : defaultColor;
}

var toolColors = {
  setFillColor: setFillColor,
  getFillColor: getFillColor,
  setToolColor: setToolColor,
  getToolColor: getToolColor,
  setActiveColor: setActiveColor,
  getActiveColor: getActiveColor,
  getColorIfActive: getColorIfActive
};

exports.default = toolColors;

/***/ }),

/***/ "./stateManagement/toolCoordinates.js":
/*!********************************************!*\
  !*** ./stateManagement/toolCoordinates.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var coordsData = void 0;

function setCoords(eventData) {
  coordsData = eventData.currentPoints.canvas;
}

function getCoords() {
  return coordsData;
}

var toolCoordinates = {
  setCoords: setCoords,
  getCoords: getCoords
};

exports.default = toolCoordinates;

/***/ }),

/***/ "./stateManagement/toolState.js":
/*!**************************************!*\
  !*** ./stateManagement/toolState.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElementToolStateManager = exports.setElementToolStateManager = exports.clearToolState = exports.removeToolState = exports.getToolState = exports.addToolState = undefined;

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _imageIdSpecificStateManager = __webpack_require__(/*! ./imageIdSpecificStateManager.js */ "./stateManagement/imageIdSpecificStateManager.js");

var _triggerEvent = __webpack_require__(/*! ../util/triggerEvent.js */ "./util/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getElementToolStateManager(element) {
  var enabledImage = _externalModules2.default.cornerstone.getEnabledElement(element);
  // If the enabledImage has no toolStateManager, create a default one for it
  // NOTE: This makes state management element specific

  if (enabledImage.toolStateManager === undefined) {
    enabledImage.toolStateManager = _imageIdSpecificStateManager.globalImageIdSpecificToolStateManager;
  }

  return enabledImage.toolStateManager;
}

// Here we add tool state, this is done by tools as well
// As modules that restore saved state
function addToolState(element, toolType, measurementData) {
  var toolStateManager = getElementToolStateManager(element);

  toolStateManager.add(element, toolType, measurementData);

  var eventType = _events2.default.MEASUREMENT_ADDED;
  var eventData = {
    toolType: toolType,
    element: element,
    measurementData: measurementData
  };

  (0, _triggerEvent2.default)(element, eventType, eventData);
}

// Here you can get state - used by tools as well as modules
// That save state persistently
function getToolState(element, toolType) {
  var toolStateManager = getElementToolStateManager(element);

  return toolStateManager.get(element, toolType);
}

function removeToolState(element, toolType, data) {
  var toolStateManager = getElementToolStateManager(element);
  var toolData = toolStateManager.get(element, toolType);
  // Find this tool data
  var indexOfData = -1;

  for (var i = 0; i < toolData.data.length; i++) {
    if (toolData.data[i] === data) {
      indexOfData = i;
    }
  }

  if (indexOfData !== -1) {
    toolData.data.splice(indexOfData, 1);

    var eventType = _events2.default.MEASUREMENT_REMOVED;
    var eventData = {
      toolType: toolType,
      element: element,
      measurementData: data
    };

    (0, _triggerEvent2.default)(element, eventType, eventData);
  }
}

function clearToolState(element, toolType) {
  var toolStateManager = getElementToolStateManager(element);
  var toolData = toolStateManager.get(element, toolType);

  // If any toolData actually exists, clear it
  if (toolData !== undefined) {
    toolData.data = [];
  }
}

// Sets the tool state manager for an element
function setElementToolStateManager(element, toolStateManager) {
  var enabledImage = _externalModules2.default.cornerstone.getEnabledElement(element);

  enabledImage.toolStateManager = toolStateManager;
}

exports.addToolState = addToolState;
exports.getToolState = getToolState;
exports.removeToolState = removeToolState;
exports.clearToolState = clearToolState;
exports.setElementToolStateManager = setElementToolStateManager;
exports.getElementToolStateManager = getElementToolStateManager;

/***/ }),

/***/ "./stateManagement/toolStyle.js":
/*!**************************************!*\
  !*** ./stateManagement/toolStyle.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultWidth = 1,
    activeWidth = 2;

function setToolWidth(width) {
  defaultWidth = width;
}

function getToolWidth() {
  return defaultWidth;
}

function setActiveWidth(width) {
  activeWidth = width;
}

function getActiveWidth() {
  return activeWidth;
}

var toolStyle = {
  setToolWidth: setToolWidth,
  getToolWidth: getToolWidth,
  setActiveWidth: setActiveWidth,
  getActiveWidth: getActiveWidth
};

exports.default = toolStyle;

/***/ }),

/***/ "./store/addEnabledElement.js":
/*!************************************!*\
  !*** ./store/addEnabledElement.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (enabledElement) {

  // TEMP -> We are piggy-backing off Cornerstone here, UUID
  // Generation should go core later, this is more of a POC.
  // NOTE: the 'enabledElement' argument here is actually the DOM element...
  var cornerstoneEnabledElement = _externalModules2.default.cornerstone.getEnabledElement(enabledElement);

  // TEMP
  if (cornerstoneEnabledElement.uuid) {
    console.error('uuid has gone core! remove this block and the generateGUID function.');
  } else {
    cornerstoneEnabledElement.uuid = (0, _generateGUID2.default)();
  }
  // TEMP

  // Listeners
  _index.keyboardEventListeners.enable(enabledElement);
  _index.mouseEventListeners.enable(enabledElement);
  _index.mouseWheelEventListeners.enable(enabledElement);
  _index.touchEventListeners.enable(enabledElement);

  // Dispatchers
  _index2.imageRenderedEventDispatcher.enable(enabledElement);
  _index2.mouseToolEventDispatcher.enable(enabledElement);
  _index2.newImageEventDispatcher.enable(enabledElement);
  _index2.touchToolEventDispatcher.enable(enabledElement);

  // State
  _index3.mutations.ADD_ENABLED_ELEMENT(enabledElement);
};

var _index = __webpack_require__(/*! ../eventListeners/index.js */ "./eventListeners/index.js");

var _index2 = __webpack_require__(/*! ../eventDispatchers/index.js */ "./eventDispatchers/index.js");

var _index3 = __webpack_require__(/*! ./index.js */ "./store/index.js");

var _generateGUID = __webpack_require__(/*! ./generateGUID.js */ "./store/generateGUID.js");

var _generateGUID2 = _interopRequireDefault(_generateGUID);

var _externalModules = __webpack_require__(/*! ../externalModules */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./store/addTool.js":
/*!**************************!*\
  !*** ./store/addTool.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToolForElement = exports.addTool = undefined;

var _index = __webpack_require__(/*! ./index.js */ "./store/index.js");

var _getToolForElement = __webpack_require__(/*! ./getToolForElement.js */ "./store/getToolForElement.js");

var _getToolForElement2 = _interopRequireDefault(_getToolForElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 *
 * @export
 * @param {*} element
 * @param {baseTool} tool
 */
var addToolForElement = function addToolForElement(element, apiTool) {
  // Instantiating the tool here makes it harder to accidentally add
  // The same tool (by reference) for multiple elements (which would reassign the tool
  // To a new element).
  var tool = new apiTool();
  var toolAlreadyAddedToElement = (0, _getToolForElement2.default)(element, tool.toolName);

  if (toolAlreadyAddedToElement) {
    console.warn(tool.toolName + ' has already been added to the target element');

    return;
  }

  tool.element = element;
  _index.state.tools.push(tool);
};

/**
 *
 *
 * @export
 * @param {baseTool} tool
 */
var addTool = function addTool(apiTool) {
  _index.state.enabledElements.forEach(function (element) {
    addToolForElement(element, apiTool);
  });
};

exports.addTool = addTool;
exports.addToolForElement = addToolForElement;

/***/ }),

/***/ "./store/brushStore.js":
/*!*****************************!*\
  !*** ./store/brushStore.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  draw: 0,
  radius: 10,
  minRadius: 1,
  maxRadius: 50,
  alpha: 0.4,
  renderBrushIfHiddenButActive: true,
  hiddenButActiveAlpha: 0.2,
  colorMapId: 'BrushColorMap',
  visibleSegmentations: {},
  imageBitmapCache: {}
};

var mutations = {
  SET_DRAW_COLOR: function SET_DRAW_COLOR(drawColorId) {
    state.draw = drawColorId;
  },
  SET_RADIUS: function SET_RADIUS(radius) {
    state.radius = Math.min(Math.max(radius, state.minRadius), state.maxRadius);
  },
  SET_MIN_RADIUS: function SET_MIN_RADIUS(minRadius) {
    state.minRadius = minRadius;
  },
  SET_MAX_RADIUS: function SET_MAX_RADIUS(maxRadius) {
    state.maxRadius = maxRadius;
  },
  SET_ALPHA: function SET_ALPHA(alpha) {
    state.alpha = alpha;
  },
  SET_HIDDEN_BUT_ACTIVE_ALPHA: function SET_HIDDEN_BUT_ACTIVE_ALPHA(alpha) {
    state.hiddenButActiveAlpha = alpha;
  },

  /**
   * Sets the brush color map to something other than the default
   *
   * @param  {Array} colors An array of 4D [red, green, blue, alpha] arrays.
   */
  SET_BRUSH_COLOR_MAP: function SET_BRUSH_COLOR_MAP(colors) {
    var colormap = _externalModules2.default.cornerstone.colors.getColormap(state.colorMapId);

    colormap.setNumberOfColors(colors.length);

    for (var i = 0; i < colors.length; i++) {
      colormap.setColor(i, colors[i]);
    }
  },
  SET_ELEMENT_VISIBLE: function SET_ELEMENT_VISIBLE(enabledElement) {
    if (!_externalModules2.default.cornerstone) {
      return;
    }

    var cornerstoneEnabledElement = _externalModules2.default.cornerstone.getEnabledElement(enabledElement);
    var enabledElementUID = cornerstoneEnabledElement.uuid;
    var colormap = _externalModules2.default.cornerstone.colors.getColormap(state.colorMapId);
    var numberOfColors = colormap.getNumberOfColors();

    state.visibleSegmentations[enabledElementUID] = [];

    for (var i = 0; i < numberOfColors; i++) {
      state.visibleSegmentations[enabledElementUID].push(true);
    }
  },
  SET_ELEMENT_BRUSH_VISIBILITY: function SET_ELEMENT_BRUSH_VISIBILITY(enabledElementUID, segIndex) {
    var visible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (!state.visibleSegmentations[enabledElementUID]) {
      state.imageBitmapCache[enabledElementUID] = [];
    }

    state.visibleSegmentations[enabledElementUID][segIndex] = visible;
  },
  SET_ELEMENT_IMAGE_BITMAP_CACHE: function SET_ELEMENT_IMAGE_BITMAP_CACHE(enabledElementUID, segIndex, imageBitmap) {
    if (!state.imageBitmapCache[enabledElementUID]) {
      state.imageBitmapCache[enabledElementUID] = [];
    }

    state.imageBitmapCache[enabledElementUID][segIndex] = imageBitmap;
  },
  CLEAR_ELEMENT_IMAGE_BITMAP_CACHE: function CLEAR_ELEMENT_IMAGE_BITMAP_CACHE(enabledElementUID) {
    state.imageBitmapCache[enabledElementUID] = [];
  }

};

var getters = {
  draw: function draw() {
    return state.draw;
  },
  radius: function radius() {
    return state.radius;
  },
  minRadius: function minRadius() {
    return state.minRadius;
  },
  maxRadius: function maxRadius() {
    return state.maxRadius;
  },
  alpha: function alpha() {
    return state.alpha;
  },
  hiddenButActiveAlpha: function hiddenButActiveAlpha() {
    return state.hiddenButActiveAlpha;
  },
  colorMapId: function colorMapId() {
    return state.colorMapId;
  },
  imageBitmapCacheForElement: function imageBitmapCacheForElement(enabledElementUID) {
    if (!state.imageBitmapCache[enabledElementUID]) {
      return null;
    }

    return state.imageBitmapCache[enabledElementUID];
  },
  visibleSegmentationsForElement: function visibleSegmentationsForElement(enabledElementUID) {
    if (!state.visibleSegmentations[enabledElementUID]) {
      return null;
    }

    return state.visibleSegmentations[enabledElementUID];
  }
};

exports.default = {
  state: state,
  getters: getters,
  mutations: mutations
};


var DISTINCT_COLORS = [[230, 25, 75, 255], [60, 180, 175, 255], [255, 225, 25, 255], [0, 130, 200, 255], [245, 130, 48, 255], [145, 30, 180, 255], [70, 240, 240, 255], [240, 50, 230, 255], [210, 245, 60, 255], [250, 190, 190, 255], [0, 128, 128, 255], [230, 190, 255, 255], [170, 110, 40, 255], [255, 250, 200, 255], [128, 0, 0, 255], [170, 255, 195, 255], [128, 128, 0, 255], [255, 215, 180, 255], [0, 0, 128, 255]];

// DEFAULT BRUSH COLOR MAP
if (_externalModules2.default.cornerstone && _externalModules2.default.cornerstone.colors) {
  var defaultSegmentationCount = 19;
  var colormap = _externalModules2.default.cornerstone.colors.getColormap(state.colorMapId);

  colormap.setNumberOfColors(defaultSegmentationCount);

  /*
    19 Colors selected to be as distinct from each other as possible,
    and ordered such that between each index you make large jumps around the
    color wheel. If defaultSegmentationCount is greater than 19, generate a
    random linearly interperlated color between 2 colors.
  */
  for (var i = 0; i < defaultSegmentationCount; i++) {
    if (i < DISTINCT_COLORS.length) {
      colormap.setColor(i, DISTINCT_COLORS[i]);
    } else {
      colormap.setColor(i, generateInterpolatedColor());
    }
  }
}

function generateInterpolatedColor() {
  var randIndicies = [getRandomInt(DISTINCT_COLORS.length), getRandomInt(DISTINCT_COLORS.length)];

  var fraction = Math.random();
  var interpolatedColor = [];

  for (var j = 0; j < 4; j++) {
    interpolatedColor.push(Math.floor(fraction * DISTINCT_COLORS[randIndicies[0]][j] + (1.0 - fraction) * DISTINCT_COLORS[randIndicies[1]][j]));
  }

  return interpolatedColor;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/***/ }),

/***/ "./store/generateGUID.js":
/*!*******************************!*\
  !*** ./store/generateGUID.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  // https://stackoverflow.com/a/8809472/9208320 Public Domain/MIT
  /* eslint no-bitwise: ["error", { "allow": ["&","|"] }] */
  var d = new Date().getTime();

  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); // Use high-precision timer if available
  }

  return 'x.x.x.x.x.x.xxxx.xxx.x.x.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;

    d = Math.floor(d / 16);

    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
};

/***/ }),

/***/ "./store/getActiveToolsForElement.js":
/*!*******************************************!*\
  !*** ./store/getActiveToolsForElement.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, tools) {
  return tools.filter(function (tool) {
    return tool.element === element && tool.mode === 'active';
  });
};

/***/ }),

/***/ "./store/getInteractiveToolsForElement.js":
/*!************************************************!*\
  !*** ./store/getInteractiveToolsForElement.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, tools) {
  return tools.filter(function (tool) {
    return tool.element === element && (tool.mode === 'active' || tool.mode === 'passive');
  });
};

/***/ }),

/***/ "./store/getToolForElement.js":
/*!************************************!*\
  !*** ./store/getToolForElement.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, name) {
  return _index.state.tools.find(function (tool) {
    return tool.element === element && tool.name === name;
  });
};

var _index = __webpack_require__(/*! ./index.js */ "./store/index.js");

/***/ }),

/***/ "./store/getToolsWithDataForElement.js":
/*!*********************************************!*\
  !*** ./store/getToolsWithDataForElement.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, tools) {
  return tools.filter(function (tool) {
    var toolState = (0, _toolState.getToolState)(element, tool.name);

    return toolState && toolState.data.length > 0;
  });
};

var _toolState = __webpack_require__(/*! ./../stateManagement/toolState.js */ "./stateManagement/toolState.js");

/***/ }),

/***/ "./store/getToolsWithMoveableHandles.js":
/*!**********************************************!*\
  !*** ./store/getToolsWithMoveableHandles.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, tools, coords) {
  return tools.filter(function (tool) {
    var toolState = (0, _toolState.getToolState)(element, tool.name);

    for (var i = 0; i < toolState.data.length; i++) {
      if ((0, _getHandleNearImagePoint2.default)(element, toolState.data[i].handles, coords, _index.state.clickProximity) !== undefined) {
        return true;
      }
    }

    return false;
  });
};

var _index = __webpack_require__(/*! ./index.js */ "./store/index.js");

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _getHandleNearImagePoint = __webpack_require__(/*! ../manipulators/getHandleNearImagePoint.js */ "./manipulators/getHandleNearImagePoint.js");

var _getHandleNearImagePoint2 = _interopRequireDefault(_getHandleNearImagePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutations = exports.setters = exports.getters = exports.state = undefined;

var _brushStore = __webpack_require__(/*! ./brushStore.js */ "./store/brushStore.js");

var _brushStore2 = _interopRequireDefault(_brushStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = exports.state = {
  isToolLocked: false,
  tools: [],
  clickProximity: 6,
  mousePositionImage: {},
  enabledElements: []
};

var getters = exports.getters = {
  mouseTools: function mouseTools() {
    return state.tools.filter(function (tool) {
      return tool.supportedInteractionTypes.includes('mouse');
    });
  },
  touchTools: function touchTools() {
    return state.tools.filter(function (tool) {
      return tool.supportedInteractionTypes.includes('touch');
    });
  },
  mousePositionImage: function mousePositionImage() {
    return state.mousePositionImage;
  },
  enabledElementByUID: function enabledElementByUID(enabledElementUID) {
    return state.enabledElements.filter(function (enabledElement) {
      return enabledElement.uuid === enabledElementUID;
    });
  }
};

var setters = {
  mousePositionImage: function mousePositionImage(_mousePositionImage) {
    state.mousePositionImage = _mousePositionImage;
  }
};

exports.setters = setters;
var mutations = exports.mutations = {
  SET_IS_TOOL_LOCKED: function SET_IS_TOOL_LOCKED(isLocked) {
    state.isToolLocked = isLocked;
  },
  ADD_ENABLED_ELEMENT: function ADD_ENABLED_ELEMENT(enabledElement) {
    state.enabledElements.push(enabledElement);

    if (_brushStore2.default) {
      _brushStore2.default.mutations.SET_ELEMENT_VISIBLE(enabledElement);
    }
  }
};

exports.default = {
  modules: {
    brush: _brushStore2.default
  },
  state: state,
  getters: getters,
  mutations: mutations
};

/***/ }),

/***/ "./store/setToolMode.js":
/*!******************************!*\
  !*** ./store/setToolMode.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setToolPassiveForElement = exports.setToolPassive = exports.setToolEnabledForElement = exports.setToolEnabled = exports.setToolDisabledForElement = exports.setToolDisabled = exports.setToolActiveForElement = exports.setToolActive = undefined;

var _events = __webpack_require__(/*! ./../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _triggerEvent = __webpack_require__(/*! ./../util/triggerEvent.js */ "./util/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

var _getToolForElement = __webpack_require__(/*! ./getToolForElement.js */ "./store/getToolForElement.js");

var _getToolForElement2 = _interopRequireDefault(_getToolForElement);

var _index = __webpack_require__(/*! ./../store/index.js */ "./store/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets a tool's state to 'active'. Active tools are rendered,
 * respond to user input, and can create new data
 *
 * @export
 * @param {*} element
 * @param {*} toolName
 * @param {*} options
 * @returns
 */
var setToolActiveForElement = setToolModeForElement.bind(null, 'active', null);
var setToolActive = setToolMode.bind(null, 'active', null);

/**
 * Sets a tool's state to 'disabled'. Disabled tools are not rendered,
 * and do not respond to user input
 *
 * @export
 * @param {*} element
 * @param {*} toolName
 * @param {*} options
 * @returns
 */
var setToolDisabledForElement = setToolModeForElement.bind(null, 'disabled', null);
var setToolDisabled = setToolMode.bind(null, 'disabled', null);

/**
 * Sets a tool's state to 'enabled'. Enabled tools are rendered,
 * but do not respond to user input
 *
 * @export
 * @param {*} element
 * @param {*} toolName
 * @param {*} options
 * @returns
 */
var setToolEnabledForElement = setToolModeForElement.bind(null, 'enabled', null);
var setToolEnabled = setToolMode.bind(null, 'enabled', null);

/**
 * Sets a tool's state to 'passive'. Passive tools are rendered and respond to user input,
 * but do not create new measurements or annotations.
 *
 * @export
 * @param {*} element
 * @param {*} toolName
 * @param {*} options
 * @returns
 */
var setToolPassiveForElement = setToolModeForElement.bind(null, 'passive', _events2.default.TOOL_DEACTIVATED);
var setToolPassive = setToolMode.bind(null, 'passive', _events2.default.TOOL_DEACTIVATED);

/**
 * An internal method that helps make sure we change tool state in a consistent
 * way
 *
 * @param {*} element
 * @param {*} toolName
 * @param {*} options
 * @param {*} mode
 * @param {*} changeEvent
 * @returns
 */
function setToolModeForElement(mode, changeEvent, element, toolName, options) {
  var tool = (0, _getToolForElement2.default)(element, toolName);

  if (!tool) {
    console.error('Unable to find tool \'' + toolName + '\' for enabledElement');

    return;
  }

  // Set mode & options
  tool.mode = mode;
  if (options) {
    tool.options = options;
  }

  // Call tool's hook for this event, if one exists
  if (tool[mode + 'Callback']) {
    tool[mode + 'Callback'](element, options);
  }

  // Emit event indicating tool state change
  if (changeEvent) {
    var statusChangeEventData = {
      options: options,
      toolName: toolName,
      type: changeEvent
    };

    (0, _triggerEvent2.default)(element, changeEvent, statusChangeEventData);
  }

  // Trigger Update
  // Todo: don't error out if image hasn't been loaded...
  // Cornerstone.updateImage(element);
}

/**
 * A helper/quick way to set a tool's mode for all canvases
 *
 * @param {*} mode
 * @param {*} changeEvent
 * @param {*} toolName
 * @param {*} options
 */
function setToolMode(mode, changeEvent, toolName, options) {
  _index.state.enabledElements.forEach(function (element) {
    setToolModeForElement(mode, changeEvent, element, toolName, options);
  });
}

exports.setToolActive = setToolActive;
exports.setToolActiveForElement = setToolActiveForElement;
exports.setToolDisabled = setToolDisabled;
exports.setToolDisabledForElement = setToolDisabledForElement;
exports.setToolEnabled = setToolEnabled;
exports.setToolEnabledForElement = setToolEnabledForElement;
exports.setToolPassive = setToolPassive;
exports.setToolPassiveForElement = setToolPassiveForElement;

/***/ }),

/***/ "./store/setToolOptions.js":
/*!*********************************!*\
  !*** ./store/setToolOptions.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setToolOptionsForElement = exports.setToolOptions = undefined;

var _index = __webpack_require__(/*! ./index.js */ "./store/index.js");

var _getToolForElement = __webpack_require__(/*! ./getToolForElement.js */ "./store/getToolForElement.js");

var _getToolForElement2 = _interopRequireDefault(_getToolForElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 *
 * @export
 * @param {*} element
 * @param {string} toolName
 * @param {Object} options
 */
var setToolOptionsForElement = function setToolOptionsForElement(element, toolName, options) {
  var tool = (0, _getToolForElement2.default)(element, toolName);

  if (tool) {
    tool.options = Object.assign({}, tool.options, options);
  }
};

/**
 *
 *
 * @export
 * @param {string} toolName
 * @param {Object} options
 */
var setToolOptions = function setToolOptions(toolName, options) {
  _index.state.enabledElements.forEach(function (element) {
    setToolOptionsForElement(element, options);
  });
};

exports.setToolOptions = setToolOptions;
exports.setToolOptionsForElement = setToolOptionsForElement;

/***/ }),

/***/ "./synchronization/Synchronizer.js":
/*!*****************************************!*\
  !*** ./synchronization/Synchronizer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _convertToVector = __webpack_require__(/*! ../util/convertToVector3.js */ "./util/convertToVector3.js");

var _convertToVector2 = _interopRequireDefault(_convertToVector);

var _toolOptions = __webpack_require__(/*! ../toolOptions.js */ "./toolOptions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unique(array) {
  return array.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}

// This object is responsible for synchronizing target elements when an event fires on a source
// Element
// @param event can contain more than one event, separated by a space
// TODO - > ES6 class syntax?
function Synchronizer(event, handler) {
  var cornerstone = _externalModules2.default.cornerstone;
  var that = this;
  var sourceElements = []; // Source elements fire the events we want to synchronize to
  var targetElements = []; // Target elements we want to synchronize to source elements

  var ignoreFiredEvents = false;
  var initialData = {};
  var eventHandler = handler;

  this.setHandler = function (handler) {
    eventHandler = handler;
  };

  this.getHandler = function () {
    return eventHandler;
  };

  this.getDistances = function () {
    if (!sourceElements.length || !targetElements.length) {
      return;
    }

    initialData.distances = {};
    initialData.imageIds = {
      sourceElements: [],
      targetElements: []
    };

    sourceElements.forEach(function (sourceElement) {
      var sourceEnabledElement = cornerstone.getEnabledElement(sourceElement);

      if (!sourceEnabledElement || !sourceEnabledElement.image) {
        return;
      }

      var sourceImageId = sourceEnabledElement.image.imageId;
      var sourceImagePlane = cornerstone.metaData.get('imagePlaneModule', sourceImageId);

      if (!sourceImagePlane || !sourceImagePlane.imagePositionPatient) {
        return;
      }

      var sourceImagePosition = (0, _convertToVector2.default)(sourceImagePlane.imagePositionPatient);

      if (initialData.hasOwnProperty(sourceEnabledElement)) {
        return;
      }
      initialData.distances[sourceImageId] = {};

      initialData.imageIds.sourceElements.push(sourceImageId);

      targetElements.forEach(function (targetElement) {
        var targetEnabledElement = cornerstone.getEnabledElement(targetElement);

        if (!targetEnabledElement || !targetEnabledElement.image) {
          return;
        }

        var targetImageId = targetEnabledElement.image.imageId;

        initialData.imageIds.targetElements.push(targetImageId);

        if (sourceElement === targetElement) {
          return;
        }

        if (sourceImageId === targetImageId) {
          return;
        }

        if (initialData.distances[sourceImageId].hasOwnProperty(targetImageId)) {
          return;
        }

        var targetImagePlane = cornerstone.metaData.get('imagePlaneModule', targetImageId);

        if (!targetImagePlane || !targetImagePlane.imagePositionPatient) {
          return;
        }

        var targetImagePosition = (0, _convertToVector2.default)(targetImagePlane.imagePositionPatient);

        initialData.distances[sourceImageId][targetImageId] = targetImagePosition.clone().sub(sourceImagePosition);
      });

      if (!Object.keys(initialData.distances[sourceImageId]).length) {
        delete initialData.distances[sourceImageId];
      }
    });
  };

  function fireEvent(sourceElement, eventData) {
    // Broadcast an event that something changed
    if (!sourceElements.length || !targetElements.length) {
      return;
    }

    ignoreFiredEvents = true;
    targetElements.forEach(function (targetElement) {
      var targetIndex = targetElements.indexOf(targetElement);

      if (targetIndex === -1) {
        return;
      }

      var targetImageId = initialData.imageIds.targetElements[targetIndex];
      var sourceIndex = sourceElements.indexOf(sourceElement);

      if (sourceIndex === -1) {
        return;
      }

      var sourceImageId = initialData.imageIds.sourceElements[sourceIndex];

      var positionDifference = void 0;

      if (sourceImageId === targetImageId) {
        positionDifference = 0;
      } else if (initialData.distances[sourceImageId] !== undefined) {
        positionDifference = initialData.distances[sourceImageId][targetImageId];
      }

      eventHandler(that, sourceElement, targetElement, eventData, positionDifference);
    });
    ignoreFiredEvents = false;
  }

  function onEvent(e) {
    var eventData = e.detail;

    if (ignoreFiredEvents === true) {
      return;
    }

    fireEvent(e.currentTarget, eventData);
  }

  // Adds an element as a source
  this.addSource = function (element) {
    // Return if this element was previously added
    var index = sourceElements.indexOf(element);

    if (index !== -1) {
      return;
    }

    // Add to our list of enabled elements
    sourceElements.push(element);

    // Subscribe to the event
    event.split(' ').forEach(function (oneEvent) {
      element.addEventListener(oneEvent, onEvent);
    });

    // Update the initial distances between elements
    that.getDistances();

    that.updateDisableHandlers();
  };

  // Adds an element as a target
  this.addTarget = function (element) {
    // Return if this element was previously added
    var index = targetElements.indexOf(element);

    if (index !== -1) {
      return;
    }

    // Add to our list of enabled elements
    targetElements.push(element);

    // Update the initial distances between elements
    that.getDistances();

    // Invoke the handler for this new target element
    eventHandler(that, element, element, 0);

    that.updateDisableHandlers();
  };

  // Adds an element as both a source and a target
  this.add = function (element) {
    that.addSource(element);
    that.addTarget(element);
  };

  // Removes an element as a source
  this.removeSource = function (element) {
    // Find the index of this element
    var index = sourceElements.indexOf(element);

    if (index === -1) {
      return;
    }

    // Remove this element from the array
    sourceElements.splice(index, 1);

    // Stop listening for the event
    event.split(' ').forEach(function (oneEvent) {
      element.removeEventListener(oneEvent, onEvent);
    });

    // Update the initial distances between elements
    that.getDistances();

    // Update everyone listening for events
    fireEvent(element);
    that.updateDisableHandlers();
  };

  // Removes an element as a target
  this.removeTarget = function (element) {
    // Find the index of this element
    var index = targetElements.indexOf(element);

    if (index === -1) {
      return;
    }

    // Remove this element from the array
    targetElements.splice(index, 1);

    // Update the initial distances between elements
    that.getDistances();

    // Invoke the handler for the removed target
    eventHandler(that, element, element, 0);
    that.updateDisableHandlers();
  };

  // Removes an element as both a source and target
  this.remove = function (element) {
    that.removeTarget(element);
    that.removeSource(element);
  };

  // Returns the source elements
  this.getSourceElements = function () {
    return sourceElements;
  };

  // Returns the target elements
  this.getTargetElements = function () {
    return targetElements;
  };

  this.displayImage = function (element, image, viewport) {
    ignoreFiredEvents = true;
    cornerstone.displayImage(element, image, viewport);
    ignoreFiredEvents = false;
  };

  this.setViewport = function (element, viewport) {
    ignoreFiredEvents = true;
    cornerstone.setViewport(element, viewport);
    ignoreFiredEvents = false;
  };

  function disableHandler(e) {
    var element = e.detail.element;

    that.remove(element);
    (0, _toolOptions.clearToolOptionsByElement)(element);
  }

  this.updateDisableHandlers = function () {
    var elements = unique(sourceElements.concat(targetElements));

    elements.forEach(function (element) {
      element.removeEventListener(_events2.default.ELEMENT_DISABLED, disableHandler);
      element.addEventListener(_events2.default.ELEMENT_DISABLED, disableHandler);
    });
  };

  this.destroy = function () {
    var elements = unique(sourceElements.concat(targetElements));

    elements.forEach(function (element) {
      that.remove(element);
    });
  };
}

exports.default = Synchronizer;

/***/ }),

/***/ "./synchronization/panZoomSynchronizer.js":
/*!************************************************!*\
  !*** ./synchronization/panZoomSynchronizer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (synchronizer, sourceElement, targetElement) {

  // Ignore the case where the source and target are the same enabled element
  if (targetElement === sourceElement) {
    return;
  }

  var cornerstone = _externalModules2.default.cornerstone;
  // Get the source and target viewports
  var sourceViewport = cornerstone.getViewport(sourceElement);
  var targetViewport = cornerstone.getViewport(targetElement);

  // Do nothing if the scale and translation are the same
  if (targetViewport.scale === sourceViewport.scale && targetViewport.translation.x === sourceViewport.translation.x && targetViewport.translation.y === sourceViewport.translation.y) {
    return;
  }

  // Scale and/or translation are different, sync them
  targetViewport.scale = sourceViewport.scale;
  targetViewport.translation.x = sourceViewport.translation.x;
  targetViewport.translation.y = sourceViewport.translation.y;
  synchronizer.setViewport(targetElement, targetViewport);
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./synchronization/stackImageIndexSynchronizer.js":
/*!********************************************************!*\
  !*** ./synchronization/stackImageIndexSynchronizer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (synchronizer, sourceElement, targetElement) {

  // Ignore the case where the source and target are the same enabled element
  if (targetElement === sourceElement) {
    return;
  }

  var cornerstone = _externalModules2.default.cornerstone;
  var sourceStackToolDataSource = (0, _toolState.getToolState)(sourceElement, 'stack');
  var sourceStackData = sourceStackToolDataSource.data[0];
  var targetStackToolDataSource = (0, _toolState.getToolState)(targetElement, 'stack');
  var targetStackData = targetStackToolDataSource.data[0];

  var newImageIdIndex = sourceStackData.currentImageIdIndex;

  // Clamp the index
  newImageIdIndex = (0, _clip2.default)(newImageIdIndex, 0, targetStackData.imageIds.length - 1);

  // Do nothing if the index has not changed
  if (newImageIdIndex === targetStackData.currentImageIdIndex) {
    return;
  }

  var startLoadingHandler = _loadHandlerManager2.default.getStartLoadHandler();
  var endLoadingHandler = _loadHandlerManager2.default.getEndLoadHandler();
  var errorLoadingHandler = _loadHandlerManager2.default.getErrorLoadingHandler();

  if (startLoadingHandler) {
    startLoadingHandler(targetElement);
  }

  var loader = void 0;

  if (targetStackData.preventCache === true) {
    loader = cornerstone.loadImage(targetStackData.imageIds[newImageIdIndex]);
  } else {
    loader = cornerstone.loadAndCacheImage(targetStackData.imageIds[newImageIdIndex]);
  }

  loader.then(function (image) {
    var viewport = cornerstone.getViewport(targetElement);

    targetStackData.currentImageIdIndex = newImageIdIndex;
    synchronizer.displayImage(targetElement, image, viewport);
    if (endLoadingHandler) {
      endLoadingHandler(targetElement, image);
    }
  }, function (error) {
    var imageId = targetStackData.imageIds[newImageIdIndex];

    if (errorLoadingHandler) {
      errorLoadingHandler(targetElement, imageId, error);
    }
  });
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _loadHandlerManager = __webpack_require__(/*! ../stateManagement/loadHandlerManager.js */ "./stateManagement/loadHandlerManager.js");

var _loadHandlerManager2 = _interopRequireDefault(_loadHandlerManager);

var _clip = __webpack_require__(/*! ../util/clip.js */ "./util/clip.js");

var _clip2 = _interopRequireDefault(_clip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./synchronization/stackImagePositionOffsetSynchronizer.js":
/*!*****************************************************************!*\
  !*** ./synchronization/stackImagePositionOffsetSynchronizer.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (synchronizer, sourceElement, targetElement, eventData, positionDifference) {

  // Ignore the case where the source and target are the same enabled element
  if (targetElement === sourceElement) {
    return;
  }

  var cornerstone = _externalModules2.default.cornerstone;
  var sourceEnabledElement = cornerstone.getEnabledElement(sourceElement);
  var sourceImagePlane = cornerstone.metaData.get('imagePlaneModule', sourceEnabledElement.image.imageId);

  if (sourceImagePlane === undefined || sourceImagePlane.imagePositionPatient === undefined) {
    return;
  }

  var sourceImagePosition = (0, _convertToVector2.default)(sourceImagePlane.imagePositionPatient);

  var stackToolDataSource = (0, _toolState.getToolState)(targetElement, 'stack');
  var stackData = stackToolDataSource.data[0];

  var minDistance = Number.MAX_VALUE;
  var newImageIdIndex = -1;

  if (!positionDifference) {
    return;
  }

  var finalPosition = sourceImagePosition.clone().add(positionDifference);

  stackData.imageIds.forEach(function (imageId, index) {
    var imagePlane = cornerstone.metaData.get('imagePlaneModule', imageId);

    if (imagePlane === undefined || imagePlane.imagePositionPatient === undefined) {
      return;
    }

    var imagePosition = (0, _convertToVector2.default)(imagePlane.imagePositionPatient);
    var distance = finalPosition.distanceToSquared(imagePosition);

    if (distance < minDistance) {
      minDistance = distance;
      newImageIdIndex = index;
    }
  });

  if (newImageIdIndex === stackData.currentImageIdIndex || newImageIdIndex === -1) {
    return;
  }

  var startLoadingHandler = _loadHandlerManager2.default.getStartLoadHandler();
  var endLoadingHandler = _loadHandlerManager2.default.getEndLoadHandler();
  var errorLoadingHandler = _loadHandlerManager2.default.getErrorLoadingHandler();

  stackData.currentImageIdIndex = newImageIdIndex;
  var newImageId = stackData.imageIds[newImageIdIndex];

  if (startLoadingHandler) {
    startLoadingHandler(targetElement);
  }

  var loader = void 0;

  if (stackData.preventCache === true) {
    loader = cornerstone.loadImage(newImageId);
  } else {
    loader = cornerstone.loadAndCacheImage(newImageId);
  }

  loader.then(function (image) {
    var viewport = cornerstone.getViewport(targetElement);

    if (stackData.currentImageIdIndex !== newImageIdIndex) {
      return;
    }

    synchronizer.displayImage(targetElement, image, viewport);
    if (endLoadingHandler) {
      endLoadingHandler(targetElement, image);
    }
  }, function (error) {
    var imageId = stackData.imageIds[newImageIdIndex];

    if (errorLoadingHandler) {
      errorLoadingHandler(targetElement, imageId, error);
    }
  });
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _loadHandlerManager = __webpack_require__(/*! ../stateManagement/loadHandlerManager.js */ "./stateManagement/loadHandlerManager.js");

var _loadHandlerManager2 = _interopRequireDefault(_loadHandlerManager);

var _convertToVector = __webpack_require__(/*! ../util/convertToVector3.js */ "./util/convertToVector3.js");

var _convertToVector2 = _interopRequireDefault(_convertToVector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./synchronization/stackImagePositionSynchronizer.js":
/*!***********************************************************!*\
  !*** ./synchronization/stackImagePositionSynchronizer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (synchronizer, sourceElement, targetElement) {

  // Ignore the case where the source and target are the same enabled element
  if (targetElement === sourceElement) {
    return;
  }

  var cornerstone = _externalModules2.default.cornerstone;
  var sourceImage = cornerstone.getEnabledElement(sourceElement).image;
  var sourceImagePlane = cornerstone.metaData.get('imagePlaneModule', sourceImage.imageId);

  if (sourceImagePlane === undefined || sourceImagePlane.imagePositionPatient === undefined) {
    // Console.log('No position found for image ' + sourceImage.imageId);

    return;
  }

  var sourceImagePosition = (0, _convertToVector2.default)(sourceImagePlane.imagePositionPatient);
  var stackToolDataSource = (0, _toolState.getToolState)(targetElement, 'stack');
  var stackData = stackToolDataSource.data[0];

  var minDistance = Number.MAX_VALUE;
  var newImageIdIndex = -1;

  stackData.imageIds.forEach(function (imageId, index) {
    var imagePlane = cornerstone.metaData.get('imagePlaneModule', imageId);

    if (imagePlane === undefined || imagePlane.imagePositionPatient === undefined) {
      // Console.log('No position found for image ' + imageId);

      return;
    }

    var imagePosition = (0, _convertToVector2.default)(imagePlane.imagePositionPatient);
    var distance = imagePosition.distanceToSquared(sourceImagePosition);
    // Console.log(index + '=' + distance);

    if (distance < minDistance) {
      minDistance = distance;
      newImageIdIndex = index;
    }
  });

  if (newImageIdIndex === stackData.currentImageIdIndex) {
    return;
  }

  var startLoadingHandler = _loadHandlerManager2.default.getStartLoadHandler();
  var endLoadingHandler = _loadHandlerManager2.default.getEndLoadHandler();
  var errorLoadingHandler = _loadHandlerManager2.default.getErrorLoadingHandler();

  stackData.currentImageIdIndex = newImageIdIndex;
  var newImageId = stackData.imageIds[newImageIdIndex];

  if (startLoadingHandler) {
    startLoadingHandler(targetElement);
  }

  if (newImageIdIndex !== -1) {
    var loader = void 0;

    if (stackData.preventCache === true) {
      loader = cornerstone.loadImage(newImageId);
    } else {
      loader = cornerstone.loadAndCacheImage(newImageId);
    }

    loader.then(function (image) {
      var viewport = cornerstone.getViewport(targetElement);

      if (stackData.currentImageIdIndex !== newImageIdIndex) {
        return;
      }

      synchronizer.displayImage(targetElement, image, viewport);
      if (endLoadingHandler) {
        endLoadingHandler(targetElement, image);
      }
    }, function (error) {
      var imageId = stackData.imageIds[newImageIdIndex];

      if (errorLoadingHandler) {
        errorLoadingHandler(targetElement, imageId, error);
      }
    });
  }
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _loadHandlerManager = __webpack_require__(/*! ../stateManagement/loadHandlerManager.js */ "./stateManagement/loadHandlerManager.js");

var _loadHandlerManager2 = _interopRequireDefault(_loadHandlerManager);

var _convertToVector = __webpack_require__(/*! ../util/convertToVector3.js */ "./util/convertToVector3.js");

var _convertToVector2 = _interopRequireDefault(_convertToVector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./synchronization/stackScrollSynchronizer.js":
/*!****************************************************!*\
  !*** ./synchronization/stackScrollSynchronizer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (synchronizer, sourceElement, targetElement, eventData) {
  // If the target and source are the same, stop
  if (sourceElement === targetElement) {
    return;
  }

  // If there is no event, or direction is 0, stop
  if (!eventData || !eventData.direction) {
    return;
  }

  var cornerstone = _externalModules2.default.cornerstone;
  // Get the stack of the target viewport
  var stackToolDataSource = (0, _toolState.getToolState)(targetElement, 'stack');
  var stackData = stackToolDataSource.data[0];

  // Get the new index for the stack
  var newImageIdIndex = stackData.currentImageIdIndex + eventData.direction;

  // Ensure the index does not exceed the bounds of the stack
  newImageIdIndex = (0, _clip2.default)(newImageIdIndex, 0, stackData.imageIds.length - 1);

  // If the index has not changed, stop here
  if (stackData.currentImageIdIndex === newImageIdIndex) {
    return;
  }

  var startLoadingHandler = _loadHandlerManager2.default.getStartLoadHandler();
  var endLoadingHandler = _loadHandlerManager2.default.getEndLoadHandler();
  var errorLoadingHandler = _loadHandlerManager2.default.getErrorLoadingHandler();

  stackData.currentImageIdIndex = newImageIdIndex;
  var newImageId = stackData.imageIds[newImageIdIndex];

  if (startLoadingHandler) {
    startLoadingHandler(targetElement);
  }

  var loader = void 0;

  if (stackData.preventCache === true) {
    loader = cornerstone.loadImage(newImageId);
  } else {
    loader = cornerstone.loadAndCacheImage(newImageId);
  }

  loader.then(function (image) {
    var viewport = cornerstone.getViewport(targetElement);

    if (stackData.currentImageIdIndex !== newImageIdIndex) {
      return;
    }

    synchronizer.displayImage(targetElement, image, viewport);
    if (endLoadingHandler) {
      endLoadingHandler(targetElement, image);
    }
  }, function (error) {
    var imageId = stackData.imageIds[newImageIdIndex];

    if (errorLoadingHandler) {
      errorLoadingHandler(targetElement, imageId, error);
    }
  });
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _loadHandlerManager = __webpack_require__(/*! ../stateManagement/loadHandlerManager.js */ "./stateManagement/loadHandlerManager.js");

var _loadHandlerManager2 = _interopRequireDefault(_loadHandlerManager);

var _clip = __webpack_require__(/*! ../util/clip.js */ "./util/clip.js");

var _clip2 = _interopRequireDefault(_clip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./synchronization/updateImageSynchronizer.js":
/*!****************************************************!*\
  !*** ./synchronization/updateImageSynchronizer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (synchronizer, sourceElement, targetElement) {

  // Ignore the case where the source and target are the same enabled element
  if (targetElement === sourceElement) {
    return;
  }

  _externalModules2.default.cornerstone.updateImage(targetElement);
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./synchronization/wwwcSynchronizer.js":
/*!*********************************************!*\
  !*** ./synchronization/wwwcSynchronizer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (synchronizer, sourceElement, targetElement) {

  // Ignore the case where the source and target are the same enabled element
  if (targetElement === sourceElement) {
    return;
  }

  var cornerstone = _externalModules2.default.cornerstone;
  // Get the source and target viewports
  var sourceViewport = cornerstone.getViewport(sourceElement);
  var targetViewport = cornerstone.getViewport(targetElement);

  // Do nothing if the ww/wc already match
  if (targetViewport.voi.windowWidth === sourceViewport.voi.windowWidth && targetViewport.voi.windowCenter === sourceViewport.voi.windowCenter && targetViewport.invert === sourceViewport.invert) {
    return;
  }

  // Www/wc are different, sync them
  targetViewport.voi.windowWidth = sourceViewport.voi.windowWidth;
  targetViewport.voi.windowCenter = sourceViewport.voi.windowCenter;
  targetViewport.invert = sourceViewport.invert;
  synchronizer.setViewport(targetElement, targetViewport);
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./toolOptions.js":
/*!************************!*\
  !*** ./toolOptions.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var elementToolOptions = {};

/**
 * Retrieve the options object associated with a particular toolType and element
 *
 * @param {string} toolType Tool type identifier of the target options object
 * @param {HTMLElement} element Element of the target options object
 *
 * @return {Object} Target options object (empty if not yet set)
 */
function getToolOptions(toolType, element) {
  if (!elementToolOptions[toolType]) {
    return {};
  }

  var toolOptions = elementToolOptions[toolType];
  var optionsObject = toolOptions.find(function (toolOptionObject) {
    return toolOptionObject.element === element;
  });

  if (!optionsObject) {
    return {};
  }

  return optionsObject.options;
}

/**
 * Set the options object associated with a particular toolType and element
 *
 * @param {string} toolType Tool type identifier of the target options object
 * @param {HTMLElement} element Element of the target options object
 * @param {Object} options Options object to store at target
 *
 * @return {void}
 */
function setToolOptions(toolType, element, options) {
  if (!elementToolOptions[toolType]) {
    elementToolOptions[toolType] = [{
      element: element,
      options: options
    }];

    return;
  }

  var toolOptions = elementToolOptions[toolType];
  var index = toolOptions.findIndex(function (toolOptionObject) {
    return toolOptionObject.element === element;
  });

  if (index === -1) {
    elementToolOptions[toolType].push({
      element: element,
      options: options
    });
  } else {
    var elementOptions = elementToolOptions[toolType][index].options || {};

    elementToolOptions[toolType][index].options = Object.assign(elementOptions, options);
  }
}

/**
 * Clear the options object associated with a particular toolType and element
 *
 * @param {string} toolType Tool type identifier of the target options object
 * @param {HTMLElement} element Element of the target options object
 *
 * @return {void}
 */
function clearToolOptions(toolType, element) {
  var toolOptions = elementToolOptions[toolType];

  if (toolOptions) {
    elementToolOptions[toolType] = toolOptions.filter(function (toolOptionObject) {
      return toolOptionObject.element !== element;
    });
  }
}

/**
 * Clear the options objects associated with a particular toolType
 *
 * @param {string} toolType Tool type identifier of the target options objects
 *
 * @return {void}
 */
function clearToolOptionsByToolType(toolType) {
  delete elementToolOptions[toolType];
}

/**
 * Clear the options objects associated with a particular element
 *
 * @param {HTMLElement} element Element of the target options objects
 *
 * @return {void}
 */
function clearToolOptionsByElement(element) {
  for (var toolType in elementToolOptions) {
    elementToolOptions[toolType] = elementToolOptions[toolType].filter(function (toolOptionObject) {
      return toolOptionObject.element !== element;
    });
  }
}

exports.getToolOptions = getToolOptions;
exports.setToolOptions = setToolOptions;
exports.clearToolOptions = clearToolOptions;
exports.clearToolOptionsByToolType = clearToolOptionsByToolType;
exports.clearToolOptionsByElement = clearToolOptionsByElement;

/***/ }),

/***/ "./tools/AngleTool.js":
/*!****************************!*\
  !*** ./tools/AngleTool.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseAnnotationTool2 = __webpack_require__(/*! ../base/BaseAnnotationTool.js */ "./base/BaseAnnotationTool.js");

var _BaseAnnotationTool3 = _interopRequireDefault(_BaseAnnotationTool2);

var _textStyle = __webpack_require__(/*! ../stateManagement/textStyle.js */ "./stateManagement/textStyle.js");

var _textStyle2 = _interopRequireDefault(_textStyle);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _toolStyle = __webpack_require__(/*! ../stateManagement/toolStyle.js */ "./stateManagement/toolStyle.js");

var _toolStyle2 = _interopRequireDefault(_toolStyle);

var _toolColors = __webpack_require__(/*! ../stateManagement/toolColors.js */ "./stateManagement/toolColors.js");

var _toolColors2 = _interopRequireDefault(_toolColors);

var _drawHandles = __webpack_require__(/*! ../manipulators/drawHandles.js */ "./manipulators/drawHandles.js");

var _drawHandles2 = _interopRequireDefault(_drawHandles);

var _moveNewHandle = __webpack_require__(/*! ../manipulators/moveNewHandle.js */ "./manipulators/moveNewHandle.js");

var _moveNewHandle2 = _interopRequireDefault(_moveNewHandle);

var _moveNewHandleTouch = __webpack_require__(/*! ../manipulators/moveNewHandleTouch.js */ "./manipulators/moveNewHandleTouch.js");

var _moveNewHandleTouch2 = _interopRequireDefault(_moveNewHandleTouch);

var _anyHandlesOutsideImage = __webpack_require__(/*! ../manipulators/anyHandlesOutsideImage.js */ "./manipulators/anyHandlesOutsideImage.js");

var _anyHandlesOutsideImage2 = _interopRequireDefault(_anyHandlesOutsideImage);

var _drawing = __webpack_require__(/*! ../util/drawing.js */ "./util/drawing.js");

var _drawLinkedTextBox = __webpack_require__(/*! ../util/drawLinkedTextBox.js */ "./util/drawLinkedTextBox.js");

var _drawLinkedTextBox2 = _interopRequireDefault(_drawLinkedTextBox);

var _lineSegDistance = __webpack_require__(/*! ../util/lineSegDistance.js */ "./util/lineSegDistance.js");

var _lineSegDistance2 = _interopRequireDefault(_lineSegDistance);

var _roundToDecimal = __webpack_require__(/*! ../util/roundToDecimal.js */ "./util/roundToDecimal.js");

var _roundToDecimal2 = _interopRequireDefault(_roundToDecimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-loop-func: 0 */ // --> OFF
/* eslint class-methods-use-this: 0 */ // --> OFF

// State

// Manipulators

// Drawing


var AngleTool = function (_BaseAnnotationTool) {
  _inherits(AngleTool, _BaseAnnotationTool);

  function AngleTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Angle';

    _classCallCheck(this, AngleTool);

    var _this = _possibleConstructorReturn(this, (AngleTool.__proto__ || Object.getPrototypeOf(AngleTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse', 'touch']
    }));

    _this.preventNewMeasurement = false;
    return _this;
  }

  /**
   * Create the measurement data for this tool with the end handle activated
   *
   * @param {*} eventData
   * @returns
   */


  _createClass(AngleTool, [{
    key: 'createNewMeasurement',
    value: function createNewMeasurement(eventData) {
      // Create the measurement data for this tool with the end handle activated
      return {
        visible: true,
        active: true,
        color: undefined,
        handles: {
          start: {
            x: eventData.currentPoints.image.x,
            y: eventData.currentPoints.image.y,
            highlight: true,
            active: false
          },
          middle: {
            x: eventData.currentPoints.image.x,
            y: eventData.currentPoints.image.y,
            highlight: true,
            active: true
          },
          end: {
            x: eventData.currentPoints.image.x,
            y: eventData.currentPoints.image.y,
            highlight: true,
            active: false
          },
          textBox: {
            active: false,
            hasMoved: false,
            movesIndependently: false,
            drawnIndependently: true,
            allowedOutsideImage: true,
            hasBoundingBox: true
          }
        }
      };
    }

    /**
     *
     *
     * @param {*} element
     * @param {*} data
     * @param {*} coords
     * @returns
     */

  }, {
    key: 'pointNearTool',
    value: function pointNearTool(element, data, coords) {
      if (data.visible === false) {
        return false;
      }

      return (0, _lineSegDistance2.default)(element, data.handles.start, data.handles.middle, coords) < 25 || (0, _lineSegDistance2.default)(element, data.handles.middle, data.handles.end, coords) < 25;
    }

    /**
     *
     *
     * @param {*} evt
     * @returns
     */

  }, {
    key: 'renderToolData',
    value: function renderToolData(evt) {
      var eventData = evt.detail;
      var enabledElement = eventData.enabledElement;
      // If we have no toolData for this element, return immediately as there is nothing to do
      var toolData = (0, _toolState.getToolState)(evt.currentTarget, this.name);

      if (!toolData) {
        return;
      }

      // We have tool data for this element - iterate over each one and draw it
      var context = (0, _drawing.getNewContext)(eventData.canvasContext.canvas);

      var lineWidth = _toolStyle2.default.getToolWidth();
      var font = _textStyle2.default.getFont();
      var config = this.configuration;

      var _loop = function _loop(i) {
        var data = toolData.data[i];

        if (data.visible === false) {
          return 'continue';
        }

        (0, _drawing.draw)(context, function (context) {
          (0, _drawing.setShadow)(context, config);

          // Differentiate the color of activation tool
          var color = _toolColors2.default.getColorIfActive(data);

          var handleStartCanvas = _externalModules2.default.cornerstone.pixelToCanvas(eventData.element, data.handles.start);
          var handleMiddleCanvas = _externalModules2.default.cornerstone.pixelToCanvas(eventData.element, data.handles.middle);

          (0, _drawing.drawJoinedLines)(context, eventData.element, data.handles.start, [data.handles.middle, data.handles.end], { color: color });

          // Draw the handles
          var handleOptions = {
            drawHandlesIfActive: config && config.drawHandlesOnHover
          };

          (0, _drawHandles2.default)(context, eventData, data.handles, color, handleOptions);

          // Draw the text
          context.fillStyle = color;

          // Default to isotropic pixel size, update suffix to reflect this
          var columnPixelSpacing = eventData.image.columnPixelSpacing || 1;
          var rowPixelSpacing = eventData.image.rowPixelSpacing || 1;

          var sideA = {
            x: (data.handles.middle.x - data.handles.start.x) * columnPixelSpacing,
            y: (data.handles.middle.y - data.handles.start.y) * rowPixelSpacing
          };

          var sideB = {
            x: (data.handles.end.x - data.handles.middle.x) * columnPixelSpacing,
            y: (data.handles.end.y - data.handles.middle.y) * rowPixelSpacing
          };

          var sideC = {
            x: (data.handles.end.x - data.handles.start.x) * columnPixelSpacing,
            y: (data.handles.end.y - data.handles.start.y) * rowPixelSpacing
          };

          var sideALength = length(sideA);
          var sideBLength = length(sideB);
          var sideCLength = length(sideC);

          // Cosine law
          var angle = Math.acos((Math.pow(sideALength, 2) + Math.pow(sideBLength, 2) - Math.pow(sideCLength, 2)) / (2 * sideALength * sideBLength));

          angle *= 180 / Math.PI;

          data.rAngle = (0, _roundToDecimal2.default)(angle, 2);

          if (data.rAngle) {
            var text = textBoxText(data, eventData.image.rowPixelSpacing, eventData.image.columnPixelSpacing);

            var distance = 15;

            var textCoords = void 0;

            if (!data.handles.textBox.hasMoved) {
              textCoords = {
                x: handleMiddleCanvas.x,
                y: handleMiddleCanvas.y
              };

              context.font = font;
              var textWidth = context.measureText(text).width;

              if (handleMiddleCanvas.x < handleStartCanvas.x) {
                textCoords.x -= distance + textWidth + 10;
              } else {
                textCoords.x += distance;
              }

              var transform = _externalModules2.default.cornerstone.internal.getTransform(enabledElement);

              transform.invert();

              var coords = transform.transformPoint(textCoords.x, textCoords.y);

              data.handles.textBox.x = coords.x;
              data.handles.textBox.y = coords.y;
            }

            (0, _drawLinkedTextBox2.default)(context, eventData.element, data.handles.textBox, text, data.handles, textBoxAnchorPoints, color, lineWidth, 0, true);
          }
        });
      };

      for (var i = 0; i < toolData.data.length; i++) {
        var _ret = _loop(i);

        if (_ret === 'continue') continue;
      }

      function textBoxText(data, rowPixelSpacing, columnPixelSpacing) {
        var suffix = !rowPixelSpacing || !columnPixelSpacing ? ' (isotropic)' : '';
        var str = '00B0'; // Degrees symbol

        return data.rAngle.toString() + String.fromCharCode(parseInt(str, 16)) + suffix;
      }

      function textBoxAnchorPoints(handles) {
        return [handles.start, handles.middle, handles.end];
      }
    }
  }, {
    key: 'addNewMeasurement',
    value: function addNewMeasurement(evt, interactionType) {
      var _this2 = this;

      if (this.preventNewMeasurement) {
        return;
      }

      this.preventNewMeasurement = true;
      evt.preventDefault();
      evt.stopPropagation();

      var eventData = evt.detail;
      var measurementData = this.createNewMeasurement(eventData);
      var element = evt.detail.element;
      // MoveHandle, moveNewHandle, moveHandleTouch, and moveNewHandleTouch
      // All take the same parameters, but register events differentlIy.
      var handleMover = interactionType === 'mouse' ? _moveNewHandle2.default : _moveNewHandleTouch2.default;

      // Associate this data with this imageId so we can render it and manipulate it
      (0, _toolState.addToolState)(element, this.name, measurementData);
      _externalModules2.default.cornerstone.updateImage(element);

      // Step 1, create start and second middle
      handleMover(eventData, this.name, measurementData, measurementData.handles.middle, function () {
        measurementData.active = false;
        measurementData.handles.end.active = true;

        // TODO: `anyHandlesOutsideImage` deletion should be a config setting
        // TODO: Maybe globally? Mayber per tool?
        // If any handle is outside image, delete and abort
        if ((0, _anyHandlesOutsideImage2.default)(eventData, measurementData.handles)) {
          // Delete the measurement
          (0, _toolState.removeToolState)(element, _this2.name, measurementData);
          _this2.preventNewMeasurement = false;
        }

        _externalModules2.default.cornerstone.updateImage(element);
        // Step 2, place middle handle and drag end handle
        handleMover(eventData, _this2.name, measurementData, measurementData.handles.end, function () {
          measurementData.active = false;
          if ((0, _anyHandlesOutsideImage2.default)(eventData, measurementData.handles)) {
            // Delete the measurement
            (0, _toolState.removeToolState)(element, _this2.name, measurementData);
          }
          _this2.preventNewMeasurement = false;
          _externalModules2.default.cornerstone.updateImage(element);
        });
      });
    }
  }]);

  return AngleTool;
}(_BaseAnnotationTool3.default);

exports.default = AngleTool;


function length(vector) {
  return Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
}

/***/ }),

/***/ "./tools/ArrowAnnotateTool.js":
/*!************************************!*\
  !*** ./tools/ArrowAnnotateTool.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseAnnotationTool2 = __webpack_require__(/*! ../base/BaseAnnotationTool.js */ "./base/BaseAnnotationTool.js");

var _BaseAnnotationTool3 = _interopRequireDefault(_BaseAnnotationTool2);

var _toolStyle = __webpack_require__(/*! ../stateManagement/toolStyle.js */ "./stateManagement/toolStyle.js");

var _toolStyle2 = _interopRequireDefault(_toolStyle);

var _textStyle = __webpack_require__(/*! ../stateManagement/textStyle.js */ "./stateManagement/textStyle.js");

var _textStyle2 = _interopRequireDefault(_textStyle);

var _toolColors = __webpack_require__(/*! ../stateManagement/toolColors.js */ "./stateManagement/toolColors.js");

var _toolColors2 = _interopRequireDefault(_toolColors);

var _drawHandles = __webpack_require__(/*! ../manipulators/drawHandles.js */ "./manipulators/drawHandles.js");

var _drawHandles2 = _interopRequireDefault(_drawHandles);

var _drawArrow = __webpack_require__(/*! ../util/drawArrow.js */ "./util/drawArrow.js");

var _drawArrow2 = _interopRequireDefault(_drawArrow);

var _moveNewHandle = __webpack_require__(/*! ../manipulators/moveNewHandle.js */ "./manipulators/moveNewHandle.js");

var _moveNewHandle2 = _interopRequireDefault(_moveNewHandle);

var _moveNewHandleTouch = __webpack_require__(/*! ../manipulators/moveNewHandleTouch.js */ "./manipulators/moveNewHandleTouch.js");

var _moveNewHandleTouch2 = _interopRequireDefault(_moveNewHandleTouch);

var _anyHandlesOutsideImage = __webpack_require__(/*! ../manipulators/anyHandlesOutsideImage.js */ "./manipulators/anyHandlesOutsideImage.js");

var _anyHandlesOutsideImage2 = _interopRequireDefault(_anyHandlesOutsideImage);

var _pointInsideBoundingBox = __webpack_require__(/*! ../util/pointInsideBoundingBox.js */ "./util/pointInsideBoundingBox.js");

var _pointInsideBoundingBox2 = _interopRequireDefault(_pointInsideBoundingBox);

var _drawLinkedTextBox = __webpack_require__(/*! ../util/drawLinkedTextBox.js */ "./util/drawLinkedTextBox.js");

var _drawLinkedTextBox2 = _interopRequireDefault(_drawLinkedTextBox);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _index = __webpack_require__(/*! ../store/index.js */ "./store/index.js");

var _lineSegDistance = __webpack_require__(/*! ../util/lineSegDistance.js */ "./util/lineSegDistance.js");

var _lineSegDistance2 = _interopRequireDefault(_lineSegDistance);

var _drawing = __webpack_require__(/*! ../util/drawing.js */ "./util/drawing.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-loop-func: 0 */ // --> OFF
/* eslint class-methods-use-this: 0 */ // --> OFF
/* eslint no-alert: 0 */ // --> OFF


var ArrowAnnotateTool = function (_BaseAnnotationTool) {
  _inherits(ArrowAnnotateTool, _BaseAnnotationTool);

  function ArrowAnnotateTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ArrowAnnotate';

    _classCallCheck(this, ArrowAnnotateTool);

    var _this = _possibleConstructorReturn(this, (ArrowAnnotateTool.__proto__ || Object.getPrototypeOf(ArrowAnnotateTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse', 'touch'],
      configuration: {
        getTextCallback: getTextCallback,
        changeTextCallback: changeTextCallback,
        drawHandles: false,
        drawHandlesOnHover: true,
        arrowFirst: true
      }
    }));

    _this.preventNewMeasurement = false;
    return _this;
  }

  /**
   * Create the measurement data for this tool with the end handle activated
   *
   * @param {*} evt
   * @returns
   */


  _createClass(ArrowAnnotateTool, [{
    key: 'createNewMeasurement',
    value: function createNewMeasurement(evt) {
      // Create the measurement data for this tool with the end handle activated
      return {
        visible: true,
        active: true,
        color: undefined,
        handles: {
          start: {
            x: evt.detail.currentPoints.image.x,
            y: evt.detail.currentPoints.image.y,
            highlight: true,
            active: false
          },
          end: {
            x: evt.detail.currentPoints.image.x,
            y: evt.detail.currentPoints.image.y,
            highlight: true,
            active: false
          },
          textBox: {
            active: false,
            hasMoved: false,
            movesIndependently: false,
            drawnIndependently: true,
            allowedOutsideImage: true,
            hasBoundingBox: true
          }
        }
      };
    }

    /**
     *
     *
     * @param {*} element
     * @param {*} data
     * @param {*} coords
     * @returns
     */

  }, {
    key: 'pointNearTool',
    value: function pointNearTool(element, data, coords) {
      if (data.visible === false) {
        return false;
      }

      return (0, _lineSegDistance2.default)(element, data.handles.start, data.handles.end, coords) < 25;
    }

    /**
     *
     *
     * @param {*} evt
     * @returns
     */

  }, {
    key: 'renderToolData',
    value: function renderToolData(evt) {
      var _this2 = this;

      var _evt$detail = evt.detail,
          element = _evt$detail.element,
          enabledElement = _evt$detail.enabledElement;

      // If we have no toolData for this element, return immediately as there is nothing to do

      var toolData = (0, _toolState.getToolState)(element, this.name);

      if (!toolData) {
        return;
      }

      // We have tool data for this element - iterate over each one and draw it
      var canvas = evt.detail.canvasContext.canvas;
      var context = (0, _drawing.getNewContext)(canvas);

      var lineWidth = _toolStyle2.default.getToolWidth();
      var font = _textStyle2.default.getFont();

      var _loop = function _loop(i) {
        var data = toolData.data[i];

        if (data.visible === false) {
          return 'continue';
        }

        (0, _drawing.draw)(context, function (context) {
          (0, _drawing.setShadow)(context, _this2.configuration);

          var color = _toolColors2.default.getColorIfActive(data);

          // Draw the arrow
          var handleStartCanvas = _externalModules2.default.cornerstone.pixelToCanvas(element, data.handles.start);
          var handleEndCanvas = _externalModules2.default.cornerstone.pixelToCanvas(element, data.handles.end);

          // Config.arrowFirst = false;
          if (_this2.configuration.arrowFirst) {
            (0, _drawArrow2.default)(context, handleEndCanvas, handleStartCanvas, color, lineWidth);
          } else {
            (0, _drawArrow2.default)(context, handleStartCanvas, handleEndCanvas, color, lineWidth);
          }

          var handleOptions = {
            drawHandlesIfActive: _this2.configuration.drawHandlesOnHover
          };

          if (_this2.configuration.drawHandles) {
            (0, _drawHandles2.default)(context, evt.detail, data.handles, color, handleOptions);
          }

          var text = textBoxText(data);

          // Draw the text
          if (text && text !== '') {
            context.font = font;

            // Calculate the text coordinates.
            var textWidth = context.measureText(text).width + 10;
            var textHeight = _textStyle2.default.getFontSize() + 10;

            var distance = Math.max(textWidth, textHeight) / 2 + 5;

            if (handleEndCanvas.x < handleStartCanvas.x) {
              distance = -distance;
            }

            if (!data.handles.textBox.hasMoved) {
              var textCoords = void 0;

              if (_this2.configuration.arrowFirst) {
                textCoords = {
                  x: handleEndCanvas.x - textWidth / 2 + distance,
                  y: handleEndCanvas.y - textHeight / 2
                };
              } else {
                // If the arrow is at the End position, the text should
                // Be placed near the Start position
                textCoords = {
                  x: handleStartCanvas.x - textWidth / 2 - distance,
                  y: handleStartCanvas.y - textHeight / 2
                };
              }

              var transform = _externalModules2.default.cornerstone.internal.getTransform(enabledElement);

              transform.invert();

              var coords = transform.transformPoint(textCoords.x, textCoords.y);

              data.handles.textBox.x = coords.x;
              data.handles.textBox.y = coords.y;
            }

            (0, _drawLinkedTextBox2.default)(context, element, data.handles.textBox, text, data.handles, textBoxAnchorPoints, color, lineWidth, 0, false);
          }
        });
      };

      for (var i = 0; i < toolData.data.length; i++) {
        var _ret = _loop(i);

        if (_ret === 'continue') continue;
      }

      function textBoxText(data) {
        return data.text;
      }

      function textBoxAnchorPoints(handles) {
        var midpoint = {
          x: (handles.start.x + handles.end.x) / 2,
          y: (handles.start.y + handles.end.y) / 2
        };

        return [handles.start, midpoint, handles.end];
      }
    }

    /**
     *
     *
     * @param {*} evt
     * @param {*} interactionType
     */

  }, {
    key: 'addNewMeasurement',
    value: function addNewMeasurement(evt, interactionType) {
      var _this3 = this;

      var element = evt.detail.element;
      var measurementData = this.createNewMeasurement(evt);

      // Associate this data with this imageId so we can render it and manipulate it
      (0, _toolState.addToolState)(element, this.name, measurementData);
      _externalModules2.default.cornerstone.updateImage(element);

      // Since we are dragging to another place to drop the end point, we can just activate
      // The end point and let the moveHandle move it for us.
      var handleMover = interactionType === 'mouse' ? _moveNewHandle2.default : _moveNewHandleTouch2.default;

      _index.mutations.SET_IS_TOOL_LOCKED(true);
      handleMover(evt.detail, this.name, measurementData, measurementData.handles.end, function () {
        if ((0, _anyHandlesOutsideImage2.default)(evt.detail, measurementData.handles)) {
          // Delete the measurement
          (0, _toolState.removeToolState)(element, _this3.name, measurementData);
        }

        if (measurementData.text === undefined) {
          _this3.configuration.getTextCallback(function (text) {
            if (text) {
              measurementData.text = text;
            } else {
              (0, _toolState.removeToolState)(element, _this3.name, measurementData);
            }

            measurementData.active = false;
            _externalModules2.default.cornerstone.updateImage(element);
          });
        }

        _index.mutations.SET_IS_TOOL_LOCKED(false);
        _externalModules2.default.cornerstone.updateImage(element);
      });
    }
  }, {
    key: 'doubleClickCallback',
    value: function doubleClickCallback(evt) {
      if (evt.detail.buttons !== this.options.mouseButtonMask) {
        return;
      }

      return this._updateTextForNearbyAnnotation(evt);
    }
  }, {
    key: 'touchPressCallback',
    value: function touchPressCallback(evt) {
      return this._updateTextForNearbyAnnotation(evt);
    }
  }, {
    key: '_updateTextForNearbyAnnotation',
    value: function _updateTextForNearbyAnnotation(evt) {
      var element = evt.detail.element;
      var coords = evt.detail.currentPoints.canvas;
      var toolState = (0, _toolState.getToolState)(element, this.name);

      if (!toolState) {
        return false;
      }

      for (var i = 0; i < toolState.data.length; i++) {
        var _data = toolState.data[i];

        if (this.pointNearTool(element, _data, coords) || (0, _pointInsideBoundingBox2.default)(_data.handles.textBox, coords)) {
          _data.active = true;
          _externalModules2.default.cornerstone.updateImage(element);
          // Allow relabelling via a callback
          this.configuration.changeTextCallback(_data, evt.detail, this._doneChangingTextCallback.bind(this, element, _data));

          evt.stopImmediatePropagation();
          evt.preventDefault();
          evt.stopPropagation();

          return true;
        }
      }
    }
  }, {
    key: '_doneChangingTextCallback',
    value: function _doneChangingTextCallback(element, data, updatedText, deleteTool) {
      if (deleteTool === true) {
        (0, _toolState.removeToolState)(element, this.name, data);
      } else {
        data.text = updatedText;
      }

      data.active = false;
      _externalModules2.default.cornerstone.updateImage(element);
    }
  }]);

  return ArrowAnnotateTool;
}(_BaseAnnotationTool3.default);

exports.default = ArrowAnnotateTool;


function getTextCallback(doneChangingTextCallback) {
  doneChangingTextCallback(prompt('Enter your annotation:'));
}

function changeTextCallback(data, eventData, doneChangingTextCallback) {
  doneChangingTextCallback(prompt('Change your annotation:'));
}

/***/ }),

/***/ "./tools/BrushTool.js":
/*!****************************!*\
  !*** ./tools/BrushTool.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(/*! ./../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ./../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseBrushTool2 = __webpack_require__(/*! ./../base/BaseBrushTool.js */ "./base/BaseBrushTool.js");

var _BaseBrushTool3 = _interopRequireDefault(_BaseBrushTool2);

var _toolColors = __webpack_require__(/*! ./../stateManagement/toolColors.js */ "./stateManagement/toolColors.js");

var _toolColors2 = _interopRequireDefault(_toolColors);

var _getCircle = __webpack_require__(/*! ./shared/brushUtils/getCircle.js */ "./tools/shared/brushUtils/getCircle.js");

var _getCircle2 = _interopRequireDefault(_getCircle);

var _drawBrush = __webpack_require__(/*! ./shared/brushUtils/drawBrush.js */ "./tools/shared/brushUtils/drawBrush.js");

var _isToolActive = __webpack_require__(/*! ../tools/shared/isToolActive.js */ "./tools/shared/isToolActive.js");

var _isToolActive2 = _interopRequireDefault(_isToolActive);

var _KeyboardController = __webpack_require__(/*! ./shared/KeyboardController.js */ "./tools/shared/KeyboardController.js");

var _KeyboardController2 = _interopRequireDefault(_KeyboardController);

var _toolState = __webpack_require__(/*! ./../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _index = __webpack_require__(/*! ./../store/index.js */ "./store/index.js");

var _index2 = __webpack_require__(/*! ../store/index.js */ "./store/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Utils

// State


var brushState = _index3.default.modules.brush;
var cornerstone = _externalModules2.default.cornerstone;

var BrushTool = function (_BaseBrushTool) {
  _inherits(BrushTool, _BaseBrushTool);

  function BrushTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Brush';

    _classCallCheck(this, BrushTool);

    return _possibleConstructorReturn(this, (BrushTool.__proto__ || Object.getPrototypeOf(BrushTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse'],
      configuration: defaultBrushToolConfiguration()
    }));
  }

  /**
  * Called by the event dispatcher to render the image.
  *
  * @param {Object} evt - The event.
  */


  _createClass(BrushTool, [{
    key: 'renderBrush',
    value: function renderBrush(evt) {
      var eventData = evt.detail;

      var mousePosition = void 0;

      if (this._drawing) {
        mousePosition = this._lastImageCoords;
      } else if (this._mouseUpRender) {
        mousePosition = this._lastImageCoords;
        this._mouseUpRender = false;
      } else {
        mousePosition = _index.getters.mousePositionImage();
      }

      if (!mousePosition) {
        return;
      }

      var _eventData$image = eventData.image,
          rows = _eventData$image.rows,
          columns = _eventData$image.columns;
      var _mousePosition = mousePosition,
          x = _mousePosition.x,
          y = _mousePosition.y;


      if (x < 0 || x > columns || y < 0 || y > rows) {
        return;
      }

      // Draw the hover overlay on top of the pixel data
      var configuration = this._configuration;
      var radius = brushState.getters.radius();
      var context = eventData.canvasContext;
      var element = eventData.element;
      var drawId = brushState.getters.draw();
      var color = this._getBrushColor(drawId);

      context.setTransform(1, 0, 0, 1, 0, 0);

      var cornerstone = _externalModules2.default.cornerstone;

      var mouseCoordsCanvas = cornerstone.pixelToCanvas(element, mousePosition);
      var canvasTopLeft = cornerstone.pixelToCanvas(element, {
        x: 0,
        y: 0
      });
      var radiusCanvas = cornerstone.pixelToCanvas(element, {
        x: radius,
        y: 0
      });
      var circleRadius = Math.abs(radiusCanvas.x - canvasTopLeft.x);

      context.beginPath();
      context.strokeStyle = color;
      context.ellipse(mouseCoordsCanvas.x, mouseCoordsCanvas.y, circleRadius, circleRadius, 0, 0, 2 * Math.PI);
      context.stroke();
    }

    /**
     * Paints the data to the canvas.
     *
     * @private
     * @param  {Object} eventData The data object associated with the event.
     */

  }, {
    key: '_paint',
    value: function _paint(eventData) {
      var configuration = this.configuration;
      var element = eventData.element;
      var _eventData$image2 = eventData.image,
          rows = _eventData$image2.rows,
          columns = _eventData$image2.columns;
      var _eventData$currentPoi = eventData.currentPoints.image,
          x = _eventData$currentPoi.x,
          y = _eventData$currentPoi.y;

      var toolData = (0, _toolState.getToolState)(element, this.referencedToolData);

      var shouldErase = false;

      // Check for key, could be a mouseDown or mouseDrag event.
      if (this._isCtrlDown(eventData)) {
        console.log('ctrlDown');
        shouldErase = true;
      }

      var segmentationIndex = brushState.getters.draw();

      if (!toolData.data[segmentationIndex].pixelData) {
        console.log('creating new pixelData for segmentation ' + segmentationIndex);
        var newPixelData = new Uint8ClampedArray(eventData.image.width * eventData.image.height);
        toolData.data[segmentationIndex].pixelData = newPixelData;
      }

      var pixelData = toolData.data[segmentationIndex].pixelData;

      var radius = brushState.getters.radius();

      if (x < 0 || x > columns || y < 0 || y > rows) {
        return;
      }

      var pointerArray = (0, _getCircle2.default)(radius, rows, columns, x, y);

      (0, _drawBrush.drawBrushPixels)(pointerArray, pixelData, segmentationIndex, columns, shouldErase);

      toolData.data[segmentationIndex].invalidated = true;

      _externalModules2.default.cornerstone.updateImage(eventData.element);
    }
  }, {
    key: '_isCtrlDown',
    value: function _isCtrlDown(eventData) {
      return eventData.event && eventData.event.ctrlKey || eventData.ctrlKey;
    }
  }]);

  return BrushTool;
}(_BaseBrushTool3.default);

exports.default = BrushTool;


function defaultBrushToolConfiguration() {
  return {
    keyBinds: {
      increaseBrushSize: '+',
      decreaseBrushSize: '-',
      nextSegmentation: ']',
      previousSegmentation: '['
    }
  };
}

/* Safari and Edge polyfill for createImageBitmap
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/createImageBitmap
 */

if (!('createImageBitmap' in window)) {
  window.createImageBitmap = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(imageData) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', new Promise(function (resolve) {
                var img = document.createElement('img');

                img.addEventListener('load', function () {

                  resolve(this);
                });

                var conversionCanvas = document.createElement('canvas');

                conversionCanvas.width = imageData.width;
                conversionCanvas.height = imageData.height;

                var conversionCanvasContext = conversionCanvas.getContext('2d');

                conversionCanvasContext.putImageData(imageData, 0, 0, 0, 0, conversionCanvas.width, conversionCanvas.height);
                img.src = conversionCanvas.toDataURL();
              }));

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ "./tools/CrosshairsTool.js":
/*!*********************************!*\
  !*** ./tools/CrosshairsTool.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTool2 = __webpack_require__(/*! ./../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

var _externalModules = __webpack_require__(/*! ./../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _loadHandlerManager = __webpack_require__(/*! ../stateManagement/loadHandlerManager.js */ "./stateManagement/loadHandlerManager.js");

var _loadHandlerManager2 = _interopRequireDefault(_loadHandlerManager);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _pointProjector = __webpack_require__(/*! ../util/pointProjector.js */ "./util/pointProjector.js");

var _convertToVector = __webpack_require__(/*! ../util/convertToVector3.js */ "./util/convertToVector3.js");

var _convertToVector2 = _interopRequireDefault(_convertToVector);

var _toolOptions = __webpack_require__(/*! ../toolOptions.js */ "./toolOptions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-loop-func: 0 */ // --> OFF
/* eslint no-underscore-dangle: 0 */


var CrosshairsTool = function (_BaseTool) {
  _inherits(CrosshairsTool, _BaseTool);

  function CrosshairsTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Crosshairs';

    _classCallCheck(this, CrosshairsTool);

    var _this = _possibleConstructorReturn(this, (CrosshairsTool.__proto__ || Object.getPrototypeOf(CrosshairsTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse', 'touch']
    }));

    _this.mouseDownCallback = _this._chooseLocation.bind(_this);
    _this.mouseDragCallback = _this._chooseLocation.bind(_this);

    _this.touchDragCallback = _this._chooseLocation.bind(_this);
    return _this;
  }

  _createClass(CrosshairsTool, [{
    key: '_chooseLocation',
    value: function _chooseLocation(evt) {
      var eventData = evt.detail;
      var element = eventData.element;

      // Prevent CornerstoneToolsTouchStartActive from killing any press events

      evt.stopImmediatePropagation();

      // If we have no toolData for this element, return immediately as there is nothing to do
      var toolData = (0, _toolState.getToolState)(element, this.name);

      if (!toolData) {
        return;
      }

      // Get current element target information
      var sourceElement = element;
      var sourceEnabledElement = _externalModules2.default.cornerstone.getEnabledElement(sourceElement);
      var sourceImageId = sourceEnabledElement.image.imageId;
      var sourceImagePlane = _externalModules2.default.cornerstone.metaData.get('imagePlaneModule', sourceImageId);

      if (!sourceImagePlane) {
        return;
      }

      // Get currentPoints from mouse cursor on selected element
      var sourceImagePoint = eventData.currentPoints.image;

      // Transfer this to a patientPoint given imagePlane metadata
      var patientPoint = (0, _pointProjector.imagePointToPatientPoint)(sourceImagePoint, sourceImagePlane);

      // Get the enabled elements associated with this synchronization context
      var syncContext = toolData.data[0].synchronizationContext;
      var enabledElements = syncContext.getSourceElements();

      // Iterate over each synchronized element
      enabledElements.forEach(function (targetElement) {
        // Don't do anything if the target is the same as the source
        if (targetElement === sourceElement) {
          return;
        }

        var minDistance = Number.MAX_VALUE;
        var newImageIdIndex = -1;

        var stackToolDataSource = (0, _toolState.getToolState)(targetElement, 'stack');

        if (stackToolDataSource === undefined) {
          return;
        }

        var stackData = stackToolDataSource.data[0];

        // Find within the element's stack the closest image plane to selected location
        stackData.imageIds.forEach(function (imageId, index) {
          var imagePlane = _externalModules2.default.cornerstone.metaData.get('imagePlaneModule', imageId);

          // Skip if the image plane is not ready
          if (!imagePlane || !imagePlane.imagePositionPatient || !imagePlane.rowCosines || !imagePlane.columnCosines) {
            return;
          }

          var imagePosition = (0, _convertToVector2.default)(imagePlane.imagePositionPatient);
          var row = (0, _convertToVector2.default)(imagePlane.rowCosines);
          var column = (0, _convertToVector2.default)(imagePlane.columnCosines);
          var normal = column.clone().cross(row.clone());
          var distance = Math.abs(normal.clone().dot(imagePosition) - normal.clone().dot(patientPoint));

          if (distance < minDistance) {
            minDistance = distance;
            newImageIdIndex = index;
          }
        });

        if (newImageIdIndex === stackData.currentImageIdIndex) {
          return;
        }

        // Switch the loaded image to the required image
        if (newImageIdIndex !== -1 && stackData.imageIds[newImageIdIndex] !== undefined) {
          var startLoadingHandler = _loadHandlerManager2.default.getStartLoadHandler();
          var endLoadingHandler = _loadHandlerManager2.default.getEndLoadHandler();
          var errorLoadingHandler = _loadHandlerManager2.default.getErrorLoadingHandler();

          if (startLoadingHandler) {
            startLoadingHandler(targetElement);
          }

          var loader = void 0;

          if (stackData.preventCache === true) {
            loader = _externalModules2.default.cornerstone.loadImage(stackData.imageIds[newImageIdIndex]);
          } else {
            loader = _externalModules2.default.cornerstone.loadAndCacheImage(stackData.imageIds[newImageIdIndex]);
          }

          loader.then(function (image) {
            var viewport = _externalModules2.default.cornerstone.getViewport(targetElement);

            stackData.currentImageIdIndex = newImageIdIndex;
            _externalModules2.default.cornerstone.displayImage(targetElement, image, viewport);
            if (endLoadingHandler) {
              endLoadingHandler(targetElement, image);
            }
          }, function (error) {
            var imageId = stackData.imageIds[newImageIdIndex];

            if (errorLoadingHandler) {
              errorLoadingHandler(targetElement, imageId, error);
            }
          });
        }
      });
    }
  }, {
    key: 'activeCallback',
    value: function activeCallback(element, _ref) {
      var mouseButtonMask = _ref.mouseButtonMask,
          synchronizationContext = _ref.synchronizationContext;

      (0, _toolOptions.setToolOptions)(this.name, element, { mouseButtonMask: mouseButtonMask });

      // Clear any currently existing toolData
      (0, _toolState.clearToolState)(element, this.name);

      (0, _toolState.addToolState)(element, this.name, {
        synchronizationContext: synchronizationContext
      });
    }
  }]);

  return CrosshairsTool;
}(_BaseTool3.default);

exports.default = CrosshairsTool;

/***/ }),

/***/ "./tools/DoubleTapFitToWindowTool.js":
/*!*******************************************!*\
  !*** ./tools/DoubleTapFitToWindowTool.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseTool = __webpack_require__(/*! ../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool2 = _interopRequireDefault(_BaseTool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint class-methods-use-this: 0 */ // --> OFF


var _class = function (_baseTool) {
  _inherits(_class, _baseTool);

  function _class() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'DoubleTapFitToWindow';

    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, {
      name: name,
      supportedInteractionTypes: ['touch']
    }));
  }

  _createClass(_class, [{
    key: 'doubleTapCallback',
    value: function doubleTapCallback(evt) {
      var eventData = evt.detail;

      _externalModules2.default.cornerstone.fitToWindow(eventData.element);
    }
  }]);

  return _class;
}(_BaseTool2.default);

exports.default = _class;

/***/ }),

/***/ "./tools/EllipticalRoiTool.js":
/*!************************************!*\
  !*** ./tools/EllipticalRoiTool.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseAnnotationTool2 = __webpack_require__(/*! ../base/BaseAnnotationTool.js */ "./base/BaseAnnotationTool.js");

var _BaseAnnotationTool3 = _interopRequireDefault(_BaseAnnotationTool2);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _toolStyle = __webpack_require__(/*! ../stateManagement/toolStyle.js */ "./stateManagement/toolStyle.js");

var _toolStyle2 = _interopRequireDefault(_toolStyle);

var _toolColors = __webpack_require__(/*! ../stateManagement/toolColors.js */ "./stateManagement/toolColors.js");

var _toolColors2 = _interopRequireDefault(_toolColors);

var _drawHandles = __webpack_require__(/*! ../manipulators/drawHandles.js */ "./manipulators/drawHandles.js");

var _drawHandles2 = _interopRequireDefault(_drawHandles);

var _drawing = __webpack_require__(/*! ../util/drawing.js */ "./util/drawing.js");

var _drawLinkedTextBox = __webpack_require__(/*! ../util/drawLinkedTextBox.js */ "./util/drawLinkedTextBox.js");

var _drawLinkedTextBox2 = _interopRequireDefault(_drawLinkedTextBox);

var _pointInEllipse = __webpack_require__(/*! ../util/pointInEllipse.js */ "./util/pointInEllipse.js");

var _pointInEllipse2 = _interopRequireDefault(_pointInEllipse);

var _calculateEllipseStatistics = __webpack_require__(/*! ../util/calculateEllipseStatistics.js */ "./util/calculateEllipseStatistics.js");

var _calculateEllipseStatistics2 = _interopRequireDefault(_calculateEllipseStatistics);

var _calculateSUV = __webpack_require__(/*! ../util/calculateSUV.js */ "./util/calculateSUV.js");

var _calculateSUV2 = _interopRequireDefault(_calculateSUV);

var _numbersWithCommas = __webpack_require__(/*! ./shared/numbersWithCommas.js */ "./tools/shared/numbersWithCommas.js");

var _numbersWithCommas2 = _interopRequireDefault(_numbersWithCommas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-loop-func: 0 */ // --> OFF

// State

// Manipulators

// Drawing

//


var EllipticalRoiTool = function (_BaseAnnotationTool) {
  _inherits(EllipticalRoiTool, _BaseAnnotationTool);

  function EllipticalRoiTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'EllipticalRoi';

    _classCallCheck(this, EllipticalRoiTool);

    return _possibleConstructorReturn(this, (EllipticalRoiTool.__proto__ || Object.getPrototypeOf(EllipticalRoiTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse', 'touch']
    }));
  }

  /**
   * Create the measurement data for this tool with the end handle activated
   *
   * @param {*} eventData
   * @returns
   */


  _createClass(EllipticalRoiTool, [{
    key: 'createNewMeasurement',
    value: function createNewMeasurement(eventData) {
      var goodEventData = eventData && eventData.currentPoints && eventData.currentPoints.image;

      if (!goodEventData) {
        console.error('required eventData not supplied to tool ' + this.name + '\'s createNewMeasurement');

        return;
      }

      return {
        visible: true,
        active: true,
        color: undefined,
        invalidated: true,
        handles: {
          start: {
            x: eventData.currentPoints.image.x,
            y: eventData.currentPoints.image.y,
            highlight: true,
            active: false
          },
          end: {
            x: eventData.currentPoints.image.x,
            y: eventData.currentPoints.image.y,
            highlight: true,
            active: true
          },
          textBox: {
            active: false,
            hasMoved: false,
            movesIndependently: false,
            drawnIndependently: true,
            allowedOutsideImage: true,
            hasBoundingBox: true
          }
        }
      };
    }

    /**
     *
     *
     * @param {*} element
     * @param {*} data
     * @param {*} coords
     * @returns
     */

  }, {
    key: 'pointNearTool',
    value: function pointNearTool(element, data, coords) {
      // TODO: How should we handle touch? for mouse, distance is 15 for touch its 25
      var distance = 15;

      var hasStartAndEndHandles = data && data.handles && data.handles.start && data.handles.end;
      var validParameters = hasStartAndEndHandles;

      if (!validParameters) {
        console.warn('invalid parameters supplieed to tool ' + this.name + '\'s pointNearTool');
      }

      if (!validParameters || data.visible === false) {
        return false;
      }

      var startCanvas = _externalModules2.default.cornerstone.pixelToCanvas(element, data.handles.start);
      var endCanvas = _externalModules2.default.cornerstone.pixelToCanvas(element, data.handles.end);

      var minorEllipse = {
        left: Math.min(startCanvas.x, endCanvas.x) + distance / 2,
        top: Math.min(startCanvas.y, endCanvas.y) + distance / 2,
        width: Math.abs(startCanvas.x - endCanvas.x) - distance,
        height: Math.abs(startCanvas.y - endCanvas.y) - distance
      };

      var majorEllipse = {
        left: Math.min(startCanvas.x, endCanvas.x) - distance / 2,
        top: Math.min(startCanvas.y, endCanvas.y) - distance / 2,
        width: Math.abs(startCanvas.x - endCanvas.x) + distance,
        height: Math.abs(startCanvas.y - endCanvas.y) + distance
      };

      var pointInMinorEllipse = (0, _pointInEllipse2.default)(minorEllipse, coords);
      var pointInMajorEllipse = (0, _pointInEllipse2.default)(majorEllipse, coords);

      if (pointInMajorEllipse && !pointInMinorEllipse) {
        return true;
      }

      return false;
    }

    /**
     *
     *
     * @param {*} evt
     * @returns
     */

  }, {
    key: 'renderToolData',
    value: function renderToolData(evt) {
      var eventData = evt.detail;
      var toolData = (0, _toolState.getToolState)(evt.currentTarget, this.name);

      if (!toolData) {
        return;
      }

      // We have tool data for this element - iterate over each one and draw it
      var context = (0, _drawing.getNewContext)(eventData.canvasContext.canvas);
      var image = eventData.image,
          element = eventData.element;


      var lineWidth = _toolStyle2.default.getToolWidth();
      var config = this.configuration;
      var seriesModule = _externalModules2.default.cornerstone.metaData.get('generalSeriesModule', image.imageId);
      var imagePlane = _externalModules2.default.cornerstone.metaData.get('imagePlaneModule', image.imageId);

      var modality = void 0;
      var rowPixelSpacing = image.rowPixelSpacing;
      var colPixelSpacing = image.columnPixelSpacing;

      if (imagePlane) {
        rowPixelSpacing = imagePlane.rowPixelSpacing || imagePlane.rowImagePixelSpacing;
        colPixelSpacing = imagePlane.columnPixelSpacing || imagePlane.colImagePixelSpacing;
      }

      if (seriesModule) {
        modality = seriesModule.modality;
      }

      // If we have tool data for this element - iterate over each set and draw it

      var _loop = function _loop(i) {
        var data = toolData.data[i];

        if (data.visible === false) {
          return 'continue';
        }

        (0, _drawing.draw)(context, function (context) {
          // Apply any shadow settings defined in the tool configuration
          (0, _drawing.setShadow)(context, config);

          // Check which color the rendered tool should be
          var color = _toolColors2.default.getColorIfActive(data);

          // Draw the ellipse on the canvas
          (0, _drawing.drawEllipse)(context, element, data.handles.start, data.handles.end, {
            color: color
          });

          // Draw the handles
          var handleOptions = {
            drawHandlesIfActive: config && config.drawHandlesOnHover
          };

          (0, _drawHandles2.default)(context, eventData, data.handles, color, handleOptions);

          // Define variables for the area and mean/standard deviation
          var area = void 0,
              meanStdDev = void 0,
              meanStdDevSUV = void 0;

          // Perform a check to see if the tool has been invalidated. This is to prevent
          // Unnecessary re-calculation of the area, mean, and standard deviation if the
          // Image is re-rendered but the tool has not moved (e.g. during a zoom)
          if (data.invalidated === false) {
            // If the data is not invalidated, retrieve it from the toolData
            meanStdDev = data.meanStdDev;
            meanStdDevSUV = data.meanStdDevSUV;
            area = data.area;
          } else {
            // If the data has been invalidated, we need to calculate it again

            // Retrieve the bounds of the ellipse in image coordinates
            var ellipse = {
              left: Math.round(Math.min(data.handles.start.x, data.handles.end.x)),
              top: Math.round(Math.min(data.handles.start.y, data.handles.end.y)),
              width: Math.round(Math.abs(data.handles.start.x - data.handles.end.x)),
              height: Math.round(Math.abs(data.handles.start.y - data.handles.end.y))
            };

            // First, make sure this is not a color image, since no mean / standard
            // Deviation will be calculated for color images.
            if (!image.color) {
              // Retrieve the array of pixels that the ellipse bounds cover
              var pixels = _externalModules2.default.cornerstone.getPixels(element, ellipse.left, ellipse.top, ellipse.width, ellipse.height);

              // Calculate the mean & standard deviation from the pixels and the ellipse details
              meanStdDev = (0, _calculateEllipseStatistics2.default)(pixels, ellipse);

              if (modality === 'PT') {
                // If the image is from a PET scan, use the DICOM tags to
                // Calculate the SUV from the mean and standard deviation.

                // Note that because we are using modality pixel values from getPixels, and
                // The calculateSUV routine also rescales to modality pixel values, we are first
                // Returning the values to storedPixel values before calcuating SUV with them.
                // TODO: Clean this up? Should we add an option to not scale in calculateSUV?
                meanStdDevSUV = {
                  mean: (0, _calculateSUV2.default)(image, (meanStdDev.mean - image.intercept) / image.slope),
                  stdDev: (0, _calculateSUV2.default)(image, (meanStdDev.stdDev - image.intercept) / image.slope)
                };
              }

              // If the mean and standard deviation values are sane, store them for later retrieval
              if (meanStdDev && !isNaN(meanStdDev.mean)) {
                data.meanStdDev = meanStdDev;
                data.meanStdDevSUV = meanStdDevSUV;
              }
            }

            // Calculate the image area from the ellipse dimensions and pixel spacing
            area = Math.PI * (ellipse.width * (colPixelSpacing || 1) / 2) * (ellipse.height * (rowPixelSpacing || 1) / 2);

            // If the area value is sane, store it for later retrieval
            if (!isNaN(area)) {
              data.area = area;
            }

            // Set the invalidated flag to false so that this data won't automatically be recalculated
            data.invalidated = false;
          }

          // If the textbox has not been moved by the user, it should be displayed on the right-most
          // Side of the tool.
          if (!data.handles.textBox.hasMoved) {
            // Find the rightmost side of the ellipse at its vertical center, and place the textbox here
            // Note that this calculates it in image coordinates
            data.handles.textBox.x = Math.max(data.handles.start.x, data.handles.end.x);
            data.handles.textBox.y = (data.handles.start.y + data.handles.end.y) / 2;
          }

          var text = textBoxText(data);

          (0, _drawLinkedTextBox2.default)(context, element, data.handles.textBox, text, data.handles, textBoxAnchorPoints, color, lineWidth, 0, true);
        });
      };

      for (var i = 0; i < toolData.data.length; i++) {
        var _ret = _loop(i);

        if (_ret === 'continue') continue;
      }

      function textBoxText(data) {
        var meanStdDev = data.meanStdDev,
            meanStdDevSUV = data.meanStdDevSUV,
            area = data.area;

        // Define an array to store the rows of text for the textbox

        var textLines = [];

        // If the mean and standard deviation values are present, display them
        if (meanStdDev && meanStdDev.mean !== undefined) {
          // If the modality is CT, add HU to denote Hounsfield Units
          var moSuffix = '';

          if (modality === 'CT') {
            moSuffix = ' HU';
          }

          // Create a line of text to display the mean and any units that were specified (i.e. HU)
          var meanText = 'Mean: ' + (0, _numbersWithCommas2.default)(meanStdDev.mean.toFixed(2)) + moSuffix;
          // Create a line of text to display the standard deviation and any units that were specified (i.e. HU)
          var stdDevText = 'StdDev: ' + (0, _numbersWithCommas2.default)(meanStdDev.stdDev.toFixed(2)) + moSuffix;

          // If this image has SUV values to display, concatenate them to the text line
          if (meanStdDevSUV && meanStdDevSUV.mean !== undefined) {
            var SUVtext = ' SUV: ';

            meanText += SUVtext + (0, _numbersWithCommas2.default)(meanStdDevSUV.mean.toFixed(2));
            stdDevText += SUVtext + (0, _numbersWithCommas2.default)(meanStdDevSUV.stdDev.toFixed(2));
          }

          // Add these text lines to the array to be displayed in the textbox
          textLines.push(meanText);
          textLines.push(stdDevText);
        }

        // If the area is a sane value, display it
        if (area) {
          // Determine the area suffix based on the pixel spacing in the image.
          // If pixel spacing is present, use millimeters. Otherwise, use pixels.
          // This uses Char code 178 for a superscript 2
          var suffix = ' mm' + String.fromCharCode(178);

          if (!rowPixelSpacing || !colPixelSpacing) {
            suffix = ' pixels' + String.fromCharCode(178);
          }

          // Create a line of text to display the area and its units
          var areaText = 'Area: ' + (0, _numbersWithCommas2.default)(area.toFixed(2)) + suffix;

          // Add this text line to the array to be displayed in the textbox
          textLines.push(areaText);
        }

        return textLines;
      }

      function textBoxAnchorPoints(handles) {
        // Retrieve the bounds of the ellipse (left, top, width, and height)
        var left = Math.min(handles.start.x, handles.end.x);
        var top = Math.min(handles.start.y, handles.end.y);
        var width = Math.abs(handles.start.x - handles.end.x);
        var height = Math.abs(handles.start.y - handles.end.y);

        return [{
          // Top middle point of ellipse
          x: left + width / 2,
          y: top
        }, {
          // Left middle point of ellipse
          x: left,
          y: top + height / 2
        }, {
          // Bottom middle point of ellipse
          x: left + width / 2,
          y: top + height
        }, {
          // Right middle point of ellipse
          x: left + width,
          y: top + height / 2
        }];
      }
    }
  }]);

  return EllipticalRoiTool;
}(_BaseAnnotationTool3.default);

exports.default = EllipticalRoiTool;

/***/ }),

/***/ "./tools/EraserTool.js":
/*!*****************************!*\
  !*** ./tools/EraserTool.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseTool2 = __webpack_require__(/*! ../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _index = __webpack_require__(/*! ../store/index.js */ "./store/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint class-methods-use-this: 0 */
/* eslint no-underscore-dangle: 0 */


var EraserTool = function (_BaseTool) {
  _inherits(EraserTool, _BaseTool);

  function EraserTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Eraser';

    _classCallCheck(this, EraserTool);

    var _this = _possibleConstructorReturn(this, (EraserTool.__proto__ || Object.getPrototypeOf(EraserTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse', 'touch']
    }));

    _this.preMouseDownCallback = _this._deleteAllNearbyTools.bind(_this);
    _this.preTouchStartCallback = _this._deleteAllNearbyTools.bind(_this);
    return _this;
  }

  _createClass(EraserTool, [{
    key: '_deleteAllNearbyTools',
    value: function _deleteAllNearbyTools(evt) {
      var coords = evt.detail.currentPoints.canvas;
      var element = evt.detail.element;

      _index.state.tools.forEach(function (tool) {
        var toolState = (0, _toolState.getToolState)(element, tool.name);

        if (toolState) {
          // Modifying in a foreach? Probably not ideal
          toolState.data.forEach(function (data) {
            if (typeof tool.pointNearTool === 'function' && tool.pointNearTool(element, data, coords)) {
              (0, _toolState.removeToolState)(element, tool.name, data);
              _externalModules2.default.cornerstone.updateImage(element);
            }
          });
        }
      });

      var consumeEvent = true;

      return consumeEvent;
    }
  }]);

  return EraserTool;
}(_BaseTool3.default);

exports.default = EraserTool;

/***/ }),

/***/ "./tools/FreehandMouseTool.js":
/*!************************************!*\
  !*** ./tools/FreehandMouseTool.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(/*! ./../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ./../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseAnnotationTool2 = __webpack_require__(/*! ./../base/BaseAnnotationTool.js */ "./base/BaseAnnotationTool.js");

var _BaseAnnotationTool3 = _interopRequireDefault(_BaseAnnotationTool2);

var _toolState = __webpack_require__(/*! ./../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _toolStyle = __webpack_require__(/*! ./../stateManagement/toolStyle.js */ "./stateManagement/toolStyle.js");

var _toolStyle2 = _interopRequireDefault(_toolStyle);

var _toolColors = __webpack_require__(/*! ./../stateManagement/toolColors.js */ "./stateManagement/toolColors.js");

var _toolColors2 = _interopRequireDefault(_toolColors);

var _index = __webpack_require__(/*! ../store/index.js */ "./store/index.js");

var _drawHandles = __webpack_require__(/*! ./../manipulators/drawHandles.js */ "./manipulators/drawHandles.js");

var _drawHandles2 = _interopRequireDefault(_drawHandles);

var _findAndMoveHelpers = __webpack_require__(/*! ../util/findAndMoveHelpers.js */ "./util/findAndMoveHelpers.js");

var _pointInsideBoundingBox = __webpack_require__(/*! ../util/pointInsideBoundingBox.js */ "./util/pointInsideBoundingBox.js");

var _pointInsideBoundingBox2 = _interopRequireDefault(_pointInsideBoundingBox);

var _calculateSUV = __webpack_require__(/*! ../util/calculateSUV.js */ "./util/calculateSUV.js");

var _calculateSUV2 = _interopRequireDefault(_calculateSUV);

var _numbersWithCommas = __webpack_require__(/*! ./shared/numbersWithCommas.js */ "./tools/shared/numbersWithCommas.js");

var _numbersWithCommas2 = _interopRequireDefault(_numbersWithCommas);

var _insertOrDelete = __webpack_require__(/*! ./shared/freehandUtils/insertOrDelete.js */ "./tools/shared/freehandUtils/insertOrDelete.js");

var _insertOrDelete2 = _interopRequireDefault(_insertOrDelete);

var _freehandArea = __webpack_require__(/*! ./shared/freehandUtils/freehandArea.js */ "./tools/shared/freehandUtils/freehandArea.js");

var _freehandArea2 = _interopRequireDefault(_freehandArea);

var _calculateFreehandStatistics = __webpack_require__(/*! ./shared/freehandUtils/calculateFreehandStatistics.js */ "./tools/shared/freehandUtils/calculateFreehandStatistics.js");

var _calculateFreehandStatistics2 = _interopRequireDefault(_calculateFreehandStatistics);

var _freehandIntersect = __webpack_require__(/*! ./shared/freehandUtils/freehandIntersect.js */ "./tools/shared/freehandUtils/freehandIntersect.js");

var _freehandIntersect2 = _interopRequireDefault(_freehandIntersect);

var _FreehandHandleData = __webpack_require__(/*! ./shared/freehandUtils/FreehandHandleData.js */ "./tools/shared/freehandUtils/FreehandHandleData.js");

var _drawing = __webpack_require__(/*! ./../util/drawing.js */ "./util/drawing.js");

var _drawLinkedTextBox = __webpack_require__(/*! ./../util/drawLinkedTextBox.js */ "./util/drawLinkedTextBox.js");

var _drawLinkedTextBox2 = _interopRequireDefault(_drawLinkedTextBox);

var _clip = __webpack_require__(/*! ../util/clip.js */ "./util/clip.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-loop-func: 0 */ // --> OFF
/* eslint no-underscore-dangle: 0 */

// State

// Manipulators

// Implementation Logic

// Drawing


var FreehandMouseTool = function (_BaseAnnotationTool) {
  _inherits(FreehandMouseTool, _BaseAnnotationTool);

  function FreehandMouseTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'FreehandMouse';

    _classCallCheck(this, FreehandMouseTool);

    var _this = _possibleConstructorReturn(this, (FreehandMouseTool.__proto__ || Object.getPrototypeOf(FreehandMouseTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse'],
      configuration: defaultFreehandConfiguration()
    }));

    _this._drawing = false;
    _this._activePencilMode = false;
    _this._modifying = false;

    // Create bound callback functions for private event loops
    _this._drawingMouseDownCallback = _this._drawingMouseDownCallback.bind(_this);
    _this._drawingMouseMoveCallback = _this._drawingMouseMoveCallback.bind(_this);

    _this._editMouseUpCallback = _this._editMouseUpCallback.bind(_this);
    _this._editMouseDragCallback = _this._editMouseDragCallback.bind(_this);
    return _this;
  }

  /**
   * Create the measurement data for this tool
   *
   * @param {*} eventData
   * @returns
   */


  _createClass(FreehandMouseTool, [{
    key: 'createNewMeasurement',
    value: function createNewMeasurement(eventData) {

      var goodEventData = eventData && eventData.currentPoints && eventData.currentPoints.image;

      if (!goodEventData) {
        console.error('required eventData not supplied to tool ' + this.name + '\'s createNewMeasurement');

        return;
      }

      var measurementData = {
        visible: true,
        active: true,
        invalidated: true,
        color: undefined,
        handles: []
      };

      measurementData.handles.textBox = {
        active: false,
        hasMoved: false,
        movesIndependently: false,
        drawnIndependently: true,
        allowedOutsideImage: true,
        hasBoundingBox: true
      };

      return measurementData;
    }

    /**
     *
     *
     * @param {*} element
     * @param {*} data
     * @param {*} coords
     * @returns {Boolean}
     */

  }, {
    key: 'pointNearTool',
    value: function pointNearTool(element, data, coords) {
      var validParameters = data && data.handles;

      if (!validParameters) {
        throw new Error('invalid parameters supplied to tool ' + this.name + '\'s pointNearTool');
      }

      if (!validParameters || data.visible === false) {
        return false;
      }

      var isPointNearTool = this._pointNearHandle(element, data, coords);

      return isPointNearTool !== undefined;
    }

    /**
     * @param {*} element
     * @param {*} data
     * @param {*} coords
     * @returns {number} the distance in px from the provided coordinates to the
     * closest rendered portion of the annotation. -1 if the distance cannot be
     * calculated.
     */

  }, {
    key: 'distanceFromPoint',
    value: function distanceFromPoint(element, data, coords) {
      var distance = Infinity;

      for (var i = 0; i < data.handles.length; i++) {
        var distanceI = _externalModules2.default.cornerstoneMath.point.distance(data.handles[i], coords);

        distance = Math.min(distance, distanceI);
      }

      // If an error caused distance not to be calculated, return -1.
      if (distance === Infinity) {
        return -1;
      }

      return distance;
    }

    /**
     * @param {*} element
     * @param {*} data
     * @param {*} coords
     * @returns {number} the distance in canvas units from the provided coordinates to the
     * closest rendered portion of the annotation. -1 if the distance cannot be
     * calculated.
     */

  }, {
    key: 'distanceFromPointCanvas',
    value: function distanceFromPointCanvas(element, data, coords) {
      var distance = Infinity;

      var canvasCoords = _externalModules2.default.cornerstone.pixelToCanvas(element, coords);

      var dataHandles = data.handles;

      for (var i = 0; i < dataHandles.length; i++) {
        var handleCanvas = _externalModules2.default.cornerstone.pixelToCanvas(element, dataHandles[i]);

        var distanceI = _externalModules2.default.cornerstoneMath.point.distance(handleCanvas, canvasCoords);

        distance = Math.min(distance, distanceI);
      }

      // If an error caused distance not to be calculated, return -1.
      if (distance === Infinity) {
        return -1;
      }

      return distance;
    }

    /**
     *
     *
     * @param {*} evt
     * @returns
     */

  }, {
    key: 'renderToolData',
    value: function renderToolData(evt) {
      var _this2 = this;

      var eventData = evt.detail;

      // If we have no toolState for this element, return immediately as there is nothing to do
      var toolState = (0, _toolState.getToolState)(evt.currentTarget, this.name);

      if (!toolState) {
        return;
      }

      var image = eventData.image;
      var element = eventData.element;
      var config = this.configuration;
      var seriesModule = _externalModules2.default.cornerstone.metaData.get('generalSeriesModule', image.imageId);
      var modality = void 0;

      if (seriesModule) {
        modality = seriesModule.modality;
      }

      // We have tool data for this element - iterate over each one and draw it
      var context = (0, _drawing.getNewContext)(eventData.canvasContext.canvas);

      var lineWidth = _toolStyle2.default.getToolWidth();

      var _loop = function _loop(i) {
        var data = toolState.data[i];

        if (data.visible === false) {
          return 'continue';
        }

        (0, _drawing.draw)(context, function (context) {
          var color = _toolColors2.default.getColorIfActive(data);
          var fillColor = void 0;

          if (data.active) {
            if (data.handles.invalidHandlePlacement) {
              color = config.invalidColor;
              fillColor = config.invalidColor;
            } else {
              color = _toolColors2.default.getColorIfActive(data);
              fillColor = _toolColors2.default.getFillColor();
            }
          } else {
            fillColor = _toolColors2.default.getToolColor();
          }

          if (data.handles.length) {
            for (var j = 0; j < data.handles.length; j++) {
              var points = [].concat(_toConsumableArray(data.handles[j].lines));

              if (j === data.handles.length - 1 && !data.polyBoundingBox) {
                // If it's still being actively drawn, keep the last line to
                // The mouse location
                points.push(config.mouseLocation.handles.start);
              }
              (0, _drawing.drawJoinedLines)(context, eventData.element, data.handles[j], points, { color: color });
            }
          }

          // Draw handles

          var options = {
            fill: fillColor
          };

          if (config.alwaysShowHandles || config.keyDown.ctrl || data.active && data.polyBoundingBox) {
            // Render all handles
            options.handleRadius = config.activeHandleRadius;
            (0, _drawHandles2.default)(context, eventData, data.handles, color, options);
          }

          if (data.canComplete) {
            // Draw large handle at the origin if can complete drawing
            options.handleRadius = config.completeHandleRadius;
            (0, _drawHandles2.default)(context, eventData, [data.handles[0]], color, options);
          }

          if (data.active && !data.polyBoundingBox) {
            // Draw handle at origin and at mouse if actively drawing
            options.handleRadius = config.activeHandleRadius;
            (0, _drawHandles2.default)(context, eventData, config.mouseLocation.handles, color, options);
            (0, _drawHandles2.default)(context, eventData, [data.handles[0]], color, options);
          }

          // Define variables for the area and mean/standard deviation
          var area = void 0,
              meanStdDev = void 0,
              meanStdDevSUV = void 0;

          // Perform a check to see if the tool has been invalidated. This is to prevent
          // Unnecessary re-calculation of the area, mean, and standard deviation if the
          // Image is re-rendered but the tool has not moved (e.g. during a zoom)
          if (data.invalidated === false) {
            // If the data is not invalidated, retrieve it from the toolState
            meanStdDev = data.meanStdDev;
            meanStdDevSUV = data.meanStdDevSUV;
            area = data.area;
          } else if (!data.active) {
            // If the data has been invalidated, and the tool is not currently active,
            // We need to calculate it again.

            // Retrieve the bounds of the ROI in image coordinates
            var bounds = {
              left: data.handles[0].x,
              right: data.handles[0].x,
              bottom: data.handles[0].y,
              top: data.handles[0].x
            };

            for (var _i = 0; _i < data.handles.length; _i++) {
              bounds.left = Math.min(bounds.left, data.handles[_i].x);
              bounds.right = Math.max(bounds.right, data.handles[_i].x);
              bounds.bottom = Math.min(bounds.bottom, data.handles[_i].y);
              bounds.top = Math.max(bounds.top, data.handles[_i].y);
            }

            var polyBoundingBox = {
              left: bounds.left,
              top: bounds.bottom,
              width: Math.abs(bounds.right - bounds.left),
              height: Math.abs(bounds.top - bounds.bottom)
            };

            // Store the bounding box information for the text box
            data.polyBoundingBox = polyBoundingBox;

            // First, make sure this is not a color image, since no mean / standard
            // Deviation will be calculated for color images.
            if (!image.color) {
              // Retrieve the array of pixels that the ROI bounds cover
              var pixels = _externalModules2.default.cornerstone.getPixels(element, polyBoundingBox.left, polyBoundingBox.top, polyBoundingBox.width, polyBoundingBox.height);

              // Calculate the mean & standard deviation from the pixels and the object shape
              meanStdDev = _calculateFreehandStatistics2.default.call(_this2, pixels, polyBoundingBox, data.handles);

              if (modality === 'PT') {
                // If the image is from a PET scan, use the DICOM tags to
                // Calculate the SUV from the mean and standard deviation.

                // Note that because we are using modality pixel values from getPixels, and
                // The calculateSUV routine also rescales to modality pixel values, we are first
                // Returning the values to storedPixel values before calcuating SUV with them.
                // TODO: Clean this up? Should we add an option to not scale in calculateSUV?
                meanStdDevSUV = {
                  mean: (0, _calculateSUV2.default)(image, (meanStdDev.mean - image.intercept) / image.slope),
                  stdDev: (0, _calculateSUV2.default)(image, (meanStdDev.stdDev - image.intercept) / image.slope)
                };
              }

              // If the mean and standard deviation values are sane, store them for later retrieval
              if (meanStdDev && !isNaN(meanStdDev.mean)) {
                data.meanStdDev = meanStdDev;
                data.meanStdDevSUV = meanStdDevSUV;
              }
            }

            // Retrieve the pixel spacing values, and if they are not
            // Real non-zero values, set them to 1
            var columnPixelSpacing = image.columnPixelSpacing || 1;
            var rowPixelSpacing = image.rowPixelSpacing || 1;
            var scaling = columnPixelSpacing * rowPixelSpacing;

            area = (0, _freehandArea2.default)(data.handles, scaling);

            // If the area value is sane, store it for later retrieval
            if (!isNaN(area)) {
              data.area = area;
            }

            // Set the invalidated flag to false so that this data won't automatically be recalculated
            data.invalidated = false;
          }

          // Only render text if polygon ROI has been completed and freehand 'shiftKey' mode was not used:
          if (data.polyBoundingBox && !data.handles.textBox.freehand) {
            // If the textbox has not been moved by the user, it should be displayed on the right-most
            // Side of the tool.
            if (!data.handles.textBox.hasMoved) {
              // Find the rightmost side of the polyBoundingBox at its vertical center, and place the textbox here
              // Note that this calculates it in image coordinates
              data.handles.textBox.x = data.polyBoundingBox.left + data.polyBoundingBox.width;
              data.handles.textBox.y = data.polyBoundingBox.top + data.polyBoundingBox.height / 2;
            }

            var text = textBoxText.call(_this2, data);

            (0, _drawLinkedTextBox2.default)(context, element, data.handles.textBox, text, data.handles, textBoxAnchorPoints, color, lineWidth, 0, true);
          }
        });
      };

      for (var i = 0; i < toolState.data.length; i++) {
        var _ret = _loop(i);

        if (_ret === 'continue') continue;
      }

      function textBoxText(data) {
        var meanStdDev = data.meanStdDev,
            meanStdDevSUV = data.meanStdDevSUV,
            area = data.area;
        // Define an array to store the rows of text for the textbox

        var textLines = [];

        // If the mean and standard deviation values are present, display them
        if (meanStdDev && meanStdDev.mean !== undefined) {
          // If the modality is CT, add HU to denote Hounsfield Units
          var moSuffix = '';

          if (modality === 'CT') {
            moSuffix = ' HU';
          }

          // Create a line of text to display the mean and any units that were specified (i.e. HU)
          var meanText = 'Mean: ' + (0, _numbersWithCommas2.default)(meanStdDev.mean.toFixed(2)) + moSuffix;
          // Create a line of text to display the standard deviation and any units that were specified (i.e. HU)
          var stdDevText = 'StdDev: ' + (0, _numbersWithCommas2.default)(meanStdDev.stdDev.toFixed(2)) + moSuffix;

          // If this image has SUV values to display, concatenate them to the text line
          if (meanStdDevSUV && meanStdDevSUV.mean !== undefined) {
            var SUVtext = ' SUV: ';

            meanText += SUVtext + (0, _numbersWithCommas2.default)(meanStdDevSUV.mean.toFixed(2));
            stdDevText += SUVtext + (0, _numbersWithCommas2.default)(meanStdDevSUV.stdDev.toFixed(2));
          }

          // Add these text lines to the array to be displayed in the textbox
          textLines.push(meanText);
          textLines.push(stdDevText);
        }

        // If the area is a sane value, display it
        if (area) {
          // Determine the area suffix based on the pixel spacing in the image.
          // If pixel spacing is present, use millimeters. Otherwise, use pixels.
          // This uses Char code 178 for a superscript 2
          var suffix = ' mm' + String.fromCharCode(178);

          if (!image.rowPixelSpacing || !image.columnPixelSpacing) {
            suffix = ' pixels' + String.fromCharCode(178);
          }

          // Create a line of text to display the area and its units
          var areaText = 'Area: ' + (0, _numbersWithCommas2.default)(area.toFixed(2)) + suffix;

          // Add this text line to the array to be displayed in the textbox
          textLines.push(areaText);
        }

        return textLines;
      }

      function textBoxAnchorPoints(handles) {
        return handles;
      }
    }

    /**
    * Event handler for called by the mouseDownActivate event, if tool is active and
    * the event is not caught by mouseDownCallback.
    *
    * @event
    * @param {Object} evt - The event.
    */

  }, {
    key: 'addNewMeasurement',
    value: function addNewMeasurement(evt, interactionType) {
      var eventData = evt.detail;
      var config = this.configuration;

      this._drawing = true;

      if (eventData.event.shiftKey) {
        this._activePencilMode = true;
      }

      this._startDrawing(eventData);
      this._addPoint(eventData);

      preventPropagation(evt);
    }

    /**
     * Active mouse down callback that takes priority if the user is attempting
     * to insert or delete a handle with ctrl + click.
     *
     * @param {Object} evt - The event.
     */

  }, {
    key: 'preMouseDownCallback',
    value: function preMouseDownCallback(evt) {
      var eventData = evt.detail;
      var nearby = this._pointNearHandleAllTools(eventData);

      if (eventData.event.ctrlKey) {
        if (nearby !== undefined && nearby.handleNearby.hasBoundingBox) {
          // Ctrl + clicked textBox, do nothing but still consume event.
        } else {
          _insertOrDelete2.default.call(this, evt, nearby);
        }

        preventPropagation(evt);

        return true;
      }

      return false;
    }

    /**
    * Custom callback for when a handle is selected.
    *
    * @param  {Object} evt
    * @param  {Object} handle The selected handle.
    */

  }, {
    key: 'handleSelectedCallback',
    value: function handleSelectedCallback(evt, handle, data) {
      var eventData = evt.detail;
      var element = eventData.element;
      var toolState = (0, _toolState.getToolState)(eventData.element, this.name);

      if (handle.hasBoundingBox) {
        // Use default move handler.
        (0, _findAndMoveHelpers.moveHandleNearImagePoint)(evt, handle, data, this.name);

        return;
      }

      var config = this.configuration;

      var nearby = this._pointNearHandleAllTools(eventData);
      var handleNearby = nearby.handleNearby;
      var toolIndex = nearby.toolIndex;

      config.dragOrigin = {
        x: toolState.data[toolIndex].handles[handleNearby].x,
        y: toolState.data[toolIndex].handles[handleNearby].y
      };

      this._modifying = true;
      config.currentHandle = handleNearby;
      config.currentTool = toolIndex;

      this._activateModifty(element);

      // Interupt eventDispatchers
      _index.mutations.SET_IS_TOOL_LOCKED(true);

      preventPropagation(evt);
    }

    /**
    * Event handler for MOUSE_MOVE during drawing event loop.
    *
    * @event
    * @param {Object} evt - The event.
    */

  }, {
    key: '_drawingMouseMoveCallback',
    value: function _drawingMouseMoveCallback(evt) {
      var eventData = evt.detail;
      var element = eventData.element;
      var toolState = (0, _toolState.getToolState)(eventData.element, this.name);

      var config = this.configuration;
      var currentTool = config.currentTool;

      var data = toolState.data[currentTool];
      var coords = eventData.currentPoints.canvas;

      // Set the mouseLocation handle
      this._getMouseLocation(eventData);
      this._checkInvalidHandleLocation(data);

      if (this._activePencilMode) {
        this._addPointPencilMode(eventData, data.handles);
      } else {
        // Polygon Mode
        var handleNearby = this._pointNearHandle(element, data, coords);

        // If there is a handle nearby to snap to
        // (and it's not the actual mouse handle)
        if (handleNearby !== undefined && !handleNearby.hasBoundingBox && handleNearby < data.handles.length - 1) {
          config.mouseLocation.handles.start.x = data.handles[handleNearby].x;
          config.mouseLocation.handles.start.y = data.handles[handleNearby].y;
        }
      }

      // Force onImageRendered
      _externalModules2.default.cornerstone.updateImage(eventData.element);
    }

    /**
    * Event handler for MOUSE_DOWN during drawing event loop.
    *
    * @event
    * @param {Object} evt - The event.
    */

  }, {
    key: '_drawingMouseDownCallback',
    value: function _drawingMouseDownCallback(evt) {
      var eventData = evt.detail;
      var element = eventData.element;
      var coords = eventData.currentPoints.canvas;

      var config = this.configuration;
      var currentTool = config.currentTool;
      var toolState = (0, _toolState.getToolState)(eventData.element, this.name);
      var data = toolState.data[currentTool];

      var handleNearby = this._pointNearHandle(element, data, coords);

      if (!_freehandIntersect2.default.end(data.handles) && data.canComplete) {
        var lastHandlePlaced = config.currentHandle;

        this._endDrawing(eventData, lastHandlePlaced);
      } else if (handleNearby === undefined) {
        this._addPoint(eventData);
      }

      preventPropagation(evt);

      return;
    }

    /**
    * Event handler for MOUSE_DRAG during handle drag event loop.
    *
    * @event
    * @param {Object} evt - The event.
    */

  }, {
    key: '_editMouseDragCallback',
    value: function _editMouseDragCallback(evt) {
      var eventData = evt.detail;
      var toolState = (0, _toolState.getToolState)(eventData.element, this.name);

      var config = this.configuration;
      var data = toolState.data[config.currentTool];
      var currentHandle = config.currentHandle;

      // Set the mouseLocation handle
      this._getMouseLocation(eventData);

      data.handles.invalidHandlePlacement = _freehandIntersect2.default.modify(data.handles, currentHandle);
      data.active = true;
      data.highlight = true;
      data.handles[currentHandle].x = config.mouseLocation.handles.start.x;
      data.handles[currentHandle].y = config.mouseLocation.handles.start.y;

      if (currentHandle !== 0) {
        var lastLineIndex = data.handles[currentHandle - 1].lines.length - 1;
        var lastLine = data.handles[currentHandle - 1].lines[lastLineIndex];

        lastLine.x = config.mouseLocation.handles.start.x;
        lastLine.y = config.mouseLocation.handles.start.y;
      }

      // Update the image
      _externalModules2.default.cornerstone.updateImage(eventData.element);
    }

    /**
    * Event handler for MOUSE_UP during handle drag event loop.
    *
    * @param {Object} evt - The event.
    */

  }, {
    key: '_editMouseUpCallback',
    value: function _editMouseUpCallback(evt) {
      var eventData = evt.detail;
      var element = eventData.element;
      var toolState = (0, _toolState.getToolState)(eventData.element, this.name);

      this._deactivateModify(element);

      this._dropHandle(eventData, toolState);
      this._endDrawing(eventData);

      _index.mutations.SET_IS_TOOL_LOCKED(false);

      _externalModules2.default.cornerstone.updateImage(eventData.element);
    }

    /**
    * Places a handle of the freehand tool if the new location is valid.
    * If the new location is invalid the handle snaps back to its previous position.
    *
    * @param {Object} eventData - Data object associated with the event.
    * @param {Object} toolState - The data associated with the freehand tool.
    * @modifies {toolState}
    */

  }, {
    key: '_dropHandle',
    value: function _dropHandle(eventData, toolState) {
      var config = this.configuration;
      var currentTool = config.currentTool;

      var dataHandles = toolState.data[currentTool].handles;

      // Don't allow the line being modified to intersect other lines
      if (dataHandles.invalidHandlePlacement) {
        var currentHandle = config.currentHandle;
        var currentHandleData = dataHandles[currentHandle];
        var previousHandleData = void 0;

        if (currentHandle === 0) {
          var lastHandleID = dataHandles.length - 1;

          previousHandleData = dataHandles[lastHandleID];
        } else {
          previousHandleData = dataHandles[currentHandle - 1];
        }

        // Snap back to previous position
        currentHandleData.x = config.dragOrigin.x;
        currentHandleData.y = config.dragOrigin.y;
        previousHandleData.lines[0] = currentHandleData;

        dataHandles.invalidHandlePlacement = false;
      }
    }

    /**
    * Begining of drawing loop when tool is active and a click event happens far
    * from existing handles.
    *
    * @private
    * @param {Object} eventData - data object associated with an event.
    */

  }, {
    key: '_startDrawing',
    value: function _startDrawing(eventData) {
      var measurementData = this.createNewMeasurement(eventData);
      var element = eventData.element;
      var config = this.configuration;

      // Block event distpatcher whilst drawing
      _index.mutations.SET_IS_TOOL_LOCKED(true);

      this._referencedElement = element;

      this._activateDraw(element);
      this._getMouseLocation(eventData);

      (0, _toolState.addToolState)(eventData.element, this.name, measurementData);

      var toolState = (0, _toolState.getToolState)(eventData.element, this.name);

      config.currentTool = toolState.data.length - 1;
    }

    /**
    * Adds a point on mouse click in polygon mode.
    *
    * @private
    * @param {Object} eventData - data object associated with an event.
    */

  }, {
    key: '_addPoint',
    value: function _addPoint(eventData) {
      var toolState = (0, _toolState.getToolState)(eventData.element, this.name);

      // Get the toolState from the last-drawn polygon
      var config = this.configuration;
      var data = toolState.data[config.currentTool];

      if (data.handles.invalidHandlePlacement) {
        return;
      }

      var newHandleData = new _FreehandHandleData.FreehandHandleData(eventData.currentPoints.image);

      // If this is not the first handle
      if (data.handles.length) {
        // Add the line from the current handle to the new handle
        data.handles[config.currentHandle - 1].lines.push(eventData.currentPoints.image);
      }

      // Add the new handle
      data.handles.push(newHandleData);

      // Increment the current handle value
      config.currentHandle += 1;

      // Force onImageRendered to fire
      _externalModules2.default.cornerstone.updateImage(eventData.element);
    }

    /**
    * If in pencilMode, check the mouse position is farther than the minimum
    * distance between points, then add a point.
    *
    * @private
    * @param {Object} eventData - Data object associated with an event.
    * @param {Object} dataHandles - Data object associated with the tool.
    */

  }, {
    key: '_addPointPencilMode',
    value: function _addPointPencilMode(eventData, dataHandles) {
      var config = this.configuration;
      var mousePoint = config.mouseLocation.handles.start;

      function handleFurtherThanMinimumSpacing(handle) {
        return _externalModules2.default.cornerstoneMath.point.distance(handle, mousePoint) > config.spacing;
      }

      if (dataHandles.every(handleFurtherThanMinimumSpacing)) {
        this._addPoint(eventData);
      }
    }

    /**
    * Ends the active drawing loop and completes the polygon.
    *
    * @private
    * @param {Object} eventData - data object associated with an event.
    * @param {Object} handleNearby - the handle nearest to the mouse cursor.
    */

  }, {
    key: '_endDrawing',
    value: function _endDrawing(eventData, handleNearby) {
      var toolState = (0, _toolState.getToolState)(eventData.element, this.name);

      var config = this.configuration;

      var data = toolState.data[config.currentTool];

      data.active = false;
      data.highlight = false;
      data.handles.invalidHandlePlacement = false;

      // Connect the end handle to the origin handle
      if (handleNearby !== undefined) {
        data.handles[config.currentHandle - 1].lines.push(data.handles[0]);
      }

      if (this._modifying) {
        this._modifying = false;
        data.invalidated = true;
      }

      // Reset the current handle
      config.currentHandle = 0;
      config.currentTool = -1;
      this._activePencilMode = false;
      data.canComplete = false;

      if (this._drawing) {
        this._drawing = false;
        _index.mutations.SET_IS_TOOL_LOCKED(false);
        this._deactivateDraw(eventData.element);
      }

      _externalModules2.default.cornerstone.updateImage(eventData.element);
    }

    /**
    * Returns a handle of a particular tool if it is close to the mouse cursor
    *
    * @private
    * @param {Object} eventData - data object associated with an event.
    * @param {Number} toolIndex - the ID of the tool
    * @return {Number|Object|Boolean}
    */

  }, {
    key: '_pointNearHandle',
    value: function _pointNearHandle(element, data, coords) {
      var config = this.configuration;

      if (data.handles === undefined) {
        return;
      }

      if (data.visible === false) {
        return;
      }

      for (var i = 0; i < data.handles.length; i++) {
        var handleCanvas = _externalModules2.default.cornerstone.pixelToCanvas(element, data.handles[i]);

        if (_externalModules2.default.cornerstoneMath.point.distance(handleCanvas, coords) < config.spacing) {
          return i;
        }
      }

      // Check to see if mouse in bounding box of textbox
      if (data.handles.textBox) {
        if ((0, _pointInsideBoundingBox2.default)(data.handles.textBox, coords)) {
          return data.handles.textBox;
        }
      }
    }

    /**
    * Returns a handle if it is close to the mouse cursor (all tools)
    *
    * @private
    * @param {Object} eventData - data object associated with an event.
    * @return {Object}
    */

  }, {
    key: '_pointNearHandleAllTools',
    value: function _pointNearHandleAllTools(eventData) {
      var element = eventData.element;
      var coords = eventData.currentPoints.canvas;
      var toolState = (0, _toolState.getToolState)(element, this.name);

      if (!toolState) {
        return;
      }

      var handleNearby = void 0;

      for (var toolIndex = 0; toolIndex < toolState.data.length; toolIndex++) {
        handleNearby = this._pointNearHandle(element, toolState.data[toolIndex], coords);
        if (handleNearby !== undefined) {
          return {
            handleNearby: handleNearby,
            toolIndex: toolIndex
          };
        }
      }
    }

    /**
    * Gets the current mouse location and stores it in the configuration object.
    *
    * @private
    * @param {Object} eventData - The data assoicated with the event.
    */

  }, {
    key: '_getMouseLocation',
    value: function _getMouseLocation(eventData) {
      // Set the mouseLocation handle
      var config = this.configuration;

      config.mouseLocation.handles.start.x = eventData.currentPoints.image.x;
      config.mouseLocation.handles.start.y = eventData.currentPoints.image.y;
      (0, _clip.clipToBox)(config.mouseLocation.handles.start, eventData.image);
    }

    /**
    * Returns true if the proposed location of a new handle is invalid.
    *
    * @private
    * @param {Object} data - data object associated with the tool.
    * @return {Boolean}
    */

  }, {
    key: '_checkInvalidHandleLocation',
    value: function _checkInvalidHandleLocation(data) {
      var config = this.configuration;

      if (data.handles.length < 2) {
        return true;
      }

      var invalidHandlePlacement = void 0;

      if (this._activePencilMode) {
        // Pencil mode
        invalidHandlePlacement = this._checkHandlesPencilMode(data);
      } else {
        // Polygon mode
        invalidHandlePlacement = this._checkHandlesPolygonMode(data);
      }

      data.handles.invalidHandlePlacement = invalidHandlePlacement;
    }

    /**
    * Returns true if the proposed location of a new handle is invalid (in polygon mode).
    *
    * @param {Object} data - data object associated with the tool.
    * @return {Boolean}
    */

  }, {
    key: '_checkHandlesPolygonMode',
    value: function _checkHandlesPolygonMode(data) {
      var config = this.configuration;
      var mousePoint = config.mouseLocation.handles.start;
      var dataHandles = data.handles;
      var invalidHandlePlacement = false;

      data.canComplete = false;

      var mouseAtOriginHandle = _externalModules2.default.cornerstoneMath.point.distance(dataHandles[0], mousePoint) < config.spacing;

      if (mouseAtOriginHandle && !_freehandIntersect2.default.end(dataHandles)) {
        data.canComplete = true;
        invalidHandlePlacement = false;
      } else {
        invalidHandlePlacement = _freehandIntersect2.default.newHandle(mousePoint, dataHandles);
      }

      return invalidHandlePlacement;
    }

    /**
    * Returns true if the proposed location of a new handle is invalid (in pencilMode).
    *
    * @private
    * @param {Object} data - data object associated with the tool.
    * @return {Boolean}
    */

  }, {
    key: '_checkHandlesPencilMode',
    value: function _checkHandlesPencilMode(data) {
      var config = this.configuration;
      var mousePoint = config.mouseLocation.handles.start;
      var dataHandles = data.handles;
      var invalidHandlePlacement = _freehandIntersect2.default.newHandle(mousePoint, dataHandles);

      if (invalidHandlePlacement === false) {
        invalidHandlePlacement = this._invalidHandlePencilMode(data, mousePoint);
      }

      return invalidHandlePlacement;
    }

    /**
    * Returns true if the mouse position is far enough from previous points (in pencilMode).
    *
    * @private
    * @param {Object} data - data object associated with the tool.
    * @param {Object} mousePoint - the position of the mouse cursor.
    * @return {Boolean}
    */

  }, {
    key: '_invalidHandlePencilMode',
    value: function _invalidHandlePencilMode(data, mousePoint) {
      var config = this.configuration;
      var dataHandles = data.handles;

      if (_externalModules2.default.cornerstoneMath.point.distance(dataHandles[0], mousePoint) < config.spacing) {
        data.canComplete = true;

        return false;
      }

      data.canComplete = false;

      // Compare with all other handles appart from the last one
      for (var i = 1; i < dataHandles.length - 1; i++) {
        if (_externalModules2.default.cornerstoneMath.point.distance(dataHandles[i], mousePoint) < config.spacing) {
          return true;
        }
      }

      return false;
    }

    /**
    * Adds drawing loop event listeners.
    *
    * @private
    * @param {Object} element - The viewport element to add event listeners to.
    * @modifies {element}
    */

  }, {
    key: '_activateDraw',
    value: function _activateDraw(element) {
      element.addEventListener(_events2.default.MOUSE_DOWN, this._drawingMouseDownCallback);
      element.addEventListener(_events2.default.MOUSE_MOVE, this._drawingMouseMoveCallback);

      _externalModules2.default.cornerstone.updateImage(element);
    }

    /**
    * Removes drawing loop event listeners.
    *
    * @private
    * @param {Object} element - The viewport element to add event listeners to.
    * @modifies {element}
    */

  }, {
    key: '_deactivateDraw',
    value: function _deactivateDraw(element) {
      element.removeEventListener(_events2.default.MOUSE_DOWN, this._drawingMouseDownCallback);
      element.removeEventListener(_events2.default.MOUSE_MOVE, this._drawingMouseMoveCallback);

      _externalModules2.default.cornerstone.updateImage(element);
    }

    /**
    * Adds modify loop event listeners.
    *
    * @private
    * @param {Object} element - The viewport element to add event listeners to.
    * @modifies {element}
    */

  }, {
    key: '_activateModifty',
    value: function _activateModifty(element) {
      element.addEventListener(_events2.default.MOUSE_UP, this._editMouseUpCallback);
      element.addEventListener(_events2.default.MOUSE_DRAG, this._editMouseDragCallback);
      element.addEventListener(_events2.default.MOUSE_CLICK, this._editMouseUpCallback);

      _externalModules2.default.cornerstone.updateImage(element);
    }

    /**
    * Removes modify loop event listeners.
    *
    * @private
    * @param {Object} element - The viewport element to add event listeners to.
    * @modifies {element}
    */

  }, {
    key: '_deactivateModify',
    value: function _deactivateModify(element) {
      element.removeEventListener(_events2.default.MOUSE_UP, this._editMouseUpCallback);
      element.removeEventListener(_events2.default.MOUSE_DRAG, this._editMouseDragCallback);
      element.removeEventListener(_events2.default.MOUSE_CLICK, this._editMouseUpCallback);

      _externalModules2.default.cornerstone.updateImage(element);
    }

    //===================================================================
    // Public Configuration API. .
    //===================================================================

  }, {
    key: 'spacing',
    get: function get() {
      return this.configuration.spacing;
    },
    set: function set(value) {
      if (typeof value !== 'number') {
        throw new Error('Attempting to set freehand spacing to a value other than a number.');
      }

      this.configuration.spacing = value;
      _externalModules2.default.cornerstone.updateImage(this.element);
    }
  }, {
    key: 'activeHandleRadius',
    get: function get() {
      return this.configuration.activeHandleRadius;
    },
    set: function set(value) {
      if (typeof value !== 'number') {
        throw new Error('Attempting to set freehand activeHandleRadius to a value other than a number.');
      }

      this.configuration.activeHandleRadius = value;
      _externalModules2.default.cornerstone.updateImage(this.element);
    }
  }, {
    key: 'completeHandleRadius',
    get: function get() {
      return this.configuration.completeHandleRadius;
    },
    set: function set(value) {
      if (typeof value !== 'number') {
        throw new Error('Attempting to set freehand completeHandleRadius to a value other than a number.');
      }

      this.configuration.completeHandleRadius = value;
      _externalModules2.default.cornerstone.updateImage(this.element);
    }
  }, {
    key: 'alwaysShowHandles',
    get: function get() {
      return this.configuration.alwaysShowHandles;
    },
    set: function set(value) {
      if (typeof value !== 'boolean') {
        throw new Error('Attempting to set freehand alwaysShowHandles to a value other than a boolean.');
      }

      this.configuration.alwaysShowHandles = value;
      _externalModules2.default.cornerstone.updateImage(this.element);
    }
  }, {
    key: 'invalidColor',
    get: function get() {
      return this.configuration.invalidColor;
    },
    set: function set(value) {
      /*
        It'd be easy to check if the color was e.g. a valid rgba color. However
        it'd be difficult to check if the color was a named CSS color without
        bloating the library, so we don't. If the canvas can't intepret the color
        it'll show up grey.
      */

      this.configuration.invalidColor = value;
      _externalModules2.default.cornerstone.updateImage(this.element);
    }
  }]);

  return FreehandMouseTool;
}(_BaseAnnotationTool3.default);

exports.default = FreehandMouseTool;


function defaultFreehandConfiguration() {
  return {
    mouseLocation: {
      handles: {
        start: {
          highlight: true,
          active: true
        }
      }
    },
    keyDown: {
      shift: false,
      ctrl: false,
      alt: false
    },
    spacing: 5,
    activeHandleRadius: 3,
    completeHandleRadius: 6,
    alwaysShowHandles: false,
    invalidColor: 'crimson',
    currentHandle: 0,
    currentTool: -1
  };
}

function preventPropagation(evt) {
  evt.stopImmediatePropagation();
  evt.stopPropagation();
  evt.preventDefault();
}

/***/ }),

/***/ "./tools/FreehandSculpterMouseTool.js":
/*!********************************************!*\
  !*** ./tools/FreehandSculpterMouseTool.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _toolColors = __webpack_require__(/*! ../stateManagement/toolColors.js */ "./stateManagement/toolColors.js");

var _toolColors2 = _interopRequireDefault(_toolColors);

var _drawHandles = __webpack_require__(/*! ../manipulators/drawHandles.js */ "./manipulators/drawHandles.js");

var _drawHandles2 = _interopRequireDefault(_drawHandles);

var _index = __webpack_require__(/*! ../store/index.js */ "./store/index.js");

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _clip = __webpack_require__(/*! ../util/clip.js */ "./util/clip.js");

var _FreehandHandleData = __webpack_require__(/*! ./shared/freehandUtils/FreehandHandleData.js */ "./tools/shared/freehandUtils/FreehandHandleData.js");

var _getToolForElement = __webpack_require__(/*! ../store/getToolForElement.js */ "./store/getToolForElement.js");

var _getToolForElement2 = _interopRequireDefault(_getToolForElement);

var _BaseTool2 = __webpack_require__(/*! ../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-underscore-dangle: 0 */


var FreehandSculpterMouseTool = function (_BaseTool) {
  _inherits(FreehandSculpterMouseTool, _BaseTool);

  function FreehandSculpterMouseTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'FreehandSculpterMouse';
    var referencedToolName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'FreehandMouse';

    _classCallCheck(this, FreehandSculpterMouseTool);

    var _this = _possibleConstructorReturn(this, (FreehandSculpterMouseTool.__proto__ || Object.getPrototypeOf(FreehandSculpterMouseTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse'],
      configuration: getDefaultFreehandSculpterMouseToolConfiguration()
    }));

    _this.hasCursor = true;
    _this.referencedToolName = referencedToolName;

    _this._active = false;

    // Create bound functions for private event loop.
    _this.activeMouseUpCallback = _this.activeMouseUpCallback.bind(_this);
    _this.activeMouseDragCallback = _this.activeMouseDragCallback.bind(_this);
    return _this;
  }

  /**
  * Event handler for IMAGE_RENDERED event.
  *
  * @event
  * @param {Object} evt - The event.
  */


  _createClass(FreehandSculpterMouseTool, [{
    key: 'renderToolData',
    value: function renderToolData(evt) {
      var eventData = evt.detail;
      var config = this.configuration;

      if (config.currentTool === null) {
        return false;
      }

      if (this._active) {
        var context = eventData.canvasContext.canvas.getContext('2d');
        var options = {
          fill: null,
          handleRadius: this._toolSizeCanvas
        };

        (0, _drawHandles2.default)(context, eventData, config.mouseLocation.handles, config.dragColor, options);
      } else if (config.showCursorOnHover) {
        this._renderHoverCursor(evt);
      }
    }

    /**
    * Event handler for MOUSE_DOWN.
    *
    * @param {Object} evt - The event.
    */

  }, {
    key: 'preMouseDownCallback',
    value: function preMouseDownCallback(evt) {
      var eventData = evt.detail;
      var config = this.configuration;

      var imageNeedsUpdate = false;

      if (eventData.event.ctrlKey) {
        // Select
        this._selectFreehandTool(eventData);
        imageNeedsUpdate = true;
      } else if (config.currentTool !== null) {
        // Drag
        this._initialiseSculpting(eventData);
        imageNeedsUpdate = true;
      }

      if (imageNeedsUpdate) {
        // Force onImageRendered
        _externalModules2.default.cornerstone.updateImage(eventData.element);

        return true;
      }

      return false;
    }

    /**
    * Event handler for MOUSE_DRAG during the active loop.
    *
    * @event
    * @param {Object} evt - The event.
    */

  }, {
    key: 'activeMouseDragCallback',
    value: function activeMouseDragCallback(evt) {
      var config = this.configuration;

      if (!this._active) {
        return;
      }

      var eventData = evt.detail;
      var toolState = (0, _toolState.getToolState)(eventData.element, this.referencedToolName);

      if (!toolState) {
        return;
      }

      var dataHandles = toolState.data[config.currentTool].handles;

      // Set the mouseLocation handle
      this._getMouseLocation(eventData);
      this._sculpt(eventData, dataHandles);

      // Update the image
      _externalModules2.default.cornerstone.updateImage(eventData.element);
    }

    /**
    * Event handler for MOUSE_UP during the active loop.
    *
    * @param {Object} evt - The event.
    */

  }, {
    key: 'activeMouseUpCallback',
    value: function activeMouseUpCallback(evt) {
      var eventData = evt.detail;
      var element = eventData.element;
      var config = this.configuration;

      this._active = false;

      _index.mutations.SET_IS_TOOL_LOCKED(false);

      this._getMouseLocation(eventData);
      this._invalidateToolData(eventData);

      config.mouseUpRender = true;

      this._deactivateSculpt(element);

      // Update the image
      _externalModules2.default.cornerstone.updateImage(eventData.element);

      preventPropagation(evt);
    }

    /**
     * Renders the cursor
     *
     * @private
     * @param  {type} evt description
     */

  }, {
    key: '_renderHoverCursor',
    value: function _renderHoverCursor(evt) {
      var eventData = evt.detail;
      var element = eventData.element;
      var config = this.configuration;
      var context = eventData.canvasContext.canvas.getContext('2d');

      var toolState = (0, _toolState.getToolState)(element, this.referencedToolName);
      var data = toolState.data[config.currentTool];

      var coords = void 0;

      if (config.mouseUpRender) {
        coords = config.mouseLocation.handles.start;
        config.mouseUpRender = false;
      } else {
        coords = _index.getters.mousePositionImage();
      }

      var freehandMouseTool = (0, _getToolForElement2.default)(element, this.referencedToolName);
      var radiusCanvas = freehandMouseTool.distanceFromPointCanvas(element, data, coords);

      config.mouseLocation.handles.start.x = coords.x;
      config.mouseLocation.handles.start.y = coords.y;

      if (config.limitRadiusOutsideRegion) {
        var unlimitedRadius = radiusCanvas;

        radiusCanvas = this._limitCursorRadiusCanvas(eventData, radiusCanvas);

        // Fade if distant
        if (unlimitedRadius > config.hoverCursorFadeDistance * radiusCanvas) {
          context.globalAlpha = config.hoverCursorFadeAlpha;
        }
      }

      var options = {
        fill: null,
        handleRadius: radiusCanvas
      };

      (0, _drawHandles2.default)(context, eventData, config.mouseLocation.handles, config.hoverColor, options);

      if (config.limitRadiusOutsideRegion) {
        context.globalAlpha = 1.0; // Reset drawing alpha for other draw calls.
      }
    }

    /**
    * Event handler for NEW_IMAGE event.
    *
    * @public
    * @param {Object} evt - The event.
    */

  }, {
    key: 'newImageCallback',
    value: function newImageCallback(evt) {
      this._deselectAllTools(evt);
    }

    /**
    * Event handler for switching mode to enabled.
    *
    * @public
    * @param {Object} evt - The event.
    */

  }, {
    key: 'enabledCallback',
    value: function enabledCallback(evt) {
      this._deselectAllTools(evt);
    }

    /**
    * Event handler for switching mode to passive.
    *
    * @public
    * @param {Object} evt - The event.
    */

  }, {
    key: 'passiveCallback',
    value: function passiveCallback(evt) {
      this._deselectAllTools(evt);
    }

    /**
    * Event handler for switching mode to disabled.
    *
    * @public
    * @param {Object} evt - The event.
    */

  }, {
    key: 'disabledCallback',
    value: function disabledCallback(evt) {
      this._deselectAllTools(evt);
    }

    /**
    * Select the freehand tool to be edited.
    *
    * @private
    * @param {Object} eventData - Data object associated with the event.
    */

  }, {
    key: '_selectFreehandTool',
    value: function _selectFreehandTool(eventData) {
      var config = this.configuration;
      var element = eventData.element;
      var closestToolIndex = this._getClosestFreehandToolOnElement(element, eventData);

      if (closestToolIndex === undefined) {
        return;
      }

      config.currentTool = closestToolIndex;
    }

    /**
    * Activate the selected freehand tool and deactivate others.
    *
    * @private
    * @param {Object} element - The parent element of the freehand tool.
    * @param {Number} toolIndex - The ID of the freehand tool.
    */

  }, {
    key: '_activateFreehandTool',
    value: function _activateFreehandTool(element, toolIndex) {
      var toolState = (0, _toolState.getToolState)(element, this.referencedToolName);
      var data = toolState.data;
      var config = this.configuration;

      config.currentTool = toolIndex;

      for (var i = 0; i < data.length; i++) {
        if (i === toolIndex) {
          data[i].active = true;
        } else {
          data[i].active = false;
        }
      }
    }

    /**
    * Choose the tool radius from the mouse position relative to the active freehand
    * tool, and begin sculpting.
    *
    * @private
    * @param {Object} eventData - Data object associated with the event.
    */

  }, {
    key: '_initialiseSculpting',
    value: function _initialiseSculpting(eventData) {
      var element = eventData.element;
      var config = this.configuration;

      this._active = true;

      // Interupt event dispatcher
      _index.mutations.SET_IS_TOOL_LOCKED(true);

      this._configureToolSize(eventData);
      this._getMouseLocation(eventData);

      this._activateFreehandTool(element, config.currentTool);
      this._activateSculpt(element);
    }

    /**
    * Sculpts the freehand ROI with the circular freehandSculpter tool, moving,
    * adding and removing handles as necessary.
    *
    * @private
    * @param {Object} eventData - Data object associated with the event.
    * @param {Object} dataHandles - Data object containing tool handle data.
    */

  }, {
    key: '_sculpt',
    value: function _sculpt(eventData, dataHandles) {
      var config = this.configuration;

      var sculptData = {
        element: eventData.element,
        image: eventData.image,
        mousePoint: eventData.currentPoints.image,
        dataHandles: dataHandles,
        toolSize: this._toolSizeImage,
        minSpacing: config.minSpacing,
        maxSpacing: config.maxSpacing
      };

      // Push existing handles radially away from tool.
      this._pushHandles(sculptData);
      // Insert new handles in sparsely populated areas.
      this._insertNewHandles(sculptData);
      // If any handles have been pushed very close together or even overlap,
      // Combine these into a single handle.
      this._consolidateHandles(sculptData);
    }

    /**
    * Pushes the handles in dataHandles radially away from the mouse if they are
    * contained within the circle defined by the freehandSculpter's toolSize and
    * the mouse position.
    *
    * @private
    * @param {Object} sculptData - Data object associated with the sculpt event.
    */

  }, {
    key: '_pushHandles',
    value: function _pushHandles(sculptData) {
      var dataHandles = sculptData.dataHandles;
      var mousePoint = sculptData.mousePoint;
      var toolSize = sculptData.toolSize;

      for (var i = 0; i < dataHandles.length; i++) {

        var distanceToHandle = _externalModules2.default.cornerstoneMath.point.distance(dataHandles[i], mousePoint);

        // Push point if inside circle, to edge of circle.
        if (distanceToHandle < toolSize) {
          this._pushOneHandle(sculptData, i, distanceToHandle);
        }
      }
    }

    /**
    * Pushes one handle.
    *
    * @private
    * @param {Object} sculptData - Data object associated with the sculpt event.
    * @param {Number} i - The index of the handle to push.
    * @param {Number} distanceToHandle - The distance between the mouse cursor and the handle.
    */

  }, {
    key: '_pushOneHandle',
    value: function _pushOneHandle(sculptData, i, distanceToHandle) {
      var dataHandles = sculptData.dataHandles;
      var handle = dataHandles[i];
      var mousePoint = sculptData.mousePoint;
      var toolSize = sculptData.toolSize;
      var image = sculptData.image;

      var directionUnitVector = {
        x: (handle.x - mousePoint.x) / distanceToHandle,
        y: (handle.y - mousePoint.y) / distanceToHandle
      };

      var position = {
        x: mousePoint.x + toolSize * directionUnitVector.x,
        y: mousePoint.y + toolSize * directionUnitVector.y
      };

      (0, _clip.clipToBox)(position, image);

      handle.x = position.x;
      handle.y = position.y;

      // Push lines
      var lastHandleIndex = this.constructor._getPreviousHandleIndex(i, dataHandles.length);

      dataHandles[lastHandleIndex].lines.pop();
      dataHandles[lastHandleIndex].lines.push(handle);
    }

    /**
    * Inserts additional handles in sparsely sampled regions of the contour. The
    * new handles are placed on the circle defined by the the freehandSculpter's
    * toolSize and the mouse position.
    * @private
    * @param {Object} sculptData - Data object associated with the sculpt event.
    */

  }, {
    key: '_insertNewHandles',
    value: function _insertNewHandles(sculptData) {
      var indiciesToInsertAfter = this._findNewHandleIndicies(sculptData);
      var newIndexModifier = 0;

      for (var i = 0; i < indiciesToInsertAfter.length; i++) {
        var insertIndex = indiciesToInsertAfter[i] + 1 + newIndexModifier;

        this._insertHandleRadially(sculptData, insertIndex); // TODO
        newIndexModifier++;
      }
    }

    /**
    * Returns an array of indicies that describe where new handles should be
    * inserted (where the distance between subsequent handles is >
    * config.maxSpacing).
    *
    * @private
    * @param {Object} sculptData - Data object associated with the sculpt event.
    * @return {Object} An array of indicies that describe where new handles should be inserted.
    */

  }, {
    key: '_findNewHandleIndicies',
    value: function _findNewHandleIndicies(sculptData) {
      var element = sculptData.element;
      var dataHandles = sculptData.dataHandles;

      var indiciesToInsertAfter = [];

      for (var i = 0; i < dataHandles.length; i++) {
        var handleCanvas = _externalModules2.default.cornerstone.pixelToCanvas(element, dataHandles[i]);
        var nextHandleIndex = this.constructor._getNextHandleIndex(i, dataHandles.length);

        var nextHandleCanvas = _externalModules2.default.cornerstone.pixelToCanvas(element, dataHandles[nextHandleIndex]);
        var distanceToNextHandleCanvas = _externalModules2.default.cornerstoneMath.point.distance(handleCanvas, nextHandleCanvas);

        if (distanceToNextHandleCanvas > sculptData.maxSpacing) {
          indiciesToInsertAfter.push(i);
        }
      }

      return indiciesToInsertAfter;
    }

    /**
    * Inserts a handle on the surface of the circle defined by toolSize and the
    * mousePoint.
    *
    * @private
    * @param {Object} sculptData - Data object associated with the sculpt event.
    * @param {Object} insertIndex - The index to insert the new handle.
    */

  }, {
    key: '_insertHandleRadially',
    value: function _insertHandleRadially(sculptData, insertIndex) {
      var dataHandles = sculptData.dataHandles;

      var previousIndex = insertIndex - 1;
      var nextIndex = this.constructor._getNextHandleIndexBeforeInsert(insertIndex, dataHandles.length);
      var insertPosition = this.constructor._getInsertPosition(sculptData, insertIndex, previousIndex, nextIndex);
      var handleData = new _FreehandHandleData.FreehandHandleData(insertPosition);

      dataHandles.splice(insertIndex, 0, handleData);

      // Add the line from the previous handle to the inserted handle (note the tool is now one increment longer)
      dataHandles[previousIndex].lines.pop();
      dataHandles[previousIndex].lines.push(dataHandles[insertIndex]);

      // Add the line from the inserted handle to the handle after
      if (insertIndex === dataHandles.length - 1) {
        dataHandles[insertIndex].lines.push(dataHandles[0]);
      } else {
        dataHandles[insertIndex].lines.push(dataHandles[insertIndex + 1]);
      }
    }

    /**
    * Checks dataHandles for any very close handles and consolidates these to a
    * single handle.
    *
    * @private
    * @param {Object} sculptData - Data object associated with the sculpt event.
    */

  }, {
    key: '_consolidateHandles',
    value: function _consolidateHandles(sculptData) {
      var dataHandles = sculptData.dataHandles;

      if (dataHandles.length > 3) {
        // Don't merge handles if it would destroy the polygon.
        var closePairs = this._findCloseHandlePairs(sculptData);

        this._mergeCloseHandles(sculptData, closePairs);
      }
    }

    /**
    * Finds pairs of close handles with seperations < config.minSpacing. No handle
    * is included in more than one pair, to avoid spurious deletion of densely
    * populated regions of the contour (see mergeCloseHandles).
    *
    * @private
    * @param {Object} sculptData - Data object associated with the sculpt event.
    * @return {Object} An array of close pairs in dataHandles.
    */

  }, {
    key: '_findCloseHandlePairs',
    value: function _findCloseHandlePairs(sculptData) {
      var dataHandles = sculptData.dataHandles;
      var element = sculptData.element;
      var minSpacing = sculptData.minSpacing;

      var closePairs = [];

      var length = dataHandles.length;

      for (var i = 0; i < length; i++) {
        var handleCanvas = _externalModules2.default.cornerstone.pixelToCanvas(element, dataHandles[i]);
        var nextHandleIndex = this.constructor._getNextHandleIndex(i, dataHandles.length);

        var nextHandleCanvas = _externalModules2.default.cornerstone.pixelToCanvas(element, dataHandles[nextHandleIndex]);
        var distanceToNextHandleCanvas = _externalModules2.default.cornerstoneMath.point.distance(handleCanvas, nextHandleCanvas);

        if (distanceToNextHandleCanvas < minSpacing) {
          var pair = [i, nextHandleIndex];

          closePairs.push(pair);

          // Don't check last node if first in pair to avoid double counting.
          if (i === 0) {
            length -= 1;
          }

          // Don't double count pairs in order to prevent your polygon collapsing to a singularity.
          i++;
        }
      }

      return closePairs;
    }

    /**
    * Merges handles in dataHandles given a list of close pairs. The handles are
    * merged in an iterative fashion to prevent generating a singularity in some
    * edge cases.
    *
    * @private
    * @param {Object} sculptData - Data object associated with the sculpt event.
    * @param {Object} closePairs - An array of pairs of handle indicies.
    */

  }, {
    key: '_mergeCloseHandles',
    value: function _mergeCloseHandles(sculptData, closePairs) {
      var removedIndexModifier = 0;

      for (var i = 0; i < closePairs.length; i++) {
        var pair = this.constructor._getCorrectedPair(closePairs[i], removedIndexModifier);

        this._combineHandles(sculptData, pair);
        removedIndexModifier++;
      }

      // Recursively remove problem childs
      var newClosePairs = this._findCloseHandlePairs(sculptData);

      if (newClosePairs.length) {
        this._mergeCloseHandles(sculptData, newClosePairs);
      }
    }

    /**
    * Combines two handles defined by the indicies in handlePairs.
    *
    * @private
    * @param {Object} sculptData - Data object associated with the sculpt event.
    * @param {Object} handlePair - A pair of handle indicies.
    */

  }, {
    key: '_combineHandles',
    value: function _combineHandles(sculptData, handlePair) {
      var dataHandles = sculptData.dataHandles;
      var image = sculptData.image;

      // Calculate combine position: half way between the handles.
      var midPoint = {
        x: (dataHandles[handlePair[0]].x + dataHandles[handlePair[1]].x) / 2.0,
        y: (dataHandles[handlePair[0]].y + dataHandles[handlePair[1]].y) / 2.0
      };

      (0, _clip.clipToBox)(midPoint, image);

      // Move first point to midpoint
      dataHandles[handlePair[0]].x = midPoint.x;
      dataHandles[handlePair[0]].y = midPoint.y;

      // Link first point to handle that second point links to.
      var handleAfterPairIndex = this.constructor._getNextHandleIndex(handlePair[1], dataHandles.length);

      dataHandles[handlePair[0]].lines.pop();
      dataHandles[handlePair[0]].lines.push(dataHandles[handleAfterPairIndex]);

      // Remove the latter handle
      dataHandles.splice(handlePair[1], 1);
    }

    /**
    * Calculates the distance to the closest handle in the tool, and stores the
    * result in this._toolSizeImage and this._toolSizeCanvas.
    *
    * @private
    * @param {Object} eventData - Data object associated with the event.
    */

  }, {
    key: '_configureToolSize',
    value: function _configureToolSize(eventData) {
      var element = eventData.element;
      var config = this.configuration;
      var toolIndex = config.currentTool;
      var coords = eventData.currentPoints.image;

      var toolState = (0, _toolState.getToolState)(element, this.referencedToolName);
      var data = toolState.data[toolIndex];

      var freehandMouseTool = (0, _getToolForElement2.default)(element, this.referencedToolName);

      var radiusImage = freehandMouseTool.distanceFromPoint(element, data, coords);
      var radiusCanvas = freehandMouseTool.distanceFromPointCanvas(element, data, coords);

      // Check if should limit maximum size.
      if (config.limitRadiusOutsideRegion) {
        radiusImage = this._limitCursorRadiusImage(eventData, radiusImage);
        radiusCanvas = this._limitCursorRadiusCanvas(eventData, radiusCanvas);
      }

      this._toolSizeImage = radiusImage;
      this._toolSizeCanvas = radiusCanvas;
    }

    /**
    * Gets the current mouse location and stores it in the configuration object.
    *
    * @private
    * @param {Object} eventData - The data assoicated with the event.
    */

  }, {
    key: '_getMouseLocation',
    value: function _getMouseLocation(eventData) {
      var config = this.configuration;

      config.mouseLocation.handles.start.x = eventData.currentPoints.image.x;
      config.mouseLocation.handles.start.y = eventData.currentPoints.image.y;
      (0, _clip.clipToBox)(config.mouseLocation.handles.start, eventData.image);
    }

    /**
    * Attaches event listeners to the element such that is is visible, modifiable, and new data can be created.
    *
    * @private
    * @param {Object} element - The viewport element to attach event listeners to.
    * @modifies {element}
    */

  }, {
    key: '_activateSculpt',
    value: function _activateSculpt(element) {
      this._deactivateSculpt(element);

      // Begin activeMouseDragCallback loop - call activeMouseUpCallback at end of drag or straight away if just a click.
      element.addEventListener(_events2.default.MOUSE_UP, this.activeMouseUpCallback);
      element.addEventListener(_events2.default.MOUSE_CLICK, this.activeMouseUpCallback);
      element.addEventListener(_events2.default.MOUSE_DRAG, this.activeMouseDragCallback);

      _externalModules2.default.cornerstone.updateImage(element);
    }

    /**
    * Removes event listeners from the element.
    *
    * @private
    * @param {Object} element - The viewport element to remove event listeners from.
    * @modifies {element}
    */

  }, {
    key: '_deactivateSculpt',
    value: function _deactivateSculpt(element) {
      element.removeEventListener(_events2.default.MOUSE_UP, this.activeMouseUpCallback);
      element.removeEventListener(_events2.default.MOUSE_CLICK, this.activeMouseUpCallback);
      element.removeEventListener(_events2.default.MOUSE_DRAG, this.activeMouseDragCallback);

      _externalModules2.default.cornerstone.updateImage(element);
    }

    /**
    * Invalidate the freehand tool data, tirggering re-calculation of statistics.
    *
    * @private
    * @param {Object} eventData - Data object associated with the event.
    */

  }, {
    key: '_invalidateToolData',
    value: function _invalidateToolData(eventData) {
      var config = this.configuration;
      var element = eventData.element;
      var toolData = (0, _toolState.getToolState)(element, this.referencedToolName);
      var data = toolData.data[config.currentTool];

      data.invalidated = true;
    }

    /**
    * Deactivates all freehand ROIs and change currentTool to null
    *
    * @private
    * @param {Object} evt - The event.
    */

  }, {
    key: '_deselectAllTools',
    value: function _deselectAllTools(evt) {
      var config = this.configuration;
      var toolData = (0, _toolState.getToolState)(this.element, this.referencedToolName);

      config.currentTool = null;

      if (toolData) {
        for (var i = 0; i < toolData.data.length; i++) {
          toolData.data[i].active = false;
        }
      }

      _externalModules2.default.cornerstone.updateImage(this.element);
    }

    /**
    * Given a pair of indicies, and the number of points already removed,
    * convert to the correct live indicies.
    *
    * @private
    * @static
    * @param {Object} pair A pairs of handle indicies.
    * @param {Number} removedIndexModifier The number of handles already removed.
    * @returns {Object} The corrected pair of handle indicies.
    */

  }, {
    key: '_limitCursorRadiusCanvas',


    /**
     * Limits the cursor radius so that it its maximum area is the same as the
     * ROI being sculpted (in canvas coordinates).
     *
     * @private
     * @param  {Object}  eventData    Data object associated with the event.
     * @param  {Number}  radius       The distance from the mouse to the ROI
     *                                in canvas coordinates.
     * @return {Number}               The limited radius in canvas coordinates.
     */
    value: function _limitCursorRadiusCanvas(eventData, radiusCanvas) {
      return this._limitCursorRadius(eventData, radiusCanvas, true);
    }

    /**
     * Limits the cursor radius so that it its maximum area is the same as the
     * ROI being sculpted (in image coordinates).
     *
     * @private
     * @param  {Object}  eventData    Data object associated with the event.
     * @param  {Number}  radius       The distance from the mouse to the ROI
     *                                in image coordinates.
     * @return {Number}               The limited radius in image coordinates.
     */

  }, {
    key: '_limitCursorRadiusImage',
    value: function _limitCursorRadiusImage(eventData, radiusImage) {
      return this._limitCursorRadius(eventData, radiusImage, false);
    }

    /**
     * Limits the cursor radius so that it its maximum area is the same as the
     * ROI being sculpted.
     *
     * @private
     * @param  {Object}  eventData    Data object associated with the event.
     * @param  {Number}  radius       The distance from the mouse to the ROI.
     * @param  {Boolean} canvasCoords Whether the calculation should be performed
     *                                In canvas coordinates.
     * @return {Number}               The limited radius.
     */

  }, {
    key: '_limitCursorRadius',
    value: function _limitCursorRadius(eventData, radius) {
      var canvasCoords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var element = eventData.element;
      var image = eventData.image;
      var config = this.configuration;

      var toolState = (0, _toolState.getToolState)(element, this.referencedToolName);
      var data = toolState.data[config.currentTool];

      var areaModifier = 1.0;

      if (canvasCoords) {
        var topLeft = _externalModules2.default.cornerstone.pixelToCanvas(element, {
          x: 0,
          y: 0
        });
        var bottomRight = _externalModules2.default.cornerstone.pixelToCanvas(element, {
          x: image.width,
          y: image.height
        });
        var canvasArea = (bottomRight.x - topLeft.x) * (bottomRight.y - topLeft.y);

        areaModifier = canvasArea / (image.width * image.height);
      }

      var area = data.area * areaModifier;
      var maxRadius = Math.pow(area / Math.PI, 0.5);

      return Math.min(radius, maxRadius);
    }

    /**
    * Finds the nearest handle to the mouse cursor for all freehand
    * data on the element.
    *
    * @private
    * @param {Object} element - The element.
    * @param {Object} eventData - Data object associated with the event.
    * @return {Number} The tool index of the closest freehand tool.
    */

  }, {
    key: '_getClosestFreehandToolOnElement',
    value: function _getClosestFreehandToolOnElement(element, eventData) {
      var freehand = (0, _getToolForElement2.default)(element, this.referencedToolName);
      var toolState = (0, _toolState.getToolState)(element, this.referencedToolName);

      if (!toolState) {
        return;
      }

      var data = toolState.data;
      var pixelCoords = eventData.currentPoints.image;

      var closest = {
        distance: Infinity,
        toolIndex: null
      };

      for (var i = 0; i < data.length; i++) {
        var distanceFromToolI = freehand.distanceFromPoint(element, data[i], pixelCoords);

        if (distanceFromToolI === -1) {
          continue;
        }

        if (distanceFromToolI < closest.distance) {
          closest.distance = distanceFromToolI;
          closest.toolIndex = i;
        }
      }

      return closest.toolIndex;
    }

    /**
    * Returns the next handle index.
    *
    * @private
    * @static
    * @param {Number} i - The handle index.
    * @param {Number} length - The length of the polygon.
    * @returns {Number} The next handle index.
    */

  }, {
    key: 'minSpacing',


    //===================================================================
    // Public Configuration API. .
    //===================================================================

    get: function get() {
      return this.configuration.minSpacing;
    },
    set: function set(value) {
      if (typeof value !== 'number') {
        throw new Error('Attempting to set freehandSculpter minSpacing to a value other than a number.');
      }

      this.configuration.minSpacing = value;
    }
  }, {
    key: 'maxSpacing',
    get: function get() {
      return this.configuration.maxSpacing;
    },
    set: function set(value) {
      if (typeof value !== 'number') {
        throw new Error('Attempting to set freehandSculpter maxSpacing to a value other than a number.');
      }

      this.configuration.maxSpacing = value;
    }
  }, {
    key: 'showCursorOnHover',
    get: function get() {
      return this.configuration.showCursorOnHover;
    },
    set: function set(value) {
      if (typeof value !== 'boolean') {
        throw new Error('Attempting to set freehandSculpter showCursorOnHover to a value other than a boolean.');
      }

      this.configuration.showCursorOnHover = value;
      _externalModules2.default.cornerstone.updateImage(this.element);
    }
  }, {
    key: 'limitRadiusOutsideRegion',
    get: function get() {
      return this.configuration.limitRadiusOutsideRegion;
    },
    set: function set(value) {
      if (typeof value !== 'boolean') {
        throw new Error('Attempting to set freehandSculpter limitRadiusOutsideRegion to a value other than a boolean.');
      }

      this.configuration.limitRadiusOutsideRegion = value;
      _externalModules2.default.cornerstone.updateImage(this.element);
    }
  }, {
    key: 'hoverCursorFadeAlpha',
    get: function get() {
      return this.configuration.hoverCursorFadeAlpha;
    },
    set: function set(value) {
      if (typeof value !== 'number') {
        throw new Error('Attempting to set freehandSculpter hoverCursorFadeAlpha to a value other than a number.');
      }

      // Clamp the value from 0 to 1.
      value = Math.max(Math.min(value, 1.0), 0.0);

      this.configuration.hoverCursorFadeAlpha = value;
      _externalModules2.default.cornerstone.updateImage(this.element);
    }
  }, {
    key: 'hoverCursorFadeDistance',
    get: function get() {
      return this.configuration.hoverCursorFadeDistance;
    },
    set: function set(value) {
      if (typeof value !== 'number') {
        throw new Error('Attempting to set freehandSculpter hoverCursorFadeDistance to a value other than a number.');
      }

      // Don't allow to fade a distances smaller than the tool's radius.
      value = Math.max(value, 1.0);

      this.configuration.hoverCursorFadeDistance = value;
      _externalModules2.default.cornerstone.updateImage(this.element);
    }
  }], [{
    key: '_getCorrectedPair',
    value: function _getCorrectedPair(pair, removedIndexModifier) {
      var correctedPair = [pair[0] - removedIndexModifier, pair[1] - removedIndexModifier];

      // Deal with edge case of last node + first node.
      if (correctedPair[1] < 0) {
        correctedPair[1] = 0;
      }

      return correctedPair;
    }
  }, {
    key: '_getNextHandleIndex',
    value: function _getNextHandleIndex(i, length) {
      if (i === length - 1) {
        return 0;
      }

      return i + 1;
    }

    /**
    * Returns the previous handle index.
    *
    * @private
    * @static
    * @param {Number} i - The handle index.
    * @param {Number} length - The length of the polygon.
    * @returns {Number} The previous handle index.
    */

  }, {
    key: '_getPreviousHandleIndex',
    value: function _getPreviousHandleIndex(i, length) {
      if (i === 0) {
        return length - 1;
      }

      return i - 1;
    }

    /**
    * Returns the next handle index, with a correction considering a handle is
    * about to be inserted.
    *
    * @private
    * @static
    * @param {Number} insertIndex - The index in which the handle is being inserted.
    * @param {Number} length - The length of the polygon.
    * @returns {Number} The next handle index.
    */

  }, {
    key: '_getNextHandleIndexBeforeInsert',
    value: function _getNextHandleIndexBeforeInsert(insertIndex, length) {
      if (insertIndex === length) {
        return 0;
      }
      // Index correction here: The line bellow is correct, as we haven't inserted our handle yet!

      return insertIndex;
    }

    /**
    * Calculates the position that a new handle should be inserted.
    *
    * @private
    * @static
    * @param {Object} sculptData - Data object associated with the sculpt event.
    * @param {Number} insertIndex - The index to insert the new handle.
    * @param {Number} previousIndex - The previous index.
    * @param {Number} nextIndex - The next index.
    * @returns {Object} The position the handle should be inserted.
    */

  }, {
    key: '_getInsertPosition',
    value: function _getInsertPosition(sculptData, insertIndex, previousIndex, nextIndex) {
      var toolSize = sculptData.toolSize;
      var mousePoint = sculptData.mousePoint;
      var dataHandles = sculptData.dataHandles;
      var image = sculptData.image;

      // Calculate insert position: half way between the handles, then pushed out
      // Radially to the edge of the freehandSculpter.
      var midPoint = {
        x: (dataHandles[previousIndex].x + dataHandles[nextIndex].x) / 2.0,
        y: (dataHandles[previousIndex].y + dataHandles[nextIndex].y) / 2.0
      };

      var distanceToMidPoint = _externalModules2.default.cornerstoneMath.point.distance(mousePoint, midPoint);

      var insertPosition = void 0;

      if (distanceToMidPoint < toolSize) {
        var directionUnitVector = {
          x: (midPoint.x - mousePoint.x) / distanceToMidPoint,
          y: (midPoint.y - mousePoint.y) / distanceToMidPoint
        };

        insertPosition = {
          x: mousePoint.x + toolSize * directionUnitVector.x,
          y: mousePoint.y + toolSize * directionUnitVector.y
        };
      } else {
        insertPosition = midPoint;
      }

      (0, _clip.clipToBox)(insertPosition, image);

      return insertPosition;
    }
  }]);

  return FreehandSculpterMouseTool;
}(_BaseTool3.default);

/**
 * Returns the default freehandSculpterMouseTool configuration.
 *
 * @return {Object} The default configuration object.
 */


exports.default = FreehandSculpterMouseTool;
function getDefaultFreehandSculpterMouseToolConfiguration() {
  return {
    mouseLocation: {
      handles: {
        start: {
          highlight: true,
          active: true
        }
      }
    },
    keyDown: {
      shift: false,
      ctrl: false,
      alt: false
    },
    minSpacing: 5,
    maxSpacing: 20,
    currentTool: null,
    dragColor: _toolColors2.default.getActiveColor(),
    hoverColor: _toolColors2.default.getToolColor(),

    /* --- Hover options ---
    showCursorOnHover:        Shows a preview of the sculpting radius on hover.
    limitRadiusOutsideRegion: Limit max toolsize outside the subject ROI based
                              on subject ROI area.
    hoverCursorFadeAlpha:     Alpha to fade to when tool very distant from
                              subject ROI.
    hoverCursorFadeDistance:  Distance from ROI in which to fade the hoverCursor
                              (in units of radii).
    */
    showCursorOnHover: true,
    limitRadiusOutsideRegion: true,
    hoverCursorFadeAlpha: 0.5,
    hoverCursorFadeDistance: 1.2
  };
}

function preventPropagation(evt) {
  evt.stopImmediatePropagation();
  evt.stopPropagation();
  evt.preventDefault();
}

/***/ }),

/***/ "./tools/LengthTool.js":
/*!*****************************!*\
  !*** ./tools/LengthTool.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseAnnotationTool2 = __webpack_require__(/*! ../base/BaseAnnotationTool.js */ "./base/BaseAnnotationTool.js");

var _BaseAnnotationTool3 = _interopRequireDefault(_BaseAnnotationTool2);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _toolStyle = __webpack_require__(/*! ../stateManagement/toolStyle.js */ "./stateManagement/toolStyle.js");

var _toolStyle2 = _interopRequireDefault(_toolStyle);

var _toolColors = __webpack_require__(/*! ../stateManagement/toolColors.js */ "./stateManagement/toolColors.js");

var _toolColors2 = _interopRequireDefault(_toolColors);

var _drawHandles = __webpack_require__(/*! ../manipulators/drawHandles.js */ "./manipulators/drawHandles.js");

var _drawHandles2 = _interopRequireDefault(_drawHandles);

var _drawing = __webpack_require__(/*! ../util/drawing.js */ "./util/drawing.js");

var _drawLinkedTextBox = __webpack_require__(/*! ../util/drawLinkedTextBox.js */ "./util/drawLinkedTextBox.js");

var _drawLinkedTextBox2 = _interopRequireDefault(_drawLinkedTextBox);

var _lineSegDistance = __webpack_require__(/*! ../util/lineSegDistance.js */ "./util/lineSegDistance.js");

var _lineSegDistance2 = _interopRequireDefault(_lineSegDistance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-loop-func: 0 */ // --> OFF

// State

// Manipulators

// Drawing


var LengthTool = function (_BaseAnnotationTool) {
  _inherits(LengthTool, _BaseAnnotationTool);

  function LengthTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Length';

    _classCallCheck(this, LengthTool);

    return _possibleConstructorReturn(this, (LengthTool.__proto__ || Object.getPrototypeOf(LengthTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse', 'touch']
    }));
  }

  /**
   * Create the measurement data for this tool with the end handle activated
   *
   * @param {*} eventData
   * @returns
   */


  _createClass(LengthTool, [{
    key: 'createNewMeasurement',
    value: function createNewMeasurement(eventData) {
      var goodEventData = eventData && eventData.currentPoints && eventData.currentPoints.image;

      if (!goodEventData) {
        console.error('required eventData not supplied to tool ' + this.name + '\'s createNewMeasurement');

        return;
      }

      return {
        visible: true,
        active: true,
        color: undefined,
        handles: {
          start: {
            x: eventData.currentPoints.image.x,
            y: eventData.currentPoints.image.y,
            highlight: true,
            active: false
          },
          end: {
            x: eventData.currentPoints.image.x,
            y: eventData.currentPoints.image.y,
            highlight: true,
            active: true
          },
          textBox: {
            active: false,
            hasMoved: false,
            movesIndependently: false,
            drawnIndependently: true,
            allowedOutsideImage: true,
            hasBoundingBox: true
          }
        }
      };
    }

    /**
     *
     *
     * @param {*} element
     * @param {*} data
     * @param {*} coords
     * @returns
     */

  }, {
    key: 'pointNearTool',
    value: function pointNearTool(element, data, coords) {
      var hasStartAndEndHandles = data && data.handles && data.handles.start && data.handles.end;
      var validParameters = hasStartAndEndHandles;

      if (!validParameters) {
        console.warn('invalid parameters supplieed to tool ' + this.name + '\'s pointNearTool');
      }

      if (!validParameters || data.visible === false) {
        return false;
      }

      return (0, _lineSegDistance2.default)(element, data.handles.start, data.handles.end, coords) < 25;
    }

    /**
     *
     *
     * @param {*} evt
     * @returns
     */

  }, {
    key: 'renderToolData',
    value: function renderToolData(evt) {
      var eventData = evt.detail;
      var toolData = (0, _toolState.getToolState)(evt.currentTarget, this.name);

      if (!toolData) {
        return;
      }

      // We have tool data for this element - iterate over each one and draw it
      var context = (0, _drawing.getNewContext)(eventData.canvasContext.canvas);
      var image = eventData.image,
          element = eventData.element;


      var lineWidth = _toolStyle2.default.getToolWidth();
      var config = this.configuration;
      var imagePlane = _externalModules2.default.cornerstone.metaData.get('imagePlaneModule', image.imageId);
      var rowPixelSpacing = void 0;
      var colPixelSpacing = void 0;

      if (imagePlane) {
        rowPixelSpacing = imagePlane.rowPixelSpacing || imagePlane.rowImagePixelSpacing;
        colPixelSpacing = imagePlane.columnPixelSpacing || imagePlane.colImagePixelSpacing;
      } else {
        rowPixelSpacing = image.rowPixelSpacing;
        colPixelSpacing = image.columnPixelSpacing;
      }

      var _loop = function _loop(i) {
        var data = toolData.data[i];

        if (data.visible === false) {
          return 'continue';
        }

        (0, _drawing.draw)(context, function (context) {
          // Configurable shadow
          (0, _drawing.setShadow)(context, config);

          var color = _toolColors2.default.getColorIfActive(data);

          // Draw the measurement line
          (0, _drawing.drawLine)(context, element, data.handles.start, data.handles.end, {
            color: color
          });

          // Draw the handles
          var handleOptions = {
            drawHandlesIfActive: config && config.drawHandlesOnHover
          };

          (0, _drawHandles2.default)(context, eventData, data.handles, color, handleOptions);

          // Draw the text
          context.fillStyle = color;

          // Set rowPixelSpacing and columnPixelSpacing to 1 if they are undefined (or zero)
          var dx = (data.handles.end.x - data.handles.start.x) * (colPixelSpacing || 1);
          var dy = (data.handles.end.y - data.handles.start.y) * (rowPixelSpacing || 1);

          // Calculate the length, and create the text variable with the millimeters or pixels suffix
          var length = Math.sqrt(dx * dx + dy * dy);

          // Store the length inside the tool for outside access
          data.length = length;

          if (!data.handles.textBox.hasMoved) {
            var coords = {
              x: Math.max(data.handles.start.x, data.handles.end.x)
            };

            // Depending on which handle has the largest x-value,
            // Set the y-value for the text box
            if (coords.x === data.handles.start.x) {
              coords.y = data.handles.start.y;
            } else {
              coords.y = data.handles.end.y;
            }

            data.handles.textBox.x = coords.x;
            data.handles.textBox.y = coords.y;
          }

          // Move the textbox slightly to the right and upwards
          // So that it sits beside the length tool handle
          var xOffset = 10;

          var text = textBoxText(data, rowPixelSpacing, colPixelSpacing);

          (0, _drawLinkedTextBox2.default)(context, element, data.handles.textBox, text, data.handles, textBoxAnchorPoints, color, lineWidth, xOffset, true);
        });
      };

      for (var i = 0; i < toolData.data.length; i++) {
        var _ret = _loop(i);

        if (_ret === 'continue') continue;
      }

      function textBoxText(data, rowPixelSpacing, colPixelSpacing) {
        // Set the length text suffix depending on whether or not pixelSpacing is available
        var suffix = ' mm';

        if (!rowPixelSpacing || !colPixelSpacing) {
          suffix = ' pixels';
        }

        return '' + data.length.toFixed(2) + suffix;
      }

      function textBoxAnchorPoints(handles) {
        var midpoint = {
          x: (handles.start.x + handles.end.x) / 2,
          y: (handles.start.y + handles.end.y) / 2
        };

        return [handles.start, midpoint, handles.end];
      }
    }
  }]);

  return LengthTool;
}(_BaseAnnotationTool3.default);

exports.default = LengthTool;

/***/ }),

/***/ "./tools/MagnifyTool.js":
/*!******************************!*\
  !*** ./tools/MagnifyTool.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _getMaxSimultaneousRequests = __webpack_require__(/*! ../util/getMaxSimultaneousRequests.js */ "./util/getMaxSimultaneousRequests.js");

var _clip = __webpack_require__(/*! ../util/clip.js */ "./util/clip.js");

var _drawing = __webpack_require__(/*! ../util/drawing.js */ "./util/drawing.js");

var _BaseTool2 = __webpack_require__(/*! ../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-underscore-dangle: 0 */
/* eslint class-methods-use-this: 0 */


var MagnifyTool = function (_BaseTool) {
  _inherits(MagnifyTool, _BaseTool);

  function MagnifyTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Magnify';

    _classCallCheck(this, MagnifyTool);

    var _this = _possibleConstructorReturn(this, (MagnifyTool.__proto__ || Object.getPrototypeOf(MagnifyTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse', 'touch'],
      configuration: {
        magnifySize: 300,
        magnificationLevel: 2
      }
    }));

    _this.browserName = undefined;
    _this.zoomCanvas = undefined;
    _this.zoomElement = undefined;

    // Needed for Safari Canvas Hack
    if (!_this.browserName) {
      var infoString = (0, _getMaxSimultaneousRequests.getBrowserInfo)();
      var info = infoString.split(' ');

      _this.browserName = info[0];
    }

    // Mode Callbacks: (element, options)
    _this.activeCallback = _this._createMagnificationCanvas.bind(_this);
    _this.enableCallback = _this._createMagnificationCanvas.bind(_this);
    _this.disableCallback = _this._destroyMagnificationCanvas.bind(_this);

    // Touch
    _this.postTouchStartCallback = _this._addMagnifyingGlass.bind(_this);
    _this.touchDragCallback = _this._updateMagnifyingGlass.bind(_this);
    _this.touchEndCallback = _this._removeMagnifyingGlass.bind(_this);
    _this.touchDragEndCallback = _this._removeMagnifyingGlass.bind(_this);
    // Mouse
    _this.postMouseDownCallback = _this._addMagnifyingGlass.bind(_this);
    _this.mouseDragCallback = _this._updateMagnifyingGlass.bind(_this);
    _this.mouseUpCallback = _this._removeMagnifyingGlass.bind(_this);
    // On quick clicks, mouseUp does not fire, but this does
    _this.mouseClickCallback = _this._removeMagnifyingGlass.bind(_this);
    // Misc
    _this.newImageCallback = _this._drawMagnificationTool.bind(_this);
    return _this;
  }

  _createClass(MagnifyTool, [{
    key: '_addMagnifyingGlass',
    value: function _addMagnifyingGlass(evt) {
      var _this2 = this;

      // Ignore until next event
      this._removeZoomElement();
      this._drawZoomedElement(evt);
      // On next frame
      window.requestAnimationFrame(function () {
        return _this2._drawMagnificationTool(evt);
      });

      evt.preventDefault();
      evt.stopPropagation();
    }
  }, {
    key: '_updateMagnifyingGlass',
    value: function _updateMagnifyingGlass(evt) {
      this._drawMagnificationTool(evt);

      evt.preventDefault();
      evt.stopPropagation();
    }
  }, {
    key: '_removeMagnifyingGlass',
    value: function _removeMagnifyingGlass(evt) {
      var element = evt.detail.element;

      element.querySelector('.magnifyTool').style.display = 'none';
      // Re-enable the mouse cursor
      document.body.style.cursor = 'default';
      this._removeZoomElement();
    }
  }, {
    key: '_drawMagnificationTool',
    value: function _drawMagnificationTool(evt) {
      var element = evt.detail.element;
      var magnifyCanvas = element.querySelector('.magnifyTool');

      if (!magnifyCanvas) {
        this._createMagnificationCanvas(element);
      }

      if (this.zoomCanvas === undefined) {
        return;
      }

      var magnifySize = this.configuration.magnifySize;
      var magnificationLevel = this.configuration.magnificationLevel;

      // The 'not' magnifyTool class here is necessary because cornerstone places
      // No classes of it's own on the canvas we want to select
      var canvas = element.querySelector('canvas:not(.magnifyTool)');
      var context = (0, _drawing.getNewContext)(magnifyCanvas);
      var getSize = magnifySize;

      // Calculate the on-canvas location of the mouse pointer / touch
      var canvasLocation = _externalModules2.default.cornerstone.pixelToCanvas(evt.detail.element, evt.detail.currentPoints.image);

      (0, _clip.clipToBox)(canvasLocation, canvas);

      // Clear the rectangle
      context.clearRect(0, 0, magnifySize, magnifySize);

      // Fill it with the pixels that the mouse is clicking on
      var boundingBox = {
        left: 0,
        top: 0,
        width: magnifySize,
        height: magnifySize
      };

      (0, _drawing.fillBox)(context, boundingBox, 'transparent');

      var copyFrom = {
        x: canvasLocation.x * magnificationLevel - 0.5 * getSize,
        y: canvasLocation.y * magnificationLevel - 0.5 * getSize
      };

      if (this.browserName === 'Safari') {
        // Safari breaks when trying to copy pixels with negative indices
        // This prevents proper Magnify usage
        copyFrom.x = Math.max(copyFrom.x, 0);
        copyFrom.y = Math.max(copyFrom.y, 0);
      }

      copyFrom.x = Math.min(copyFrom.x, this.zoomCanvas.width);
      copyFrom.y = Math.min(copyFrom.y, this.zoomCanvas.height);

      context.drawImage(this.zoomCanvas, copyFrom.x, copyFrom.y, getSize, getSize, 0, 0, getSize, getSize);

      // Place the magnification tool at the same location as the pointer
      magnifyCanvas.style.top = canvasLocation.y - 0.5 * magnifySize + 'px';
      magnifyCanvas.style.left = canvasLocation.x - 0.5 * magnifySize + 'px';

      if (evt.detail.isTouchEvent) {
        magnifyCanvas.style.top = canvasLocation.y - 0.5 * magnifySize - 120 + 'px';
      }

      magnifyCanvas.style.display = 'block';
      // Hide the mouse cursor, so the user can see better
      document.body.style.cursor = 'none';
    }

    /**
     * Creates a cornerstone enabled element, and renders the target image at the
     * desired magnification level using it.
     *
     * @param {*} evt
     */

  }, {
    key: '_drawZoomedElement',
    value: function _drawZoomedElement(evt) {
      var element = evt.detail.element;
      var enabledElement = evt.detail.enabledElement;

      if (enabledElement === undefined) {
        enabledElement = _externalModules2.default.cornerstone.getEnabledElement(element);
      }

      var magnificationLevel = this.configuration.magnificationLevel;
      var origCanvas = enabledElement.canvas;
      var image = enabledElement.image;

      // Create a new cornerstone enabledElement
      this.zoomElement = document.createElement('div');
      this.zoomElement.width = origCanvas.width * magnificationLevel;
      this.zoomElement.height = origCanvas.height * magnificationLevel;
      _externalModules2.default.cornerstone.enable(this.zoomElement);

      var zoomEnabledElement = _externalModules2.default.cornerstone.getEnabledElement(this.zoomElement);
      var viewport = _externalModules2.default.cornerstone.getViewport(enabledElement.element);

      this.zoomCanvas = zoomEnabledElement.canvas;
      this.zoomCanvas.width = origCanvas.width * magnificationLevel;
      this.zoomCanvas.height = origCanvas.height * magnificationLevel;

      zoomEnabledElement.viewport = Object.assign({}, viewport);

      // Update it's viewport to render at desired magnification level
      viewport.scale *= magnificationLevel;
      _externalModules2.default.cornerstone.displayImage(this.zoomElement, image);
      _externalModules2.default.cornerstone.setViewport(this.zoomElement, viewport);
    }

    /**
     * Removes the canvas and associated enabled element that's
     * used to render the zoomed image.
     *
     */

  }, {
    key: '_removeZoomElement',
    value: function _removeZoomElement() {
      if (this.zoomElement !== undefined) {
        _externalModules2.default.cornerstone.disable(this.zoomElement);
        this.zoomElement = undefined;
        this.zoomCanvas = undefined;
      }
    }

    /**
     * The canvas used to render the zoomed image.
     * It will be displayed and clipped inside the magnifying glass frame/element.
     *
     * @param {*} element
     */

  }, {
    key: '_createMagnificationCanvas',
    value: function _createMagnificationCanvas(element) {
      // If the magnifying glass canvas doesn't already exist
      if (element.querySelector('.magnifyTool') === null) {
        // Create a canvas and append it as a child to the element
        var magnifyCanvas = document.createElement('canvas');

        // The magnifyTool class is used to find the canvas later on
        // Make sure position is absolute so the canvas can follow the mouse / touch
        magnifyCanvas.classList.add('magnifyTool');
        magnifyCanvas.width = this.configuration.magnifySize;
        magnifyCanvas.height = this.configuration.magnifySize;
        magnifyCanvas.style.position = 'absolute';
        magnifyCanvas.style.display = 'none';
        element.appendChild(magnifyCanvas);
      }
    }

    /**
     *
     *
     * @param {*} evt
     */

  }, {
    key: '_destroyMagnificationCanvas',
    value: function _destroyMagnificationCanvas(evt) {
      var element = evt.detail.element;
      var magnifyCanvas = element.querySelector('.magnifyTool');

      if (magnifyCanvas) {
        element.removeChild(magnifyCanvas);
      }
    }
  }]);

  return MagnifyTool;
}(_BaseTool3.default);

exports.default = MagnifyTool;

/***/ }),

/***/ "./tools/PanMultiTouchTool.js":
/*!************************************!*\
  !*** ./tools/PanMultiTouchTool.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseTool2 = __webpack_require__(/*! ../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-underscore-dangle: 0 */
/* eslint class-methods-use-this: 0 */


var PanMultiTouchTool = function (_BaseTool) {
  _inherits(PanMultiTouchTool, _BaseTool);

  function PanMultiTouchTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'PanMultiTouch';

    _classCallCheck(this, PanMultiTouchTool);

    // Touch
    var _this = _possibleConstructorReturn(this, (PanMultiTouchTool.__proto__ || Object.getPrototypeOf(PanMultiTouchTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['touch'],
      configuration: {
        touchPointers: 2
      }
    }));

    _this.multiTouchDragCallback = _this._dragCallback.bind(_this);
    return _this;
  }

  _createClass(PanMultiTouchTool, [{
    key: '_dragCallback',
    value: function _dragCallback(evt) {
      var eventData = evt.detail;
      var element = eventData.element,
          viewport = eventData.viewport;


      if (eventData.numPointers === this.configuration.touchPointers) {
        var translation = this._getTranslation(eventData);

        this._applyTranslation(viewport, translation);
        _externalModules2.default.cornerstone.setViewport(element, viewport);
      }
    }
  }, {
    key: '_getTranslation',
    value: function _getTranslation(eventData) {
      var viewport = eventData.viewport,
          image = eventData.image,
          deltaPoints = eventData.deltaPoints;


      var widthScale = viewport.scale;
      var heightScale = viewport.scale;

      if (image.rowPixelSpacing < image.columnPixelSpacing) {
        widthScale *= image.columnPixelSpacing / image.rowPixelSpacing;
      } else if (image.columnPixelSpacing < image.rowPixelSpacing) {
        heightScale *= image.rowPixelSpacing / image.columnPixelSpacing;
      }

      return {
        x: deltaPoints.page.x / widthScale,
        y: deltaPoints.page.y / heightScale
      };
    }
  }, {
    key: '_applyTranslation',
    value: function _applyTranslation(viewport, translation) {
      viewport.translation.x += translation.x;
      viewport.translation.y += translation.y;
    }
  }]);

  return PanMultiTouchTool;
}(_BaseTool3.default);

exports.default = PanMultiTouchTool;

/***/ }),

/***/ "./tools/PanTool.js":
/*!**************************!*\
  !*** ./tools/PanTool.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ./../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseTool2 = __webpack_require__(/*! ./../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-underscore-dangle: 0 */


var PanTool = function (_BaseTool) {
  _inherits(PanTool, _BaseTool);

  function PanTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Pan';

    _classCallCheck(this, PanTool);

    // Touch
    var _this = _possibleConstructorReturn(this, (PanTool.__proto__ || Object.getPrototypeOf(PanTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse', 'touch']
    }));

    _this.touchDragCallback = _this._dragCallback.bind(_this);
    // Mouse
    _this.mouseDragCallback = _this._dragCallback.bind(_this);
    return _this;
  }

  _createClass(PanTool, [{
    key: '_dragCallback',
    value: function _dragCallback(evt) {
      var eventData = evt.detail;
      var element = eventData.element,
          viewport = eventData.viewport;


      var translation = this._getTranslation(eventData);

      this._applyTranslation(viewport, translation);
      _externalModules2.default.cornerstone.setViewport(element, viewport);
    }
  }, {
    key: '_getTranslation',
    value: function _getTranslation(eventData) {
      var viewport = eventData.viewport,
          image = eventData.image,
          deltaPoints = eventData.deltaPoints;


      var widthScale = viewport.scale;
      var heightScale = viewport.scale;

      if (image.rowPixelSpacing < image.columnPixelSpacing) {
        widthScale *= image.columnPixelSpacing / image.rowPixelSpacing;
      } else if (image.columnPixelSpacing < image.rowPixelSpacing) {
        heightScale *= image.rowPixelSpacing / image.columnPixelSpacing;
      }

      return {
        x: deltaPoints.page.x / widthScale,
        y: deltaPoints.page.y / heightScale
      };
    }
  }, {
    key: '_applyTranslation',
    value: function _applyTranslation(viewport, translation) {
      viewport.translation.x += translation.x;
      viewport.translation.y += translation.y;
    }
  }]);

  return PanTool;
}(_BaseTool3.default);

exports.default = PanTool;

/***/ }),

/***/ "./tools/ProbeTool.js":
/*!****************************!*\
  !*** ./tools/ProbeTool.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseAnnotationTool2 = __webpack_require__(/*! ../base/BaseAnnotationTool.js */ "./base/BaseAnnotationTool.js");

var _BaseAnnotationTool3 = _interopRequireDefault(_BaseAnnotationTool2);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _textStyle = __webpack_require__(/*! ../stateManagement/textStyle.js */ "./stateManagement/textStyle.js");

var _textStyle2 = _interopRequireDefault(_textStyle);

var _toolColors = __webpack_require__(/*! ../stateManagement/toolColors.js */ "./stateManagement/toolColors.js");

var _toolColors2 = _interopRequireDefault(_toolColors);

var _drawHandles = __webpack_require__(/*! ../manipulators/drawHandles.js */ "./manipulators/drawHandles.js");

var _drawHandles2 = _interopRequireDefault(_drawHandles);

var _drawing = __webpack_require__(/*! ../util/drawing.js */ "./util/drawing.js");

var _drawTextBox = __webpack_require__(/*! ../util/drawTextBox.js */ "./util/drawTextBox.js");

var _drawTextBox2 = _interopRequireDefault(_drawTextBox);

var _getRGBPixels = __webpack_require__(/*! ../util/getRGBPixels.js */ "./util/getRGBPixels.js");

var _getRGBPixels2 = _interopRequireDefault(_getRGBPixels);

var _calculateSUV = __webpack_require__(/*! ../util/calculateSUV.js */ "./util/calculateSUV.js");

var _calculateSUV2 = _interopRequireDefault(_calculateSUV);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-loop-func: 0 */ // --> OFF

// State

// Manipulators

// Drawing

// Utilities


var ProbeTool = function (_BaseAnnotationTool) {
  _inherits(ProbeTool, _BaseAnnotationTool);

  function ProbeTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Probe';

    _classCallCheck(this, ProbeTool);

    return _possibleConstructorReturn(this, (ProbeTool.__proto__ || Object.getPrototypeOf(ProbeTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse', 'touch']
    }));
  }

  /**
   * Create the measurement data for this tool with the end handle activated
   *
   * @param {*} eventData
   * @returns
   */


  _createClass(ProbeTool, [{
    key: 'createNewMeasurement',
    value: function createNewMeasurement(eventData) {
      var goodEventData = eventData && eventData.currentPoints && eventData.currentPoints.image;

      if (!goodEventData) {
        console.error('required eventData not supplieed to tool ' + this.name + '\'s createNewMeasurement');

        return;
      }

      return {
        visible: true,
        active: true,
        color: undefined,
        handles: {
          end: {
            x: eventData.currentPoints.image.x,
            y: eventData.currentPoints.image.y,
            highlight: true,
            active: true
          }
        }
      };
    }

    /**
     *
     *
     * @param {*} element
     * @param {*} data
     * @param {*} coords
     * @returns
     */

  }, {
    key: 'pointNearTool',
    value: function pointNearTool(element, data, coords) {
      var hasEndHandle = data && data.handles && data.handles.end;
      var validParameters = hasEndHandle;

      if (!validParameters) {
        console.warn('invalid parameters supplieed to tool ' + this.name + '\'s pointNearTool');
      }

      if (!validParameters || data.visible === false) {
        return false;
      }

      var probeCoords = _externalModules2.default.cornerstone.pixelToCanvas(element, data.handles.end);

      return _externalModules2.default.cornerstoneMath.point.distance(probeCoords, coords) < 5;
    }

    /**
     *
     *
     * @param {*} evt
     * @returns
     */

  }, {
    key: 'renderToolData',
    value: function renderToolData(evt) {
      var eventData = evt.detail;
      var toolData = (0, _toolState.getToolState)(evt.currentTarget, this.name);

      if (!toolData) {
        return;
      }

      // We have tool data for this element - iterate over each one and draw it
      var context = (0, _drawing.getNewContext)(eventData.canvasContext.canvas);
      var image = eventData.image;

      var font = _textStyle2.default.getFont();
      var fontHeight = _textStyle2.default.getFontSize();

      var _loop = function _loop(i) {
        var data = toolData.data[i];

        if (data.visible === false) {
          return 'continue';
        }

        (0, _drawing.draw)(context, function (context) {

          var color = _toolColors2.default.getColorIfActive(data);

          // Draw the handles
          (0, _drawHandles2.default)(context, eventData, data.handles, color);

          var x = Math.round(data.handles.end.x);
          var y = Math.round(data.handles.end.y);
          var storedPixels = void 0;

          var text = void 0,
              str = void 0;

          if (x >= 0 && y >= 0 && x < image.columns && y < image.rows) {
            text = x + ', ' + y;

            if (image.color) {
              storedPixels = (0, _getRGBPixels2.default)(eventData.element, x, y, 1, 1);
              str = 'R: ' + storedPixels[0] + ' G: ' + storedPixels[1] + ' B: ' + storedPixels[2];
            } else {
              storedPixels = _externalModules2.default.cornerstone.getStoredPixels(eventData.element, x, y, 1, 1);
              var sp = storedPixels[0];
              var mo = sp * image.slope + image.intercept;
              var suv = (0, _calculateSUV2.default)(image, sp);

              // Draw text
              str = 'SP: ' + sp + ' MO: ' + parseFloat(mo.toFixed(3));
              if (suv) {
                str += ' SUV: ' + parseFloat(suv.toFixed(3));
              }
            }

            // Coords for text
            var coords = {
              // Translate the x/y away from the cursor
              x: data.handles.end.x + 3,
              y: data.handles.end.y - 3
            };
            var textCoords = _externalModules2.default.cornerstone.pixelToCanvas(eventData.element, coords);

            context.font = font;
            context.fillStyle = color;

            (0, _drawTextBox2.default)(context, str, textCoords.x, textCoords.y + fontHeight + 5, color);
            (0, _drawTextBox2.default)(context, text, textCoords.x, textCoords.y, color);
          }
        });
      };

      for (var i = 0; i < toolData.data.length; i++) {
        var _ret = _loop(i);

        if (_ret === 'continue') continue;
      }
    }
  }]);

  return ProbeTool;
}(_BaseAnnotationTool3.default);

exports.default = ProbeTool;

/***/ }),

/***/ "./tools/RectangleRoiTool.js":
/*!***********************************!*\
  !*** ./tools/RectangleRoiTool.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseAnnotationTool2 = __webpack_require__(/*! ../base/BaseAnnotationTool.js */ "./base/BaseAnnotationTool.js");

var _BaseAnnotationTool3 = _interopRequireDefault(_BaseAnnotationTool2);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _toolStyle = __webpack_require__(/*! ../stateManagement/toolStyle.js */ "./stateManagement/toolStyle.js");

var _toolStyle2 = _interopRequireDefault(_toolStyle);

var _toolColors = __webpack_require__(/*! ../stateManagement/toolColors.js */ "./stateManagement/toolColors.js");

var _toolColors2 = _interopRequireDefault(_toolColors);

var _drawHandles = __webpack_require__(/*! ../manipulators/drawHandles.js */ "./manipulators/drawHandles.js");

var _drawHandles2 = _interopRequireDefault(_drawHandles);

var _drawing = __webpack_require__(/*! ../util/drawing.js */ "./util/drawing.js");

var _drawLinkedTextBox = __webpack_require__(/*! ../util/drawLinkedTextBox.js */ "./util/drawLinkedTextBox.js");

var _drawLinkedTextBox2 = _interopRequireDefault(_drawLinkedTextBox);

var _calculateSUV = __webpack_require__(/*! ../util/calculateSUV.js */ "./util/calculateSUV.js");

var _calculateSUV2 = _interopRequireDefault(_calculateSUV);

var _numbersWithCommas = __webpack_require__(/*! ./shared/numbersWithCommas.js */ "./tools/shared/numbersWithCommas.js");

var _numbersWithCommas2 = _interopRequireDefault(_numbersWithCommas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-loop-func: 0 */ // --> OFF

// State

// Manipulators

// Drawing

//


var RectangleRoiTool = function (_BaseAnnotationTool) {
  _inherits(RectangleRoiTool, _BaseAnnotationTool);

  function RectangleRoiTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'RectangleRoi';

    _classCallCheck(this, RectangleRoiTool);

    return _possibleConstructorReturn(this, (RectangleRoiTool.__proto__ || Object.getPrototypeOf(RectangleRoiTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse', 'touch']
    }));
  }

  /**
   * Create the measurement data for this tool with the end handle activated
   *
   * @param {*} eventData
   * @returns
   */


  _createClass(RectangleRoiTool, [{
    key: 'createNewMeasurement',
    value: function createNewMeasurement(eventData) {
      var goodEventData = eventData && eventData.currentPoints && eventData.currentPoints.image;

      if (!goodEventData) {
        console.error('required eventData not supplied to tool ' + this.name + '\'s createNewMeasurement');

        return;
      }

      return {
        visible: true,
        active: true,
        color: undefined,
        invalidated: true,
        handles: {
          start: {
            x: eventData.currentPoints.image.x,
            y: eventData.currentPoints.image.y,
            highlight: true,
            active: false
          },
          end: {
            x: eventData.currentPoints.image.x,
            y: eventData.currentPoints.image.y,
            highlight: true,
            active: true
          },
          textBox: {
            active: false,
            hasMoved: false,
            movesIndependently: false,
            drawnIndependently: true,
            allowedOutsideImage: true,
            hasBoundingBox: true
          }
        }
      };
    }

    /**
     *
     *
     * @param {*} element
     * @param {*} data
     * @param {*} coords
     * @returns
     */

  }, {
    key: 'pointNearTool',
    value: function pointNearTool(element, data, coords) {
      var hasStartAndEndHandles = data && data.handles && data.handles.start && data.handles.end;
      var validParameters = hasStartAndEndHandles;

      if (!validParameters) {
        console.warn('invalid parameters supplieed to tool ' + this.name + '\'s pointNearTool');
      }

      if (!validParameters || data.visible === false) {
        return false;
      }

      var startCanvas = _externalModules2.default.cornerstone.pixelToCanvas(element, data.handles.start);
      var endCanvas = _externalModules2.default.cornerstone.pixelToCanvas(element, data.handles.end);

      var rect = {
        left: Math.min(startCanvas.x, endCanvas.x),
        top: Math.min(startCanvas.y, endCanvas.y),
        width: Math.abs(startCanvas.x - endCanvas.x),
        height: Math.abs(startCanvas.y - endCanvas.y)
      };

      var distanceToPoint = _externalModules2.default.cornerstoneMath.rect.distanceToPoint(rect, coords);

      return distanceToPoint < 5;
    }

    /**
     *
     *
     * @param {*} evt
     * @returns
     */

  }, {
    key: 'renderToolData',
    value: function renderToolData(evt) {
      var eventData = evt.detail;
      var toolData = (0, _toolState.getToolState)(evt.currentTarget, this.name);

      if (!toolData) {
        return;
      }

      // We have tool data for this element - iterate over each one and draw it
      var context = (0, _drawing.getNewContext)(eventData.canvasContext.canvas);
      var image = eventData.image,
          element = eventData.element;


      var lineWidth = _toolStyle2.default.getToolWidth();
      var config = this.configuration;
      var seriesModule = _externalModules2.default.cornerstone.metaData.get('generalSeriesModule', image.imageId);
      var imagePlane = _externalModules2.default.cornerstone.metaData.get('imagePlaneModule', image.imageId);

      var modality = void 0;
      var rowPixelSpacing = image.rowPixelSpacing;
      var colPixelSpacing = image.columnPixelSpacing;

      if (imagePlane) {
        rowPixelSpacing = imagePlane.rowPixelSpacing || imagePlane.rowImagePixelSpacing;
        colPixelSpacing = imagePlane.columnPixelSpacing || imagePlane.colImagePixelSpacing;
      }

      if (seriesModule) {
        modality = seriesModule.modality;
      }

      // If we have tool data for this element - iterate over each set and draw it

      var _loop = function _loop(i) {
        var data = toolData.data[i];

        if (data.visible === false) {
          return 'continue';
        }

        (0, _drawing.draw)(context, function (context) {
          // Apply any shadow settings defined in the tool configuration
          (0, _drawing.setShadow)(context, config);

          // Check which color the rendered tool should be
          var color = _toolColors2.default.getColorIfActive(data);

          // Draw the rectangle on the canvas
          (0, _drawing.drawRect)(context, element, data.handles.start, data.handles.end, { color: color });

          // Draw the handles
          var handleOptions = {
            drawHandlesIfActive: config && config.drawHandlesOnHover
          };

          (0, _drawHandles2.default)(context, eventData, data.handles, color, handleOptions);

          // Define variables for the area and mean/standard deviation
          var area = void 0,
              meanStdDev = void 0,
              meanStdDevSUV = void 0;

          // Perform a check to see if the tool has been invalidated. This is to prevent
          // Unnecessary re-calculation of the area, mean, and standard deviation if the
          // Image is re-rendered but the tool has not moved (e.g. during a zoom)
          if (data.invalidated === false) {
            // If the data is not invalidated, retrieve it from the toolData
            meanStdDev = data.meanStdDev;
            meanStdDevSUV = data.meanStdDevSUV;
            area = data.area;
          } else {
            // If the data has been invalidated, we need to calculate it again

            // Retrieve the bounds of the rectangle in image coordinates
            var rectangle = {
              left: Math.min(data.handles.start.x, data.handles.end.x),
              top: Math.min(data.handles.start.y, data.handles.end.y),
              width: Math.abs(data.handles.start.x - data.handles.end.x),
              height: Math.abs(data.handles.start.y - data.handles.end.y)
            };

            // First, make sure this is not a color image, since no mean / standard
            // Deviation will be calculated for color images.
            if (!image.color) {
              // Retrieve the array of pixels that the rectangle bounds cover
              var pixels = _externalModules2.default.cornerstone.getPixels(element, rectangle.left, rectangle.top, rectangle.width, rectangle.height);

              // Calculate the mean & standard deviation from the pixels and the rectangle details
              meanStdDev = calculateMeanStdDev(pixels, rectangle);

              if (modality === 'PT') {
                // If the image is from a PET scan, use the DICOM tags to
                // Calculate the SUV from the mean and standard deviation.

                // Note that because we are using modality pixel values from getPixels, and
                // The calculateSUV routine also rescales to modality pixel values, we are first
                // Returning the values to storedPixel values before calcuating SUV with them.
                // TODO: Clean this up? Should we add an option to not scale in calculateSUV?
                meanStdDevSUV = {
                  mean: (0, _calculateSUV2.default)(image, (meanStdDev.mean - image.intercept) / image.slope),
                  stdDev: (0, _calculateSUV2.default)(image, (meanStdDev.stdDev - image.intercept) / image.slope)
                };
              }

              // If the mean and standard deviation values are sane, store them for later retrieval
              if (meanStdDev && !isNaN(meanStdDev.mean)) {
                data.meanStdDev = meanStdDev;
                data.meanStdDevSUV = meanStdDevSUV;
              }
            }

            // Calculate the image area from the rectangle dimensions and pixel spacing
            area = rectangle.width * (colPixelSpacing || 1) * (rectangle.height * (rowPixelSpacing || 1));

            // If the area value is sane, store it for later retrieval
            if (!isNaN(area)) {
              data.area = area;
            }

            // Set the invalidated flag to false so that this data won't automatically be recalculated
            data.invalidated = false;
          }

          var text = textBoxText(data);

          // If the textbox has not been moved by the user, it should be displayed on the right-most
          // Side of the tool.
          if (!data.handles.textBox.hasMoved) {
            // Find the rightmost side of the rectangle at its vertical center, and place the textbox here
            // Note that this calculates it in image coordinates
            data.handles.textBox.x = Math.max(data.handles.start.x, data.handles.end.x);
            data.handles.textBox.y = (data.handles.start.y + data.handles.end.y) / 2;
          }

          (0, _drawLinkedTextBox2.default)(context, element, data.handles.textBox, text, data.handles, textBoxAnchorPoints, color, lineWidth, 0, true);
        });
      };

      for (var i = 0; i < toolData.data.length; i++) {
        var _ret = _loop(i);

        if (_ret === 'continue') continue;
      }

      function textBoxText(data) {
        var meanStdDev = data.meanStdDev,
            meanStdDevSUV = data.meanStdDevSUV,
            area = data.area;

        // Define an array to store the rows of text for the textbox

        var textLines = [];

        // If the mean and standard deviation values are present, display them
        if (meanStdDev && meanStdDev.mean !== undefined) {
          // If the modality is CT, add HU to denote Hounsfield Units
          var moSuffix = '';

          if (modality === 'CT') {
            moSuffix = ' HU';
          }

          // Create a line of text to display the mean and any units that were specified (i.e. HU)
          var meanText = 'Mean: ' + (0, _numbersWithCommas2.default)(meanStdDev.mean.toFixed(2)) + moSuffix;
          // Create a line of text to display the standard deviation and any units that were specified (i.e. HU)
          var stdDevText = 'StdDev: ' + (0, _numbersWithCommas2.default)(meanStdDev.stdDev.toFixed(2)) + moSuffix;

          // If this image has SUV values to display, concatenate them to the text line
          if (meanStdDevSUV && meanStdDevSUV.mean !== undefined) {
            var SUVtext = ' SUV: ';

            meanText += SUVtext + (0, _numbersWithCommas2.default)(meanStdDevSUV.mean.toFixed(2));
            stdDevText += SUVtext + (0, _numbersWithCommas2.default)(meanStdDevSUV.stdDev.toFixed(2));
          }

          // Add these text lines to the array to be displayed in the textbox
          textLines.push(meanText);
          textLines.push(stdDevText);
        }

        // If the area is a sane value, display it
        if (area) {
          // Determine the area suffix based on the pixel spacing in the image.
          // If pixel spacing is present, use millimeters. Otherwise, use pixels.
          // This uses Char code 178 for a superscript 2
          var suffix = ' mm' + String.fromCharCode(178);

          if (!rowPixelSpacing || !colPixelSpacing) {
            suffix = ' pixels' + String.fromCharCode(178);
          }

          // Create a line of text to display the area and its units
          var areaText = 'Area: ' + (0, _numbersWithCommas2.default)(area.toFixed(2)) + suffix;

          // Add this text line to the array to be displayed in the textbox
          textLines.push(areaText);
        }

        return textLines;
      }

      function textBoxAnchorPoints(handles) {
        // Retrieve the bounds of the rectangle (left, top, width, and height)
        var left = Math.min(handles.start.x, handles.end.x);
        var top = Math.min(handles.start.y, handles.end.y);
        var width = Math.abs(handles.start.x - handles.end.x);
        var height = Math.abs(handles.start.y - handles.end.y);

        return [{
          // Top middle point of rectangle
          x: left + width / 2,
          y: top
        }, {
          // Left middle point of rectangle
          x: left,
          y: top + height / 2
        }, {
          // Bottom middle point of rectangle
          x: left + width / 2,
          y: top + height
        }, {
          // Right middle point of rectangle
          x: left + width,
          y: top + height / 2
        }];
      }
    }
  }]);

  return RectangleRoiTool;
}(_BaseAnnotationTool3.default);

exports.default = RectangleRoiTool;


var calculateMeanStdDev = function calculateMeanStdDev(sp, rectangle) {
  // TODO: Get a real statistics library here that supports large counts

  var sum = 0;
  var sumSquared = 0;
  var count = 0;
  var index = 0;

  for (var y = rectangle.top; y < rectangle.top + rectangle.height; y++) {
    for (var x = rectangle.left; x < rectangle.left + rectangle.width; x++) {
      sum += sp[index];
      sumSquared += sp[index] * sp[index];
      count++;
      index++;
    }
  }

  if (count === 0) {
    return {
      count: count,
      mean: 0.0,
      variance: 0.0,
      stdDev: 0.0
    };
  }

  var mean = sum / count;
  var variance = sumSquared / count - mean * mean;

  return {
    count: count,
    mean: mean,
    variance: variance,
    stdDev: Math.sqrt(variance)
  };
};

/***/ }),

/***/ "./tools/RotateTool.js":
/*!*****************************!*\
  !*** ./tools/RotateTool.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ./../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseTool2 = __webpack_require__(/*! ./../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

var _angleBetweenPoints = __webpack_require__(/*! ./shared/angleBetweenPoints.js */ "./tools/shared/angleBetweenPoints.js");

var _angleBetweenPoints2 = _interopRequireDefault(_angleBetweenPoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-loop-func: 0 */ // --> OFF


var RotateTool = function (_BaseTool) {
  _inherits(RotateTool, _BaseTool);

  function RotateTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Rotate';

    _classCallCheck(this, RotateTool);

    var strategies = {
      default: defaultStrategy,
      horizontal: horizontalStrategy,
      vertical: verticalStrategy
    };

    return _possibleConstructorReturn(this, (RotateTool.__proto__ || Object.getPrototypeOf(RotateTool)).call(this, {
      name: name,
      strategies: strategies,
      defaultStrategy: 'default',
      supportedInteractionTypes: ['mouse', 'touch']
    }));
  }

  _createClass(RotateTool, [{
    key: 'touchDragCallback',
    value: function touchDragCallback(evt) {
      this.dragCallback(evt);
    }
  }, {
    key: 'mouseDragCallback',
    value: function mouseDragCallback(evt) {
      this.dragCallback(evt);
    }
  }, {
    key: 'postMouseDownCallback',
    value: function postMouseDownCallback(evt) {
      this.initialRotation = evt.detail.viewport.rotation;
    }
  }, {
    key: 'dragCallback',
    value: function dragCallback(evt) {
      evt.detail.viewport.initialRotation = this.initialRotation;
      this.applyActiveStrategy(evt, this.configuration);
      _externalModules2.default.cornerstone.setViewport(evt.detail.element, evt.detail.viewport);
    }
  }]);

  return RotateTool;
}(_BaseTool3.default);

exports.default = RotateTool;


var defaultStrategy = function defaultStrategy(evt) {
  var eventData = evt.detail;
  var element = eventData.element,
      viewport = eventData.viewport;

  var initialRotation = viewport.initialRotation;

  // Calculate the center of the image
  var rect = element.getBoundingClientRect(element);
  var width = element.clientWidth,
      height = element.clientHeight;


  var initialPoints = {
    x: eventData.startPoints.client.x,
    y: eventData.startPoints.client.y
  };
  var scale = viewport.scale,
      translation = viewport.translation;

  var centerPoints = {
    x: rect.left + width / 2 + translation.x * scale,
    y: rect.top + height / 2 + translation.y * scale
  };

  var currentPoints = {
    x: eventData.currentPoints.client.x,
    y: eventData.currentPoints.client.y
  };

  var angleInfo = (0, _angleBetweenPoints2.default)(centerPoints, initialPoints, currentPoints);

  if (angleInfo.direction < 0) {
    angleInfo.angle = -angleInfo.angle;
  }

  viewport.rotation = initialRotation + angleInfo.angle;
};

var horizontalStrategy = function horizontalStrategy(evt) {
  var eventData = evt.detail;
  var viewport = eventData.viewport,
      deltaPoints = eventData.deltaPoints;


  viewport.rotation += deltaPoints.page.x / viewport.scale;
};

var verticalStrategy = function verticalStrategy(evt) {
  var eventData = evt.detail;
  var viewport = eventData.viewport,
      deltaPoints = eventData.deltaPoints;


  viewport.rotation += deltaPoints.page.y / viewport.scale;
};

/***/ }),

/***/ "./tools/RotateTouchTool.js":
/*!**********************************!*\
  !*** ./tools/RotateTouchTool.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ./../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseTool = __webpack_require__(/*! ./../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool2 = _interopRequireDefault(_BaseTool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint class-methods-use-this: 0 */


var _class = function (_baseTool) {
  _inherits(_class, _baseTool);

  function _class() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'RotateTouch';

    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, {
      name: name,
      supportedInteractionTypes: ['touch']
    }));
  }

  _createClass(_class, [{
    key: 'touchRotateCallback',
    value: function touchRotateCallback(evt) {
      var eventData = evt.detail;
      var element = eventData.element,
          viewport = eventData.viewport,
          rotation = eventData.rotation;


      viewport.rotation += rotation;
      _externalModules2.default.cornerstone.setViewport(element, viewport);
    }
  }]);

  return _class;
}(_BaseTool2.default);

exports.default = _class;

/***/ }),

/***/ "./tools/SaveAsTool.js":
/*!*****************************!*\
  !*** ./tools/SaveAsTool.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, filename) {
  var mimetype = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'image/png';

  // Setting the default value for mimetype to image/png
  var canvas = element.querySelector('canvas');

  // If we are using IE, use canvas.msToBlob
  if (canvas.msToBlob) {
    var blob = canvas.msToBlob();

    return window.navigator.msSaveBlob(blob, filename);
  }

  // Thanks to Ken Fyrstenber
  // http://stackoverflow.com/questions/18480474/how-to-save-an-image-from-canvas
  var lnk = document.createElement('a');

  // The key here is to set the download attribute of the a tag
  lnk.download = filename;

  // Convert canvas content to data-uri for link. When download
  // Attribute is set the content pointed to by link will be
  // Pushed as 'download' in HTML5 capable browsers
  lnk.href = canvas.toDataURL(mimetype, 1);

  // Create a 'fake' click-event to trigger the download
  if (document.createEvent) {
    var e = document.createEvent('MouseEvents');

    e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    lnk.dispatchEvent(e);
  } else if (lnk.fireEvent) {
    lnk.fireEvent('onclick');
  }
};

/***/ }),

/***/ "./tools/ScaleOverlayTool.js":
/*!***********************************!*\
  !*** ./tools/ScaleOverlayTool.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ./../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseTool2 = __webpack_require__(/*! ./../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

var _drawing = __webpack_require__(/*! ../util/drawing.js */ "./util/drawing.js");

var _toolStyle = __webpack_require__(/*! ./../stateManagement/toolStyle.js */ "./stateManagement/toolStyle.js");

var _toolStyle2 = _interopRequireDefault(_toolStyle);

var _toolColors = __webpack_require__(/*! ./../stateManagement/toolColors.js */ "./stateManagement/toolColors.js");

var _toolColors2 = _interopRequireDefault(_toolColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Drawing


var ScaleOverlayTool = function (_BaseTool) {
  _inherits(ScaleOverlayTool, _BaseTool);

  function ScaleOverlayTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ScaleOverlay';

    _classCallCheck(this, ScaleOverlayTool);

    return _possibleConstructorReturn(this, (ScaleOverlayTool.__proto__ || Object.getPrototypeOf(ScaleOverlayTool)).call(this, {
      name: name,
      configuration: {
        minorTickLength: 12.5,
        majorTickLength: 25
      }
    }));
  }

  _createClass(ScaleOverlayTool, [{
    key: 'enabledCallback',
    value: function enabledCallback(element) {
      this.forceImageUpdate(element);
    }
  }, {
    key: 'disabledCallback',
    value: function disabledCallback(element) {
      this.forceImageUpdate(element);
    }
  }, {
    key: 'forceImageUpdate',
    value: function forceImageUpdate(element) {
      var enabledElement = _externalModules2.default.cornerstone.getEnabledElement(element);

      if (enabledElement.image) {
        _externalModules2.default.cornerstone.updateImage(element);
      }
    }
  }, {
    key: 'renderToolData',
    value: function renderToolData(evt) {
      var eventData = evt.detail;

      var context = (0, _drawing.getNewContext)(eventData.canvasContext.canvas);
      var image = eventData.image,
          viewport = eventData.viewport,
          element = eventData.element;


      var rowPixelSpacing = image.rowPixelSpacing;
      var colPixelSpacing = image.columnPixelSpacing;
      var imagePlane = _externalModules2.default.cornerstone.metaData.get('imagePlaneModule', image.imageId);

      if (imagePlane) {
        rowPixelSpacing = imagePlane.rowPixelSpacing || imagePlane.rowImagePixelSpacing;
        colPixelSpacing = imagePlane.columnPixelSpacing || imagePlane.colImagePixelSpacing;
      }

      // Check whether pixel spacing is defined
      if (!rowPixelSpacing || !colPixelSpacing) {
        console.warn('unable to define rowPixelSpacing or colPixelSpacing from data on ' + this.name + '\'s renderToolData');

        return;
      }

      var canvasSize = {
        width: context.canvas.width,
        height: context.canvas.height
      };

      // Distance between intervals is 10mm
      var verticalIntervalScale = 10.0 / rowPixelSpacing * viewport.scale;
      var horizontalIntervalScale = 10.0 / colPixelSpacing * viewport.scale;

      // 0.1 and 0.05 gives margin to horizontal and vertical lines
      var hscaleBounds = computeScaleBounds(canvasSize, 0.25, 0.05);
      var vscaleBounds = computeScaleBounds(canvasSize, 0.05, 0.15);

      if (!canvasSize.width || !canvasSize.height || !hscaleBounds || !vscaleBounds) {
        return;
      }

      var color = _toolColors2.default.getToolColor();
      var lineWidth = _toolStyle2.default.getToolWidth();

      var imageAttributes = Object.assign({}, {
        hscaleBounds: hscaleBounds,
        vscaleBounds: vscaleBounds,
        verticalMinorTick: verticalIntervalScale,
        horizontalMinorTick: horizontalIntervalScale,
        verticalLine: {
          start: {
            x: vscaleBounds.bottomRight.x,
            y: vscaleBounds.topLeft.y
          },
          end: {
            x: vscaleBounds.bottomRight.x,
            y: vscaleBounds.bottomRight.y
          }
        },
        horizontalLine: {
          start: {
            x: hscaleBounds.topLeft.x,
            y: hscaleBounds.bottomRight.y
          },
          end: {
            x: hscaleBounds.bottomRight.x,
            y: hscaleBounds.bottomRight.y
          }
        },
        color: color,
        lineWidth: lineWidth
      }, this.configuration);

      (0, _drawing.draw)(context, function (context) {
        (0, _drawing.setShadow)(context, imageAttributes);

        // Draw vertical line
        (0, _drawing.drawLine)(context, element, imageAttributes.verticalLine.start, imageAttributes.verticalLine.end, {
          color: color,
          lineWidth: lineWidth
        }, 'canvas');
        drawVerticalScalebarIntervals(context, element, imageAttributes);

        // Draw horizontal line
        (0, _drawing.drawLine)(context, element, imageAttributes.horizontalLine.start, imageAttributes.horizontalLine.end, {
          color: color,
          lineWidth: lineWidth
        }, 'canvas');
        drawHorizontalScalebarIntervals(context, element, imageAttributes);
      });
    }
  }]);

  return ScaleOverlayTool;
}(_BaseTool3.default);

/**
 * Computes the max bound for scales on the image
 * @param  {} canvasSize
 * @param  {} horizontalReduction
 * @param  {} verticalReduction
 */


exports.default = ScaleOverlayTool;
var computeScaleBounds = function computeScaleBounds(canvasSize, horizontalReduction, verticalReduction) {
  var hReduction = horizontalReduction * Math.min(1000, canvasSize.width);
  var vReduction = verticalReduction * Math.min(1000, canvasSize.height);
  var canvasBounds = {
    left: hReduction,
    top: vReduction,
    width: canvasSize.width - 2 * hReduction,
    height: canvasSize.height - 2 * vReduction
  };

  return {
    topLeft: {
      x: canvasBounds.left,
      y: canvasBounds.top
    },
    bottomRight: {
      x: canvasBounds.left + canvasBounds.width,
      y: canvasBounds.top + canvasBounds.height
    }
  };
};

/**
 * @param  {} context
 * @param  {} imageAttributes
 */
var drawVerticalScalebarIntervals = function drawVerticalScalebarIntervals(context, element, imageAttributes) {
  var i = 0;

  while (imageAttributes.verticalLine.start.y + i * imageAttributes.verticalMinorTick <= imageAttributes.vscaleBounds.bottomRight.y) {
    var color = imageAttributes.color,
        lineWidth = imageAttributes.lineWidth;

    var startPoint = {
      x: imageAttributes.verticalLine.start.x,
      y: imageAttributes.verticalLine.start.y + i * imageAttributes.verticalMinorTick
    };

    var endPoint = {
      x: 0,
      y: imageAttributes.verticalLine.start.y + i * imageAttributes.verticalMinorTick
    };

    if (i % 5 === 0) {
      endPoint.x = imageAttributes.verticalLine.start.x - imageAttributes.majorTickLength;
    } else {
      endPoint.x = imageAttributes.verticalLine.start.x - imageAttributes.minorTickLength;
    }

    (0, _drawing.drawLine)(context, element, startPoint, endPoint, {
      color: color,
      lineWidth: lineWidth
    }, 'canvas');

    i++;
  }
};

var drawHorizontalScalebarIntervals = function drawHorizontalScalebarIntervals(context, element, imageAttributes) {
  var i = 0;

  while (imageAttributes.horizontalLine.start.x + i * imageAttributes.horizontalMinorTick <= imageAttributes.hscaleBounds.bottomRight.x) {
    var color = imageAttributes.color,
        lineWidth = imageAttributes.lineWidth;

    var startPoint = {
      x: imageAttributes.horizontalLine.start.x + i * imageAttributes.horizontalMinorTick,
      y: imageAttributes.horizontalLine.start.y
    };

    var endPoint = {
      x: imageAttributes.horizontalLine.start.x + i * imageAttributes.horizontalMinorTick,
      y: 0
    };

    if (i % 5 === 0) {
      endPoint.y = imageAttributes.horizontalLine.start.y - imageAttributes.majorTickLength;
    } else {
      endPoint.y = imageAttributes.horizontalLine.start.y - imageAttributes.minorTickLength;
    }

    (0, _drawing.drawLine)(context, element, startPoint, endPoint, {
      color: color,
      lineWidth: lineWidth
    }, 'canvas');

    i++;
  }
};

/***/ }),

/***/ "./tools/StackScrollMouseWheelTool.js":
/*!********************************************!*\
  !*** ./tools/StackScrollMouseWheelTool.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTool2 = __webpack_require__(/*! ./../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

var _scroll = __webpack_require__(/*! ../util/scroll.js */ "./util/scroll.js");

var _scroll2 = _interopRequireDefault(_scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-loop-func: 0 */ // --> OFF
/* eslint no-underscore-dangle: 0 */


var StackScrollMouseWheelTool = function (_BaseTool) {
  _inherits(StackScrollMouseWheelTool, _BaseTool);

  function StackScrollMouseWheelTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'StackScrollMouseWheel';

    _classCallCheck(this, StackScrollMouseWheelTool);

    return _possibleConstructorReturn(this, (StackScrollMouseWheelTool.__proto__ || Object.getPrototypeOf(StackScrollMouseWheelTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse'],
      configuration: {
        loop: false,
        allowSkipping: true
      }
    }));
  }

  _createClass(StackScrollMouseWheelTool, [{
    key: 'mouseWheelCallback',
    value: function mouseWheelCallback(evt) {
      var _evt$detail = evt.detail,
          images = _evt$detail.direction,
          element = _evt$detail.element;
      var _configuration = this.configuration,
          loop = _configuration.loop,
          allowSkipping = _configuration.allowSkipping;


      (0, _scroll2.default)(element, -images, loop, allowSkipping);
    }
  }]);

  return StackScrollMouseWheelTool;
}(_BaseTool3.default);

exports.default = StackScrollMouseWheelTool;

/***/ }),

/***/ "./tools/StackScrollMultiTouchTool.js":
/*!********************************************!*\
  !*** ./tools/StackScrollMultiTouchTool.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTool = __webpack_require__(/*! ../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool2 = _interopRequireDefault(_BaseTool);

var _scroll = __webpack_require__(/*! ../util/scroll.js */ "./util/scroll.js");

var _scroll2 = _interopRequireDefault(_scroll);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _toolOptions = __webpack_require__(/*! ../toolOptions.js */ "./toolOptions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-loop-func: 0 */ // --> OFF
/* eslint no-underscore-dangle: 0 */


var _class = function (_baseTool) {
  _inherits(_class, _baseTool);

  function _class() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'StackScrollMultiTouch';

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, {
      name: name,
      supportedInteractionTypes: ['touch'],
      configuration: {
        loop: false,
        allowSkipping: true,
        touchPointers: 3
      }
    }));

    _this.multiTouchDragCallback = _this._dragCallback.bind(_this);
    return _this;
  }

  _createClass(_class, [{
    key: '_dragCallback',
    value: function _dragCallback(evt) {
      var eventData = evt.detail;

      if (eventData.numPointers === this.configuration.touchPointers) {
        var element = eventData.element,
            deltaPoints = eventData.deltaPoints;
        var _configuration = this.configuration,
            loop = _configuration.loop,
            allowSkipping = _configuration.allowSkipping;

        var options = (0, _toolOptions.getToolOptions)(this.name, element);

        var pixelsPerImage = this._getPixelPerImage(element);
        var deltaY = this._getDeltaY(element, deltaPoints.page.y);

        if (!pixelsPerImage) {
          return;
        }

        if (Math.abs(deltaY) >= pixelsPerImage) {
          var imageIdIndexOffset = Math.round(deltaY / pixelsPerImage);

          (0, _scroll2.default)(element, imageIdIndexOffset, loop, allowSkipping);

          options.deltaY = deltaY % pixelsPerImage;
        } else {
          options.deltaY = deltaY;
        }

        (0, _toolOptions.setToolOptions)(this.name, element, options);
      }
    }
  }, {
    key: '_getDeltaY',
    value: function _getDeltaY(element, deltaPointsY) {
      var options = (0, _toolOptions.getToolOptions)(this.name, element);
      var deltaY = options.deltaY || 0;

      return deltaY + deltaPointsY;
    }
  }, {
    key: '_getPixelPerImage',
    value: function _getPixelPerImage(element) {
      var toolData = (0, _toolState.getToolState)(element, 'stack');

      if (!toolData || !toolData.data || !toolData.data.length) {
        return;
      }

      var stackData = toolData.data[0];
      var stackScrollSpeed = this.configuration.stackScrollSpeed;

      // The Math.max here makes it easier to mouseDrag-scroll small or really large image stacks

      return stackScrollSpeed || Math.max(2, element.offsetHeight / Math.max(stackData.imageIds.length, 8));
    }
  }]);

  return _class;
}(_BaseTool2.default);

exports.default = _class;

/***/ }),

/***/ "./tools/StackScrollTool.js":
/*!**********************************!*\
  !*** ./tools/StackScrollTool.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTool2 = __webpack_require__(/*! ./../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

var _scroll = __webpack_require__(/*! ../util/scroll.js */ "./util/scroll.js");

var _scroll2 = _interopRequireDefault(_scroll);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _toolOptions = __webpack_require__(/*! ../toolOptions.js */ "./toolOptions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-loop-func: 0 */ // --> OFF
/* eslint no-underscore-dangle: 0 */


var StackScrollTool = function (_BaseTool) {
  _inherits(StackScrollTool, _BaseTool);

  function StackScrollTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'StackScroll';

    _classCallCheck(this, StackScrollTool);

    var _this = _possibleConstructorReturn(this, (StackScrollTool.__proto__ || Object.getPrototypeOf(StackScrollTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse', 'touch'],
      configuration: {
        loop: false,
        allowSkipping: true
      }
    }));

    _this.mouseDragCallback = _this._dragCallback.bind(_this);
    _this.touchDragCallback = _this._dragCallback.bind(_this);
    return _this;
  }

  _createClass(StackScrollTool, [{
    key: '_dragCallback',
    value: function _dragCallback(evt) {
      var eventData = evt.detail;
      var element = eventData.element,
          deltaPoints = eventData.deltaPoints;
      var _configuration = this.configuration,
          loop = _configuration.loop,
          allowSkipping = _configuration.allowSkipping;

      var options = (0, _toolOptions.getToolOptions)(this.name, element);

      var pixelsPerImage = this._getPixelPerImage(element);
      var deltaY = this._getDeltaY(element, deltaPoints.page.y);

      if (!pixelsPerImage) {
        return;
      }

      if (Math.abs(deltaY) >= pixelsPerImage) {
        var imageIdIndexOffset = Math.round(deltaY / pixelsPerImage);

        (0, _scroll2.default)(element, imageIdIndexOffset, loop, allowSkipping);

        options.deltaY = deltaY % pixelsPerImage;
      } else {
        options.deltaY = deltaY;
      }

      (0, _toolOptions.setToolOptions)(this.name, element, options);
    }
  }, {
    key: '_getDeltaY',
    value: function _getDeltaY(element, deltaPointsY) {
      var options = (0, _toolOptions.getToolOptions)(this.name, element);
      var deltaY = options.deltaY || 0;

      return deltaY + deltaPointsY;
    }
  }, {
    key: '_getPixelPerImage',
    value: function _getPixelPerImage(element) {
      var toolData = (0, _toolState.getToolState)(element, 'stack');

      if (!toolData || !toolData.data || !toolData.data.length) {
        return;
      }

      var stackData = toolData.data[0];
      var stackScrollSpeed = this.configuration.stackScrollSpeed;

      // The Math.max here makes it easier to mouseDrag-scroll small or really large image stacks

      return stackScrollSpeed || Math.max(2, element.offsetHeight / Math.max(stackData.imageIds.length, 8));
    }
  }]);

  return StackScrollTool;
}(_BaseTool3.default);

exports.default = StackScrollTool;

/***/ }),

/***/ "./tools/TextMarkerTool.js":
/*!*********************************!*\
  !*** ./tools/TextMarkerTool.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseAnnotationTool2 = __webpack_require__(/*! ../base/BaseAnnotationTool.js */ "./base/BaseAnnotationTool.js");

var _BaseAnnotationTool3 = _interopRequireDefault(_BaseAnnotationTool2);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _pointInsideBoundingBox = __webpack_require__(/*! ../util/pointInsideBoundingBox.js */ "./util/pointInsideBoundingBox.js");

var _pointInsideBoundingBox2 = _interopRequireDefault(_pointInsideBoundingBox);

var _toolColors = __webpack_require__(/*! ../stateManagement/toolColors.js */ "./stateManagement/toolColors.js");

var _toolColors2 = _interopRequireDefault(_toolColors);

var _drawTextBox = __webpack_require__(/*! ../util/drawTextBox.js */ "./util/drawTextBox.js");

var _drawTextBox2 = _interopRequireDefault(_drawTextBox);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _drawing = __webpack_require__(/*! ../util/drawing.js */ "./util/drawing.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-underscore-dangle: 0 */
/* eslint class-methods-use-this: 0 */


var TextMarkerTool = function (_BaseAnnotationTool) {
  _inherits(TextMarkerTool, _BaseAnnotationTool);

  function TextMarkerTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'TextMarker';

    _classCallCheck(this, TextMarkerTool);

    var _this = _possibleConstructorReturn(this, (TextMarkerTool.__proto__ || Object.getPrototypeOf(TextMarkerTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse', 'touch'],
      configuration: {
        markers: [],
        current: '',
        ascending: true,
        loop: false,
        changeTextCallback: changeTextCallback
      }
    }));

    _this.touchPressCallback = _this._changeText.bind(_this);
    _this.doubleClickCallback = _this._changeText.bind(_this);
    return _this;
  }

  _createClass(TextMarkerTool, [{
    key: 'createNewMeasurement',
    value: function createNewMeasurement(eventData) {
      var config = this.configuration;

      if (!config.current) {
        return;
      }

      // Create the measurement data for this tool with the end handle activated
      var measurementData = {
        visible: true,
        active: true,
        text: config.current,
        color: undefined,
        handles: {
          end: {
            x: eventData.currentPoints.image.x,
            y: eventData.currentPoints.image.y,
            highlight: true,
            active: true,
            hasBoundingBox: true
          }
        }
      };

      // Create a rectangle representing the image
      var imageRect = {
        left: 0,
        top: 0,
        width: eventData.image.width,
        height: eventData.image.height
      };

      // Check if the current handle is outside the image,
      // If it is, prevent the handle creation
      if (!_externalModules2.default.cornerstoneMath.point.insideRect(measurementData.handles.end, imageRect)) {
        return;
      }

      // Update the current marker for the next marker
      var currentIndex = config.markers.indexOf(config.current);

      var increment = config.ascending ? 1 : -1;

      currentIndex += increment;

      if (currentIndex >= config.markers.length) {
        currentIndex = config.loop ? 0 : -1;
      } else if (currentIndex < 0) {
        currentIndex = config.loop ? config.markers.length : -1;
      }

      config.current = config.markers[currentIndex];

      return measurementData;
    }
  }, {
    key: 'pointNearTool',
    value: function pointNearTool(element, data, coords) {
      if (data.visible === false) {
        return false;
      }

      if (!data.handles.end.boundingBox) {
        return;
      }

      var distanceToPoint = _externalModules2.default.cornerstoneMath.rect.distanceToPoint(data.handles.end.boundingBox, coords);
      var insideBoundingBox = (0, _pointInsideBoundingBox2.default)(data.handles.end, coords);

      return distanceToPoint < 10 || insideBoundingBox;
    }
  }, {
    key: 'renderToolData',
    value: function renderToolData(evt) {
      var eventData = evt.detail;
      var config = this.configuration;

      // If we have no toolData for this element, return immediately as there is nothing to do
      var toolData = (0, _toolState.getToolState)(eventData.element, this.name);

      if (!toolData) {
        return;
      }

      // We have tool data for this element - iterate over each one and draw it
      var context = (0, _drawing.getNewContext)(eventData.canvasContext.canvas);

      var _loop = function _loop(i) {
        var data = toolData.data[i];

        if (data.visible === false) {
          return 'continue';
        }

        var color = _toolColors2.default.getColorIfActive(data);

        (0, _drawing.draw)(context, function (context) {
          (0, _drawing.setShadow)(context, config);

          var textCoords = _externalModules2.default.cornerstone.pixelToCanvas(eventData.element, data.handles.end);

          var options = {
            centering: {
              x: true,
              y: true
            }
          };

          data.handles.end.boundingBox = (0, _drawTextBox2.default)(context, data.text, textCoords.x, textCoords.y - 10, color, options);
        });
      };

      for (var i = 0; i < toolData.data.length; i++) {
        var _ret = _loop(i);

        if (_ret === 'continue') continue;
      }
    }
  }, {
    key: '_changeText',
    value: function _changeText(evt) {
      var eventData = evt.detail;
      var element = eventData.element,
          currentPoints = eventData.currentPoints;

      var data = void 0;

      function doneChangingTextCallback(data, updatedText, deleteTool) {
        if (deleteTool === true) {
          (0, _toolState.removeToolState)(element, this.name, data);
        } else {
          data.text = updatedText;
        }

        data.active = false;
        _externalModules2.default.cornerstone.updateImage(element);
      }

      var config = this.configuration;
      var coords = currentPoints.canvas;
      var toolData = (0, _toolState.getToolState)(element, this.name);

      // Now check to see if there is a handle we can move
      if (!toolData) {
        return;
      }

      for (var i = 0; i < toolData.data.length; i++) {
        data = toolData.data[i];
        if (this.pointNearTool(element, data, coords)) {
          data.active = true;
          _externalModules2.default.cornerstone.updateImage(element);

          // Allow relabelling via a callback
          config.changeTextCallback(data, eventData, doneChangingTextCallback);

          evt.stopImmediatePropagation();
          evt.preventDefault();
          evt.stopPropagation();

          return;
        }
      }
    }
  }]);

  return TextMarkerTool;
}(_BaseAnnotationTool3.default);

/**
 * This function is a callback to be overwriten in order to provide the wante feature
 * modal, overlay, popup or any kind of interaction with the user to be able to update
 * the text marker label.
 *
 * @param  {} data
 * @param  {} eventData
 * @param  {} doneChangingTextCallback
 */


exports.default = TextMarkerTool;
var changeTextCallback = function changeTextCallback(data, eventData, doneChangingTextCallback) {
  doneChangingTextCallback(data, prompt('Change your annotation:'));
};

/***/ }),

/***/ "./tools/WwwcRegionTool.js":
/*!*********************************!*\
  !*** ./tools/WwwcRegionTool.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ./../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseTool2 = __webpack_require__(/*! ./../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

var _drawing = __webpack_require__(/*! ../util/drawing.js */ "./util/drawing.js");

var _clip = __webpack_require__(/*! ../util/clip.js */ "./util/clip.js");

var _clip2 = _interopRequireDefault(_clip);

var _getLuminance = __webpack_require__(/*! ../util/getLuminance.js */ "./util/getLuminance.js");

var _getLuminance2 = _interopRequireDefault(_getLuminance);

var _toolColors = __webpack_require__(/*! ./../stateManagement/toolColors.js */ "./stateManagement/toolColors.js");

var _toolColors2 = _interopRequireDefault(_toolColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-loop-func: 0 */ // --> OFF
/* eslint no-underscore-dangle: 0 */

// Drawing


var wwwcRegionTool = function (_BaseTool) {
  _inherits(wwwcRegionTool, _BaseTool);

  function wwwcRegionTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'WwwcRegion';

    _classCallCheck(this, wwwcRegionTool);

    var _this = _possibleConstructorReturn(this, (wwwcRegionTool.__proto__ || Object.getPrototypeOf(wwwcRegionTool)).call(this, {
      name: name,
      supportedInteractionTypes: ['mouse', 'touch'],
      configuration: {
        minWindowWidth: 10
      }
    }));

    _this._resetHandles();
    // Touch
    _this.postTouchStartCallback = _this._startOutliningRegion.bind(_this);
    _this.touchDragCallback = _this._setHandlesAndUpdate.bind(_this);
    _this.touchEndCallback = _this._applyStrategy.bind(_this);
    // Mouse
    _this.postMouseDownCallback = _this._startOutliningRegion.bind(_this);
    _this.mouseClickCallback = _this._startOutliningRegion.bind(_this);
    _this.mouseDragCallback = _this._setHandlesAndUpdate.bind(_this);
    _this.mouseMoveCallback = _this._setHandlesAndUpdate.bind(_this);
    _this.mouseUpCallback = _this._applyStrategy.bind(_this);
    return _this;
  }

  _createClass(wwwcRegionTool, [{
    key: 'renderToolData',
    value: function renderToolData(evt) {
      var _this2 = this;

      var eventData = evt.detail;
      var element = eventData.element;

      var color = _toolColors2.default.getColorIfActive({ active: true });
      var context = (0, _drawing.getNewContext)(eventData.canvasContext.canvas);

      (0, _drawing.draw)(context, function (context) {
        (0, _drawing.drawRect)(context, element, _this2.handles.start, _this2.handles.end, {
          color: color
        });
      });
    }

    /**
     * Sets the start handle point and claims the eventDispatcher event
     *
     * @param {*} evt
     * @returns {Boolean} True
     */

  }, {
    key: '_startOutliningRegion',
    value: function _startOutliningRegion(evt) {
      var consumeEvent = true;
      var element = evt.detail.element;
      var image = evt.detail.currentPoints.image;

      if (isEmptyObject(this.handles.start)) {
        this.handles.start = image;
      } else {
        this.handles.end = image;
        this._applyStrategy(evt);
      }

      _externalModules2.default.cornerstone.updateImage(element);

      return consumeEvent;
    }

    /**
     * This function will update the handles and updateImage to force re-draw
     *
     * @param  {} evt
     */

  }, {
    key: '_setHandlesAndUpdate',
    value: function _setHandlesAndUpdate(evt) {
      var element = evt.detail.element;
      var image = evt.detail.currentPoints.image;

      this.handles.end = image;
      _externalModules2.default.cornerstone.updateImage(element);
    }

    /**
     * Event handler for MOUSE_UP during handle drag event loop.
     *
     * @param {Object} evt - The event.
     */

  }, {
    key: '_applyStrategy',
    value: function _applyStrategy(evt) {
      if (isEmptyObject(this.handles.start) || isEmptyObject(this.handles.end)) {
        return;
      }

      evt.detail.handles = this.handles;
      applyWWWCRegion(evt, this.configuration);
      this._resetHandles();
    }

    /**
     * Sets the start and end handle points to empty objects
     *
     */

  }, {
    key: '_resetHandles',
    value: function _resetHandles() {
      this.handles = {
        start: {},
        end: {}
      };
    }
  }]);

  return wwwcRegionTool;
}(_BaseTool3.default);

/**
 *
 *
 * @param {*} obj
 */


exports.default = wwwcRegionTool;
var isEmptyObject = function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

/**
 * Calculates the minimum and maximum value in the given pixel array
 *
 * @param {*} evt
 * @param {*} config
 */
var applyWWWCRegion = function applyWWWCRegion(evt, config) {
  var eventData = evt.detail;
  var image = eventData.image,
      element = eventData.element;
  var _evt$detail$handles = evt.detail.handles,
      startPoint = _evt$detail$handles.start,
      endPoint = _evt$detail$handles.end;

  // Get the rectangular region defined by the handles

  var left = Math.min(startPoint.x, endPoint.x);
  var top = Math.min(startPoint.y, endPoint.y);
  var width = Math.abs(startPoint.x - endPoint.x);
  var height = Math.abs(startPoint.y - endPoint.y);

  // Bound the rectangle so we don't get undefined pixels
  left = (0, _clip2.default)(left, 0, image.width);
  top = (0, _clip2.default)(top, 0, image.height);
  width = Math.floor(Math.min(width, Math.abs(image.width - left)));
  height = Math.floor(Math.min(height, Math.abs(image.height - top)));

  // Get the pixel data in the rectangular region
  var pixelLuminanceData = (0, _getLuminance2.default)(element, left, top, width, height);

  // Calculate the minimum and maximum pixel values
  var minMaxMean = calculateMinMaxMean(pixelLuminanceData, image.minPixelValue, image.maxPixelValue);

  // Adjust the viewport window width and center based on the calculated values
  var viewport = eventData.viewport;

  if (config.minWindowWidth === undefined) {
    config.minWindowWidth = 10;
  }

  viewport.voi.windowWidth = Math.max(Math.abs(minMaxMean.max - minMaxMean.min), config.minWindowWidth);
  viewport.voi.windowCenter = minMaxMean.mean;

  _externalModules2.default.cornerstone.setViewport(element, viewport);
  _externalModules2.default.cornerstone.updateImage(element);
};

/**
 * Calculates the minimum, maximum, and mean value in the given pixel array
 *
 * @param {*} storedPixelLuminanceData
 * @param {*} globalMin
 * @param {*} globalMax
 * @returns
 */
var calculateMinMaxMean = function calculateMinMaxMean(storedPixelLuminanceData, globalMin, globalMax) {
  var numPixels = storedPixelLuminanceData.length;
  var min = globalMax;
  var max = globalMin;
  var sum = 0;

  if (numPixels < 2) {
    return {
      min: min,
      max: max,
      mean: (globalMin + globalMax) / 2
    };
  }

  for (var index = 0; index < numPixels; index++) {
    var spv = storedPixelLuminanceData[index];

    min = Math.min(min, spv);
    max = Math.max(max, spv);
    sum += spv;
  }

  return {
    min: min,
    max: max,
    mean: sum / numPixels
  };
};

/***/ }),

/***/ "./tools/WwwcTool.js":
/*!***************************!*\
  !*** ./tools/WwwcTool.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ./../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseTool2 = __webpack_require__(/*! ./../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WwwcTool = function (_BaseTool) {
  _inherits(WwwcTool, _BaseTool);

  function WwwcTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Wwwc';

    _classCallCheck(this, WwwcTool);

    var strategies = {
      basicLevelingStrategy: basicLevelingStrategy
    };

    return _possibleConstructorReturn(this, (WwwcTool.__proto__ || Object.getPrototypeOf(WwwcTool)).call(this, {
      name: name,
      strategies: strategies,
      supportedInteractionTypes: ['mouse', 'touch'],
      configuration: {
        orientation: 0
      }
    }));
  }

  _createClass(WwwcTool, [{
    key: 'mouseDragCallback',
    value: function mouseDragCallback(evt) {
      this.applyActiveStrategy(evt);
      _externalModules2.default.cornerstone.setViewport(evt.detail.element, evt.detail.viewport);
    }
  }, {
    key: 'touchDragCallback',
    value: function touchDragCallback(evt) {
      // Prevent CornerstoneToolsTouchStartActive from killing any press events
      evt.stopImmediatePropagation();
      this.applyActiveStrategy(evt);
      _externalModules2.default.cornerstone.setViewport(evt.detail.element, evt.detail.viewport);
    }
  }]);

  return WwwcTool;
}(_BaseTool3.default);

/**
 * Here we normalize the ww/wc adjustments so the same number of on screen pixels
 * adjusts the same percentage of the dynamic range of the image.  This is needed to
 * provide consistency for the ww/wc tool regardless of the dynamic range (e.g. an 8 bit
 * image will feel the same as a 16 bit image would)
 *
 * @param eventData
 */


exports.default = WwwcTool;
function basicLevelingStrategy(evt, _ref) {
  var orientation = _ref.orientation;

  var eventData = evt.detail;

  var maxVOI = eventData.image.maxPixelValue * eventData.image.slope + eventData.image.intercept;
  var minVOI = eventData.image.minPixelValue * eventData.image.slope + eventData.image.intercept;
  var imageDynamicRange = maxVOI - minVOI;
  var multiplier = imageDynamicRange / 1024;

  var deltaX = eventData.deltaPoints.page.x * multiplier;
  var deltaY = eventData.deltaPoints.page.y * multiplier;

  if (orientation === 0) {
    eventData.viewport.voi.windowWidth += deltaX;
    eventData.viewport.voi.windowCenter += deltaY;
  } else {
    eventData.viewport.voi.windowWidth += deltaY;
    eventData.viewport.voi.windowCenter += deltaX;
  }
}

/***/ }),

/***/ "./tools/ZoomMouseWheelTool.js":
/*!*************************************!*\
  !*** ./tools/ZoomMouseWheelTool.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ./../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseTool2 = __webpack_require__(/*! ./../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

var _zoom = __webpack_require__(/*! ./shared/zoom.js */ "./tools/shared/zoom.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ZoomMouseWheelTool = function (_BaseTool) {
  _inherits(ZoomMouseWheelTool, _BaseTool);

  function ZoomMouseWheelTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ZoomMouseWheel';

    _classCallCheck(this, ZoomMouseWheelTool);

    return _possibleConstructorReturn(this, (ZoomMouseWheelTool.__proto__ || Object.getPrototypeOf(ZoomMouseWheelTool)).call(this, {
      name: name,
      // TODO: Do we need a better way to specify mouseWheel?
      supportedInteractionTypes: ['mouse'],
      configuration: {
        minScale: 0.25,
        maxScale: 20.0
      }
    }));
  }

  /**
   *
   *
   * @param {*} evt
   */


  _createClass(ZoomMouseWheelTool, [{
    key: 'mouseWheelCallback',
    value: function mouseWheelCallback(evt) {
      var _evt$detail = evt.detail,
          element = _evt$detail.element,
          viewport = _evt$detail.viewport,
          direction = _evt$detail.direction;
      var _configuration = this.configuration,
          invert = _configuration.invert,
          maxScale = _configuration.maxScale,
          minScale = _configuration.minScale;

      var ticks = invert ? direction / 4 : -direction / 4;
      var updatedViewport = (0, _zoom.changeViewportScale)(viewport, ticks, {
        maxScale: maxScale,
        minScale: minScale
      });

      _externalModules2.default.cornerstone.setViewport(element, updatedViewport);
    }
  }]);

  return ZoomMouseWheelTool;
}(_BaseTool3.default);

exports.default = ZoomMouseWheelTool;

/***/ }),

/***/ "./tools/ZoomTool.js":
/*!***************************!*\
  !*** ./tools/ZoomTool.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseTool2 = __webpack_require__(/*! ../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

var _clip = __webpack_require__(/*! ../util/clip.js */ "./util/clip.js");

var _zoom = __webpack_require__(/*! ./shared/zoom.js */ "./tools/shared/zoom.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ZoomTool = function (_BaseTool) {
  _inherits(ZoomTool, _BaseTool);

  function ZoomTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Zoom';

    _classCallCheck(this, ZoomTool);

    var strategies = {
      default: defaultStrategy,
      translate: translateStrategy,
      zoomToCenter: zoomToCenterStrategy
    };

    return _possibleConstructorReturn(this, (ZoomTool.__proto__ || Object.getPrototypeOf(ZoomTool)).call(this, {
      name: name,
      strategies: strategies,
      defaultStrategy: 'default',
      supportedInteractionTypes: ['mouse', 'touch'],
      configuration: {
        invert: false,
        preventZoomOutsideImage: false,
        minScale: 0.25,
        maxScale: 20.0
      }
    }));
  }

  _createClass(ZoomTool, [{
    key: 'touchDragCallback',
    value: function touchDragCallback(evt) {
      dragCallback.call(this, evt);
    }
  }, {
    key: 'mouseDragCallback',
    value: function mouseDragCallback(evt) {
      dragCallback.call(this, evt);
    }
  }]);

  return ZoomTool;
}(_BaseTool3.default);

exports.default = ZoomTool;


var dragCallback = function dragCallback(evt) {
  var deltaY = evt.detail.deltaPoints.page.y;

  if (!deltaY) {
    return false;
  }

  this.applyActiveStrategy(evt, this.configuration);
  _externalModules2.default.cornerstone.setViewport(evt.detail.element, evt.detail.viewport);
};

/**
 * The default strategy keeps the target location fixed on the page
 * as we zoom in/out.
 *
 * @param {*} evt
 * @param {*} { invert, maxScale, minScale }
 */
function defaultStrategy(evt, _ref) {
  var invert = _ref.invert,
      maxScale = _ref.maxScale,
      minScale = _ref.minScale;

  var deltaY = evt.detail.deltaPoints.page.y;
  var ticks = invert ? -deltaY / 100 : deltaY / 100;
  var _evt$detail = evt.detail,
      element = _evt$detail.element,
      viewport = _evt$detail.viewport;
  var _ref2 = [evt.detail.startPoints.page.x, evt.detail.startPoints.page.y, evt.detail.startPoints.image.x, evt.detail.startPoints.image.y],
      startX = _ref2[0],
      startY = _ref2[1],
      imageX = _ref2[2],
      imageY = _ref2[3];

  // Calculate the new scale factor based on how far the mouse has changed

  var updatedViewport = (0, _zoom.changeViewportScale)(viewport, ticks, {
    maxScale: maxScale,
    minScale: minScale
  });

  _externalModules2.default.cornerstone.setViewport(element, updatedViewport);

  // Now that the scale has been updated, determine the offset we need to apply to the center so we can
  // Keep the original start location in the same position
  var newCoords = _externalModules2.default.cornerstone.pageToPixel(element, startX, startY);

  // The shift we will use is the difference between the original image coordinates of the point we've selected
  // And the image coordinates of the same point on the page after the viewport scaling above has been performed
  // This shift is in image coordinates, and is designed to keep the target location fixed on the page.
  var shift = {
    x: imageX - newCoords.x,
    y: imageY - newCoords.y
  };

  // Correct the required shift using the viewport rotation and flip parameters
  shift = (0, _zoom.correctShift)(shift, updatedViewport);

  // Apply the shift to the Viewport's translation setting
  viewport.translation.x -= shift.x;
  viewport.translation.y -= shift.y;
}

function translateStrategy(evt, _ref3) {
  var invert = _ref3.invert,
      preventZoomOutsideImage = _ref3.preventZoomOutsideImage,
      maxScale = _ref3.maxScale,
      minScale = _ref3.minScale;

  var deltaY = evt.detail.deltaPoints.page.y;
  var ticks = invert ? -deltaY / 100 : deltaY / 100;
  var image = evt.detail.image;
  var viewport = evt.detail.viewport;
  var _ref4 = [evt.detail.startPoints.image.x, evt.detail.startPoints.image.y],
      startX = _ref4[0],
      startY = _ref4[1];

  // Calculate the new scale factor based on how far the mouse has changed
  // Note that in this case we don't need to update the viewport after the initial
  // Zoom step since we aren't don't intend to keep the target position static on
  // The page

  var updatedViewport = (0, _zoom.changeViewportScale)(viewport, ticks, {
    maxScale: maxScale,
    minScale: minScale
  });

  // Define the default shift to take place during this zoom step
  var shift = {
    x: 0,
    y: 0
  };

  // Define the parameters for the translate strategy
  var translateSpeed = 8;
  var outwardsMinScaleToTranslate = 3;
  var minTranslation = 0.01;

  if (ticks < 0) {
    // Zoom outwards from the image center
    if (updatedViewport.scale < outwardsMinScaleToTranslate) {
      // If the current translation is smaller than the minimum desired translation,
      // Set the translation to zero
      if (Math.abs(updatedViewport.translation.x) < minTranslation) {
        updatedViewport.translation.x = 0;
      } else {
        shift.x = updatedViewport.translation.x / translateSpeed;
      }

      // If the current translation is smaller than the minimum desired translation,
      // Set the translation to zero
      if (Math.abs(updatedViewport.translation.y) < minTranslation) {
        updatedViewport.translation.y = 0;
      } else {
        shift.y = updatedViewport.translation.y / translateSpeed;
      }
    }
  } else {
    // Zoom inwards to the current image point

    // Identify the coordinates of the point the user is trying to zoom into
    // If we are not allowed to zoom outside the image, bound the user-selected position to
    // A point inside the image
    if (preventZoomOutsideImage) {
      (0, _clip.clipToBox)(evt.detail.startPoints.image, image);
    }

    // Calculate the translation value that would place the desired image point in the center
    // Of the viewport
    var desiredTranslation = {
      x: image.width / 2 - startX,
      y: image.height / 2 - startY
    };

    // Correct the target location using the viewport rotation and flip parameters
    desiredTranslation = (0, _zoom.correctShift)(desiredTranslation, updatedViewport);

    // Calculate the difference between the current viewport translation value and the
    // Final desired translation values
    var distanceToDesired = {
      x: updatedViewport.translation.x - desiredTranslation.x,
      y: updatedViewport.translation.y - desiredTranslation.y
    };

    // If the current translation is smaller than the minimum desired translation,
    // Stop translating in the x-direction
    if (Math.abs(distanceToDesired.x) < minTranslation) {
      updatedViewport.translation.x = desiredTranslation.x;
    } else {
      // Otherwise, shift the viewport by one step
      shift.x = distanceToDesired.x / translateSpeed;
    }

    // If the current translation is smaller than the minimum desired translation,
    // Stop translating in the y-direction
    if (Math.abs(distanceToDesired.y) < minTranslation) {
      updatedViewport.translation.y = desiredTranslation.y;
    } else {
      // Otherwise, shift the viewport by one step
      shift.y = distanceToDesired.y / translateSpeed;
    }
  }

  // Apply the shift to the Viewport's translation setting
  updatedViewport.translation.x -= shift.x;
  updatedViewport.translation.y -= shift.y;
}

function zoomToCenterStrategy(evt, _ref5) {
  var invert = _ref5.invert,
      maxScale = _ref5.maxScale,
      minScale = _ref5.minScale;

  var deltaY = evt.detail.deltaPoints.page.y;
  var ticks = invert ? -deltaY / 100 : deltaY / 100;
  var viewport = evt.detail.viewport;

  // Calculate the new scale factor based on how far the mouse has changed
  (0, _zoom.changeViewportScale)(viewport, ticks, {
    maxScale: maxScale,
    minScale: minScale
  });
}

/***/ }),

/***/ "./tools/ZoomTouchPinchTool.js":
/*!*************************************!*\
  !*** ./tools/ZoomTouchPinchTool.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _externalModules = __webpack_require__(/*! ./../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _BaseTool2 = __webpack_require__(/*! ./../base/BaseTool.js */ "./base/BaseTool.js");

var _BaseTool3 = _interopRequireDefault(_BaseTool2);

var _zoom = __webpack_require__(/*! ./shared/zoom.js */ "./tools/shared/zoom.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ZoomTouchPinchTool = function (_BaseTool) {
  _inherits(ZoomTouchPinchTool, _BaseTool);

  function ZoomTouchPinchTool() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ZoomTouchPinch';

    _classCallCheck(this, ZoomTouchPinchTool);

    return _possibleConstructorReturn(this, (ZoomTouchPinchTool.__proto__ || Object.getPrototypeOf(ZoomTouchPinchTool)).call(this, {
      name: name,
      // TODO: Do we need a better way to specify touchPinch?
      supportedInteractionTypes: ['touch'],
      configuration: {
        minScale: 0.25,
        maxScale: 20.0
      }
    }));
  }

  /**
   *
   *
   * @param {*} evt
   */


  _createClass(ZoomTouchPinchTool, [{
    key: 'touchPinchCallback',
    value: function touchPinchCallback(evt) {
      var _evt$detail = evt.detail,
          element = _evt$detail.element,
          viewport = _evt$detail.viewport,
          scaleChange = _evt$detail.scaleChange;
      var _ref = [evt.detail.startPoints.page.x, evt.detail.startPoints.page.y, evt.detail.startPoints.image.x, evt.detail.startPoints.image.y],
          pageStartX = _ref[0],
          pageStartY = _ref[1],
          imageStartX = _ref[2],
          imageStartY = _ref[3];
      var _configuration = this.configuration,
          maxScale = _configuration.maxScale,
          minScale = _configuration.minScale;

      // Change the scale based on the pinch gesture's scale change

      viewport.scale += scaleChange * viewport.scale;
      if (maxScale && viewport.scale > maxScale) {
        viewport.scale = maxScale;
      } else if (minScale && viewport.scale < minScale) {
        viewport.scale = minScale;
      }

      _externalModules2.default.cornerstone.setViewport(element, viewport);

      // Now that the scale has been updated, determine the offset we need to apply to the center so we can
      // Keep the original start location in the same position
      var newCoords = _externalModules2.default.cornerstone.pageToPixel(element, pageStartX, pageStartY);
      var shift = {
        x: imageStartX - newCoords.x,
        y: imageStartY - newCoords.y
      };

      shift = (0, _zoom.correctShift)(shift, viewport);
      viewport.translation.x -= shift.x;
      viewport.translation.y -= shift.y;
      _externalModules2.default.cornerstone.setViewport(element, viewport);
    }
  }]);

  return ZoomTouchPinchTool;
}(_BaseTool3.default);

exports.default = ZoomTouchPinchTool;

/***/ }),

/***/ "./tools/shared/KeyboardController.js":
/*!********************************************!*\
  !*** ./tools/shared/KeyboardController.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keyCodes = __webpack_require__(/*! ./keyCodes.js */ "./tools/shared/keyCodes.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(tool, keyBinds) {
    _classCallCheck(this, _class);

    if (this.constructor._containsInvalidKeybind(keyBinds)) {
      throw new Error('Illegal binding, modifier keys are reserved for modifying mouse input.');
    }

    var keyInterface = this.constructor._generateKeyInterface(tool, keyBinds);

    Object.keys(keyInterface).forEach(function (key) {
      if (typeof keyInterface[key] !== 'function') {
        throw new Error('Element ' + key + ' of the keyInterface is not a function');
      }
    });

    this._keyInterface = keyInterface;
  }

  /**
   * Calls the function mapped to the keypress
   *
   * @param  {Number} keyCode description
   * @return {Boolean} Whether a function was called.
   */


  _createClass(_class, [{
    key: 'keyPress',
    value: function keyPress(keyCode) {
      var keyPressed = (0, _keyCodes.getKey)(keyCode);

      if (keyPressed === undefined) {
        throw new Error('keyCode ' + keyCode + ' is not valid mapping');
      }

      var keyInterface = this._keyInterface;

      var imageNeedsUpdate = false;

      Object.keys(keyInterface).some(function (key) {
        if (keyPressed === key) {
          keyInterface[key]();
          imageNeedsUpdate = true;

          return true;
        }
      });

      return imageNeedsUpdate;
    }

    /**
     * Returns true if modifier keys are contained in the keyBinds.
     *
     * @static
     * @private
     * @param  {Object} keyBinds Object defining the keybinds.
     * @return {Boolean}
     */

  }], [{
    key: '_containsInvalidKeybind',
    value: function _containsInvalidKeybind(keyBinds) {
      var invalidKeybind = false;

      Object.keys(keyBinds).forEach(function (key) {
        if (keyBinds[key] === 'CTRL' || keyBinds[key] === 'SHIFT' || keyBinds[key] === 'META' || keyBinds[key] === 'ALT') {
          invalidKeybind = true;
        }
      });

      return invalidKeybind;
    }

    /**
     * Generates the keyInterface used by the controller.
     *
     * @static
     * @private
     * @param  {Object} tool     Reference to the tool instance.
     * @param  {Object} keyBinds Object defining the keybinds.
     * @return {Object}          The generated keyInterface.
     */

  }, {
    key: '_generateKeyInterface',
    value: function _generateKeyInterface(tool, keyBinds) {
      var keyInterface = {};

      Object.keys(keyBinds).forEach(function (key) {
        keyInterface[keyBinds[key]] = tool[key].bind(tool);
      });

      return keyInterface;
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),

/***/ "./tools/shared/angleBetweenPoints.js":
/*!********************************************!*\
  !*** ./tools/shared/angleBetweenPoints.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @param  {} p0  center point
 * @param  {} p1  initial point
 * @param  {} p2  final point
 */
exports.default = function (p0, p1, p2) {
  // Calculate the (interior) angle in degrees from the initial mouse location
  // To the current mouse location in relation to the center point
  var p12 = Math.sqrt(Math.pow(p0.x - p1.x, 2) + Math.pow(p0.y - p1.y, 2));
  var p13 = Math.sqrt(Math.pow(p0.x - p2.x, 2) + Math.pow(p0.y - p2.y, 2));
  var p23 = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

  var angle = Math.acos((Math.pow(p12, 2) + Math.pow(p13, 2) - Math.pow(p23, 2)) / (2 * p12 * p13)) * 180 / Math.PI;

  // The direction of the angle (> 0 clockwise, < 0 anti-clockwise)
  var direction = (p1.x - p0.x) * (p2.y - p0.y) - (p1.y - p0.y) * (p2.x - p0.x);

  return {
    angle: angle,
    direction: direction
  };
};

/***/ }),

/***/ "./tools/shared/brushUtils/drawBrush.js":
/*!**********************************************!*\
  !*** ./tools/shared/brushUtils/drawBrush.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawBrushOnCanvas = exports.drawBrushPixels = undefined;

var _externalModules = __webpack_require__(/*! ../../../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _drawing = __webpack_require__(/*! ../../../util/drawing.js */ "./util/drawing.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function drawBrushPixels(pointerArray, storedPixels, brushPixelValue, columns) {
  var shouldErase = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  var getPixelIndex = function getPixelIndex(x, y) {
    return y * columns + x;
  };

  pointerArray.forEach(function (point) {
    var spIndex = getPixelIndex(point[0], point[1]);

    storedPixels[spIndex] = shouldErase ? 0 : 1;
  });
}

function drawBrushOnCanvas(pointerArray, context, color, element) {
  var canvasPtTL = _externalModules2.default.cornerstone.pixelToCanvas(element, { x: 0,
    y: 0 });
  var canvasPtBR = _externalModules2.default.cornerstone.pixelToCanvas(element, { x: 1,
    y: 1 });
  var sizeX = canvasPtBR.x - canvasPtTL.x;
  var sizeY = canvasPtBR.y - canvasPtTL.y;

  (0, _drawing.draw)(context, function (context) {
    pointerArray.forEach(function (point) {
      var canvasPt = _externalModules2.default.cornerstone.pixelToCanvas(element, {
        x: point[0],
        y: point[1]
      });
      var boundingBox = {
        left: canvasPt.x,
        top: canvasPt.y,
        width: sizeX,
        height: sizeY
      };

      (0, _drawing.fillBox)(context, boundingBox, color);
    });
  });
}

exports.drawBrushPixels = drawBrushPixels;
exports.drawBrushOnCanvas = drawBrushOnCanvas;

/***/ }),

/***/ "./tools/shared/brushUtils/getCircle.js":
/*!**********************************************!*\
  !*** ./tools/shared/brushUtils/getCircle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCircle;
function getCircle(radius, rows, columns) {
  var xCoord = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var yCoord = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  var x0 = Math.round(xCoord);
  var y0 = Math.round(yCoord);

  if (radius === 1) {
    return [[x0, y0]];
  }

  var circleArray = [];
  var index = 0;

  for (var y = -radius; y <= radius; y++) {
    var _yCoord = y0 + y;

    if (_yCoord > rows || _yCoord < 0) {
      continue;
    }

    for (var x = -radius; x <= radius; x++) {
      var _xCoord = x0 + x;

      if (_xCoord > columns || _xCoord < 0) {
        continue;
      }

      if (x * x + y * y < radius * radius) {
        circleArray[index++] = [x0 + x, y0 + y];
      }
    }
  }

  return circleArray;
}

/***/ }),

/***/ "./tools/shared/freehandUtils/ClickedLineData.js":
/*!*******************************************************!*\
  !*** ./tools/shared/freehandUtils/ClickedLineData.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @typedef {Object} ClickedLineData
 * @property {Number} toolIndex ID of the tool that the line corresponds to.
 * @property {Object} handleIndexArray An array of the handle indicies that correspond to the line segment.
 */
var ClickedLineData =

/**
* Constructs an object containing information about the clicked line.
*
* @param {Number} toolIndex - The ID of the tool the line corresponds to.
* @param {Object} handleIndexArray - An array of the handle indicies that correspond to the line segment.
*/
exports.ClickedLineData = function ClickedLineData(toolIndex, handleIndexArray) {
  _classCallCheck(this, ClickedLineData);

  this.toolIndex = toolIndex;
  this.handleIndexArray = handleIndexArray;
};

/***/ }),

/***/ "./tools/shared/freehandUtils/FreehandHandleData.js":
/*!**********************************************************!*\
  !*** ./tools/shared/freehandUtils/FreehandHandleData.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @typedef {Object} FreehandHandleData
 * @property {Number} x The x position.
 * @property {Number} y The y position.
 * @property {Boolean} highlight Whether the handle should be rendered as the highlighted color.
 * @property {Boolean} active Whether the handle is active.
 * @property {Object} lines An array of lines associated with the handle.
 */
var FreehandHandleData =

/**
* Constructs a a single handle for the freehand tool
*
* @param {Object} position - The position of the handle.
* @param {Boolean} highlight - whether the handle should be rendered as the highlighted color.
* @param {Boolean} active - whether the handle is active.
*/
exports.FreehandHandleData = function FreehandHandleData(position) {
  var highlight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var active = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  _classCallCheck(this, FreehandHandleData);

  this.x = position.x;
  this.y = position.y;
  this.highlight = highlight;
  this.active = active;
  this.lines = [];
};

/***/ }),

/***/ "./tools/shared/freehandUtils/FreehandLineFinder.js":
/*!**********************************************************!*\
  !*** ./tools/shared/freehandUtils/FreehandLineFinder.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FreehandLineFinder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _toolState = __webpack_require__(/*! ../../../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _externalModules = __webpack_require__(/*! ../../../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _ClickedLineData = __webpack_require__(/*! ./ClickedLineData.js */ "./tools/shared/freehandUtils/ClickedLineData.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var toolType = 'freehandMouse';
var distanceThreshold = 10;

var FreehandLineFinder = exports.FreehandLineFinder = function () {
  /* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

  /**
  * Constructs a linefinder with the eventdata
  *
  * @param {Object} eventData - Data object associated with the event.
  */
  function FreehandLineFinder(eventData) {
    _classCallCheck(this, FreehandLineFinder);

    this._eventData = eventData;
  }

  /**
  * Looks for lines near the mouse cursor.
  *
  *  @public
  *  @return {ClickedLineData}
  */


  _createClass(FreehandLineFinder, [{
    key: 'findLine',
    value: function findLine() {
      var closestToolIndex = this.findTool();

      if (closestToolIndex === null) {
        return null;
      }

      var closeLines = this._getCloseLinesInTool(closestToolIndex);

      if (closeLines) {
        var clickedLineData = this._findCorrectLine(closestToolIndex, closeLines);

        // Note: clickedLineData may be null if no valid projections are found.
        return clickedLineData;
      }

      // Return null if no valid close lines found.
      return null;
    }

    /**
    * Looks for tools near the mouse cursor.
    *
    *  @public
    *  @return {ClickedLineData}
    */

  }, {
    key: 'findTool',
    value: function findTool() {
      this._toolData = (0, _toolState.getToolState)(this._eventData.element, toolType);
      this._mousePoint = this._eventData.currentPoints.canvas;

      if (!this._toolData) {
        return null;
      }

      var closestHandle = this._nearestHandleToPointAllTools();

      return closestHandle.toolIndex;
    }

    /**
    * Finds the nearest handle to the mouse cursor for all tools.
    *
    * @return {Object} closestHandle - The handle closest to the point.
    */

  }, {
    key: '_nearestHandleToPointAllTools',
    value: function _nearestHandleToPointAllTools() {
      var toolData = this._toolData;

      var closestHandle = {
        toolIndex: null,
        handleIndex: null,
        distance: Infinity // Some large number
      };

      for (var toolIndex = 0; toolIndex < toolData.data.length; toolIndex++) {
        var closestHandleForToolI = this._nearestHandleToPoint(toolIndex);

        if (closestHandleForToolI === null) {
          continue;
        }

        if (closestHandleForToolI.distance < closestHandle.distance) {
          closestHandle = closestHandleForToolI;
        }
      }

      return closestHandle;
    }

    /**
    * Finds the nearest handle to the mouse cursor for a specific tool.
    *
    * @param {Number} toolIndex - The index of the particular freehand tool.
    * @return {Object} An object containing information about the closest handle.
    */

  }, {
    key: '_nearestHandleToPoint',
    value: function _nearestHandleToPoint(toolIndex) {
      var eventData = this._eventData;
      var toolData = this._toolData;

      var data = toolData.data[toolIndex];

      if (data.handles === undefined) {
        return null;
      }

      if (data.visible === false) {
        return null;
      }

      var closest = {
        toolIndex: toolIndex,
        handleIndex: null,
        distance: Infinity // Some large number
      };

      for (var i = 0; i < data.handles.length; i++) {
        var handleCanvas = _externalModules2.default.cornerstone.pixelToCanvas(eventData.element, data.handles[i]);
        var handleDistanceFromMousePoint = _externalModules2.default.cornerstoneMath.point.distance(handleCanvas, this._mousePoint);

        if (handleDistanceFromMousePoint < closest.distance) {
          closest.handleIndex = i;
          closest.distance = handleDistanceFromMousePoint;
        }
      }

      return closest;
    }

    /**
    * Finds all the lines close to the mouse point for a particular tool.
    *
    * @param {Number} toolIndex - The index of the particular freehand tool.
    * @return {Object} An array of lines close to the mouse point.
    */

  }, {
    key: '_getCloseLinesInTool',
    value: function _getCloseLinesInTool(toolIndex) {
      var toolData = this._toolData;
      var dataHandles = toolData.data[toolIndex].handles;

      var closeLines = [];

      for (var i = 0; i < dataHandles.length; i++) {
        var nextIndex = FreehandLineFinder.getNextHandleIndex(i, dataHandles.length);
        var d = this._distanceOfPointfromLine(dataHandles[i], dataHandles[nextIndex]);

        if (d < distanceThreshold) {
          closeLines.push([i, nextIndex]);
        }
      }

      return closeLines;
    }

    /**
    * Finds the line the user clicked on from an array of close lines.
    *
    * @param {Number} toolIndex - The index of the particular freehand tool.
    * @param {Object} closeLines - An array of lines close to the mouse point.
    * @return {ClickedLineData|null} An instance of ClickedLineData containing information about the line, or null if no line is correct.
    */

  }, {
    key: '_findCorrectLine',
    value: function _findCorrectLine(toolIndex, closeLines) {
      // Test if any candidate lines can be projected onto by the mousePoint
      for (var i = 0; i < closeLines.length; i++) {
        if (this._pointProjectsToLineSegment(toolIndex, closeLines[i])) {
          return new _ClickedLineData.ClickedLineData(toolIndex, closeLines[i]);
        }
      }

      // No valid line found
      return null;
    }

    /**
    * Returns true if the mouse point projects onto the line segment.
    *
    * @param {Number} toolIndex - The index of the particular freehand tool.
    * @param {Object} handleIndexArray - An array of indicies corresponding to the line segment.
    * @return {Boolean} True if the mouse point projects onto the line segment
    */

  }, {
    key: '_pointProjectsToLineSegment',
    value: function _pointProjectsToLineSegment(toolIndex, handleIndexArray) {
      var eventData = this._eventData;
      var toolData = this._toolData;
      var data = toolData.data[toolIndex];

      if (data.handles === undefined) {
        return;
      }

      if (data.visible === false) {
        return false;
      }

      var handle1 = data.handles[handleIndexArray[0]];
      var handle2 = data.handles[handleIndexArray[1]];

      var p = FreehandLineFinder.getCanvasPointsFromHandles(handle1, handle2, eventData.element);

      var r = FreehandLineFinder.getLineAsVector(p);
      var m = this._getLineOriginToMouseAsVector(p);

      // Project vector m onto r to see if the point is within bounds of line segment
      var mProj = (m[0] * r[0] + m[1] * r[1]) / r.magnitude;

      if (mProj > 0 && mProj < r.magnitude) {
        return true;
      }

      return false;
    }

    /**
    * Returns the canvas positions from the handle's pixel positions.
    *
    * @param {FreehandHandleData} handle1 - The first handle.
    * @param {FreehandHandleData} handle2 - The second handle.
    * @param {Object} element - The element on which the handles reside.
    * @return {Object} An array contsining the handle positions in canvas coordinates.
    */

  }, {
    key: '_getLineOriginToMouseAsVector',


    /**
    * Constructs a vector from the direction and magnitude of the line from the the line origin to the mouse cursor.
    *
    * @param {Object} p - An array of two points respresenting the line segment.
    * @return {Object} An array containing the x and y components of the vector.
    */
    value: function _getLineOriginToMouseAsVector(p) {
      var m = [this._mousePoint.x - p[0].x, this._mousePoint.y - p[0].y];

      return m;
    }

    /**
    * Calculates the perpendicular distance of the mouse cursor from a line segment.
    *
    * @param {FreehandHandleData} handle1 - The first handle.
    * @param {FreehandHandleData} handle2 - The first handle.
    * @return {Number} The perpendicular distance of the mouse cursor from the line segment.
    */

  }, {
    key: '_distanceOfPointfromLine',
    value: function _distanceOfPointfromLine(handle1, handle2) {
      var eventData = this._eventData;

      var p1 = _externalModules2.default.cornerstone.pixelToCanvas(eventData.element, handle1);
      var p2 = _externalModules2.default.cornerstone.pixelToCanvas(eventData.element, handle2);
      var pMouse = this._mousePoint;

      // Perpendicular distance of point from line:
      // = 2* area of triangle(p1,p2,pm) / length of triangle's base |p2 - p1|
      var twiceAreaOfTriangle = Math.abs((p2.y - p1.y) * pMouse.x - (p2.x - p1.x) * pMouse.y + p2.x * p1.y - p2.y * p1.x);
      var rMagnitude = _externalModules2.default.cornerstoneMath.point.distance(p1, p2);
      var d = twiceAreaOfTriangle / rMagnitude;

      return d;
    }

    /**
    * Gets the next handl index from a cyclical array of points.
    *
    * @param {Number} currentIndex - The current index.
    * @param {Number} length - The number of handles in the polygon.
    * @return {Number} The index of the next handle.
    */

  }], [{
    key: 'getCanvasPointsFromHandles',
    value: function getCanvasPointsFromHandles(handle1, handle2, element) {
      var p = [];

      // Point r from left to right so that we only have one orientation to test.
      if (handle1.x < handle2.x) {
        p.push(_externalModules2.default.cornerstone.pixelToCanvas(element, handle1));
        p.push(_externalModules2.default.cornerstone.pixelToCanvas(element, handle2));
      } else {
        p.push(_externalModules2.default.cornerstone.pixelToCanvas(element, handle2));
        p.push(_externalModules2.default.cornerstone.pixelToCanvas(element, handle1));
      }

      return p;
    }

    /**
    * Converts a line segment to a vector.
    *
    * @param {Object} p - An array of two points respresenting the line segment.
    * @return {Object} An array containing the x and y components of the vector, as well as a magnitude property.
    */

  }, {
    key: 'getLineAsVector',
    value: function getLineAsVector(p) {
      var r = [p[1].x - p[0].x, p[1].y - p[0].y];

      r.magnitude = _externalModules2.default.cornerstoneMath.point.distance(p[0], p[1]);

      return r;
    }
  }, {
    key: 'getNextHandleIndex',
    value: function getNextHandleIndex(currentIndex, length) {
      var nextIndex = void 0;

      if (currentIndex < length - 1) {
        nextIndex = currentIndex + 1;
      } else {
        nextIndex = 0;
      }

      return nextIndex;
    }
  }]);

  return FreehandLineFinder;
}();

/***/ }),

/***/ "./tools/shared/freehandUtils/calculateFreehandStatistics.js":
/*!*******************************************************************!*\
  !*** ./tools/shared/freehandUtils/calculateFreehandStatistics.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sp, boundingBox, dataHandles) {

  var statisticsObj = {
    count: 0,
    mean: 0.0,
    variance: 0.0,
    stdDev: 0.0
  };

  var sum = getSum(sp, boundingBox, dataHandles);

  if (sum.count === 0) {
    return statisticsObj;
  }

  statisticsObj.count = sum.count;
  statisticsObj.mean = sum.value / sum.count;
  statisticsObj.variance = sum.squared / sum.count - statisticsObj.mean * statisticsObj.mean;
  statisticsObj.stdDev = Math.sqrt(statisticsObj.variance);

  return statisticsObj;
};

var _pointInFreehand = __webpack_require__(/*! ./pointInFreehand.js */ "./tools/shared/freehandUtils/pointInFreehand.js");

var _pointInFreehand2 = _interopRequireDefault(_pointInFreehand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Calculates the sum, squared sum and count of all pixels within the polygon.
*
* @param {Object} sp - An array of the pixel data.
* @param {Object} boundingBox - Rectangular box enclosing the polygon.
* @param {Object} dataHandles - Data object associated with the tool.
* @return {Object} sum - Object containing the sum, squared sum and pixel count.
*/
function getSum(sp, boundingBox, dataHandles) {
  var sum = {
    value: 0,
    squared: 0,
    count: 0
  };
  var index = 0;

  for (var y = boundingBox.top; y < boundingBox.top + boundingBox.height; y++) {
    for (var x = boundingBox.left; x < boundingBox.left + boundingBox.width; x++) {
      var point = {
        x: x,
        y: y
      };

      sumPointIfInFreehand(dataHandles, point, sum, sp[index]);
      index++;
    }
  }

  return sum;
}

/**
* Adds the pixel to the workingSum if it is within the polygon.
*
* @param {Object} dataHandles - Data object associated with the tool.
* @param {Object} point - The pixel coordinates.
* @param {Object} workingSum - The working sum, squared sum and pixel count.
* @param {Object} pixelValue - The pixel value.
* @modifies {workingSum}
*/


/**
* Calculates the statistics of all the points within the freehand object.
*
* @param {Object} sp - An array of the pixel data.
* @param {Object} boundingBox - Rectangular box enclosing the polygon.
* @param {Object} dataHandles - Data object associated with the tool.
* @return {Object} statisticsObj - Object containing the derived statistics.
*/
function sumPointIfInFreehand(dataHandles, point, workingSum, pixelValue) {
  if ((0, _pointInFreehand2.default)(dataHandles, point)) {
    workingSum.value += pixelValue;
    workingSum.squared += pixelValue * pixelValue;
    workingSum.count++;
  }
}

/***/ }),

/***/ "./tools/shared/freehandUtils/freehandArea.js":
/*!****************************************************!*\
  !*** ./tools/shared/freehandUtils/freehandArea.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (dataHandles, scaling) {
  var freeHandArea = 0;
  var j = dataHandles.length - 1; // The last vertex is the previous one to the first

  scaling = scaling || 1; // If scaling is falsy, set scaling to 1

  for (var i = 0; i < dataHandles.length; i++) {
    freeHandArea += (dataHandles[j].x + dataHandles[i].x) * (dataHandles[j].y - dataHandles[i].y);
    j = i; // Here j is previous vertex to i
  }

  return Math.abs(freeHandArea * scaling / 2.0);
};

/***/ }),

/***/ "./tools/shared/freehandUtils/freehandIntersect.js":
/*!*********************************************************!*\
  !*** ./tools/shared/freehandUtils/freehandIntersect.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* Orientation algoritm to determine if two lines cross.
* Credit and details: geeksforgeeks.org/check-if-two-given-line-segments-intersect/
*/

/**
* Determines whether a new handle causes an intersection of the lines of the polygon.
*
* @param {Object} candidateHandle - The new handle to check.
* @param {Object} dataHandles - data object associated with the tool.
* @return {Boolean} - Whether the new line intersects with any other lines of the polygon.
*/
function newHandle(candidateHandle, dataHandles) {
  // Check if the proposed line will intersect any existent line
  var lastHandleId = dataHandles.length - 1;
  var lastHandle = getCoords(dataHandles[lastHandleId]);
  var newHandle = getCoords(candidateHandle);

  return doesIntersectOtherLines(dataHandles, lastHandle, newHandle, [lastHandleId]);
}

/**
* Checks if the last line of a polygon will intersect the other lines of the polgyon.
*
* @param {Object} dataHandles - data object associated with the tool.
* @return {Boolean} - Whether the last line intersects with any other lines of the polygon.
*/
function end(dataHandles) {
  var lastHandleId = dataHandles.length - 1;
  var lastHandle = getCoords(dataHandles[lastHandleId]);
  var firstHandle = getCoords(dataHandles[0]);

  return doesIntersectOtherLines(dataHandles, lastHandle, firstHandle, [lastHandleId, 0]);
}

/**
* Checks whether the modification of a handle's position causes intersection of the lines of the polygon
*
* @param {Object} dataHandles - data object associated with the tool.
* @param {Number} modifiedHandleId - The id of the handle being modified.
* @return {Boolean} - Whether the modfication causes any intersections.
*/
function modify(dataHandles, modifiedHandleId) {
  // Check if the modifiedHandle's previous and next lines will intersect any other line in the polygon
  var modifiedHandle = getCoords(dataHandles[modifiedHandleId]);

  // Previous neightbor handle
  var neighborHandleId = modifiedHandleId - 1;

  if (modifiedHandleId === 0) {
    neighborHandleId = dataHandles.length - 1;
  }

  var neighborHandle = getCoords(dataHandles[neighborHandleId]);

  if (doesIntersectOtherLines(dataHandles, modifiedHandle, neighborHandle, [modifiedHandleId, neighborHandleId])) {
    return true;
  }

  // Next neightbor handle
  if (modifiedHandleId === dataHandles.length - 1) {
    neighborHandleId = 0;
  } else {
    neighborHandleId = modifiedHandleId + 1;
  }

  neighborHandle = getCoords(dataHandles[neighborHandleId]);

  return doesIntersectOtherLines(dataHandles, modifiedHandle, neighborHandle, [modifiedHandleId, neighborHandleId]);
}

/**
* Checks whether the line (p1,q1) intersects any of the other lines in the polygon.
*
* @param {Object} dataHandles - data object associated with the tool.
* @param {Object} p1 - Coordinates of the start of the line.
* @param {Object} q1 - Coordinates of the end of the line.
* @param {Object} ignoredHandleIds - Ids of handles to ignore (i.e. lines that share a vertex with the line being tested).
* @return {Boolean} - Whether the line intersects any of the other lines in the polygon.
*/
function doesIntersectOtherLines(dataHandles, p1, q1, ignoredHandleIds) {
  var j = dataHandles.length - 1;

  for (var i = 0; i < dataHandles.length; i++) {

    if (ignoredHandleIds.indexOf(i) !== -1 || ignoredHandleIds.indexOf(j) !== -1) {
      j = i;
      continue;
    }

    var p2 = getCoords(dataHandles[j]);
    var q2 = getCoords(dataHandles[i]);

    if (doesIntersect(p1, q1, p2, q2)) {
      return true;
    }

    j = i;
  }

  return false;
}

/**
* Checks whether the line (p1,q1) intersects the line (p2,q2) via an orientation algorithm.
*
* @param {Object} p1 - Coordinates of the start of the line 1.
* @param {Object} q1 - Coordinates of the end of the line 1.
* @param {Object} p1 - Coordinates of the start of the line 2.
* @param {Object} q1 - Coordinates of the end of the line 2.
* @return {Boolean} - Whether lines (p1,q1) and (p2,q2) intersect.
*/
function doesIntersect(p1, q1, p2, q2) {
  var result = false;

  var orient = [orientation(p1, q1, p2), orientation(p1, q1, q2), orientation(p2, q2, p1), orientation(p2, q2, q1)];

  // General Case
  if (orient[0] !== orient[1] && orient[2] !== orient[3]) {
    return true;
  }

  // Special Cases
  if (orient[0] === 0 && onSegment(p1, p2, q1)) {
    // If p1, q1 and p2 are colinear and p2 lies on segment p1q1
    result = true;
  } else if (orient[1] === 0 && onSegment(p1, q2, q1)) {
    // If p1, q1 and p2 are colinear and q2 lies on segment p1q1
    result = true;
  } else if (orient[2] === 0 && onSegment(p2, p1, q2)) {
    // If p2, q2 and p1 are colinear and p1 lies on segment p2q2
    result = true;
  } else if (orient[3] === 0 && onSegment(p2, q1, q2)) {
    // If p2, q2 and q1 are colinear and q1 lies on segment p2q2
    result = true;
  }

  return result;
}

/*
* Returns an object with two properties, x and y, from a heavier FreehandHandleData object.
*
* @param {Object} dataHandle - data object associated with a single handle in the freehand tool.
* @return {Object} - An object containing position propeties x and y.
*/
function getCoords(dataHandle) {
  return {
    x: dataHandle.x,
    y: dataHandle.y
  };
}

/**
* Checks the orientation of 3 points.
*
* @param {Object} p - First point.
* @param {Object} q - Second point.
* @param {Object} r - Third point.
* @return {Number} - 0: Colinear, 1: Clockwise, 2: Anticlockwise
*/
function orientation(p, q, r) {
  var orientationValue = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);

  if (orientationValue === 0) {
    return 0; // Colinear
  }

  return orientationValue > 0 ? 1 : 2;
}

/**
* Checks if point q lines on the segment (p,r).
*
* @param {Object} p - Point p.
* @param {Object} q - Point q.
* @param {Object} r - Point r.
* @return {Boolean} - If q lies on line segment (p,r).
*/
function onSegment(p, q, r) {

  if (q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y)) {
    return true;
  }

  return false;
}

exports.default = {
  newHandle: newHandle,
  end: end,
  modify: modify
};

/***/ }),

/***/ "./tools/shared/freehandUtils/insertOrDelete.js":
/*!******************************************************!*\
  !*** ./tools/shared/freehandUtils/insertOrDelete.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (evt, nearby) {
  var eventData = evt.detail;

  if (nearby && nearby.handleNearby !== null) {
    var deleteInfo = {
      toolIndex: nearby.toolIndex,
      handleIndex: nearby.handleNearby
    };

    deletePoint(eventData, deleteInfo);
  } else {
    var freehandLineFinder = new _FreehandLineFinder.FreehandLineFinder(eventData);
    var insertInfo = freehandLineFinder.findLine();

    if (insertInfo) {
      insertPoint(eventData, insertInfo);
    }
  }
};

var _FreehandLineFinder = __webpack_require__(/*! ./FreehandLineFinder.js */ "./tools/shared/freehandUtils/FreehandLineFinder.js");

var _FreehandHandleData = __webpack_require__(/*! ./FreehandHandleData.js */ "./tools/shared/freehandUtils/FreehandHandleData.js");

var _toolState = __webpack_require__(/*! ../../../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _externalModules = __webpack_require__(/*! ../../../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toolType = 'freehandMouse';

/**
* Inserts or deletes a point from a freehand tool.
*
* @param {Object} e - The event.
* @param {Object} nearby - Object containing information about a nearby handle.
*/


/**
* Deletes a point from a freehand tool.
*
* @param {Object} eventData - The data object associated with the event.
* @param {Object} deleteInfo - Object containing information about which point to delete.
*/
function deletePoint(eventData, deleteInfo) {
  var toolData = (0, _toolState.getToolState)(eventData.element, toolType);

  if (toolData === undefined) {
    return;
  }

  var deleteHandle = deleteInfo.handleIndex;
  var toolIndex = deleteInfo.toolIndex;

  // Get the toolData from insertInfo
  var data = toolData.data[toolIndex];

  // Only allow delete if > 3 points
  if (data.handles.length <= 3) {
    return;
  }

  // Link the line of the previous handle to the one after handles[deleteHandle];
  if (deleteHandle === data.handles.length - 1) {
    data.handles[deleteHandle - 1].lines.pop();
    data.handles[deleteHandle - 1].lines.push(data.handles[0]);
  } else if (deleteHandle === 0) {
    data.handles[data.handles.length - 1].lines.pop();
    data.handles[data.handles.length - 1].lines.push(data.handles[deleteHandle + 1]);
  } else {
    data.handles[deleteHandle - 1].lines.pop();
    data.handles[deleteHandle - 1].lines.push(data.handles[deleteHandle + 1]);
  }

  // Remove the handle
  data.handles.splice(deleteHandle, 1);

  data.invalidated = true;
  data.active = true;
  data.highlight = true;

  // Force onImageRendered to fire
  _externalModules2.default.cornerstone.updateImage(eventData.element);
}

/**
* Inserts a new point into a freehand tool.
*
* @param {Object} eventData - The data object associated with the event.
* @param {Object} insertInfo - Object containing information about where to insert the point.
*/
function insertPoint(eventData, insertInfo) {
  var toolData = (0, _toolState.getToolState)(eventData.element, toolType);

  if (toolData === undefined) {
    return;
  }

  // Get the toolData from insertInfo
  var data = toolData.data[insertInfo.toolIndex];

  var insertIndex = getInsertionIndex(insertInfo);

  if (insertIndex === Infinity) {
    return;
  }

  var handleData = new _FreehandHandleData.FreehandHandleData(eventData.currentPoints.image);

  // Add the new handle
  data.handles.splice(insertIndex, 0, handleData);

  // Add the line from the previous handle to the inserted handle (note the tool is now one increment longer)
  data.handles[insertIndex - 1].lines.pop();
  data.handles[insertIndex - 1].lines.push(eventData.currentPoints.image);

  // Add the line from the inserted handle to the handle after
  if (insertIndex === data.handles.length - 1) {
    data.handles[insertIndex].lines.push(data.handles[0]);
  } else {
    data.handles[insertIndex].lines.push(data.handles[insertIndex + 1]);
  }

  data.active = true;
  data.highlight = true;

  // Force onImageRendered to fire
  data.invalidated = true;
  _externalModules2.default.cornerstone.updateImage(eventData.element);
}

/**
* Gets the handle index of a tool in which to insert the new point.
*
* @param {Object} insertInfo - Object containing information about where to insert the point.
*/
function getInsertionIndex(insertInfo) {
  // Get lowest index that isn't zero
  var handleIndexArray = insertInfo.handleIndexArray;
  var insertIndex = Infinity;
  var arrayContainsZero = handleIndexArray.includes(0);

  for (var i = 0; i < handleIndexArray.length; i++) {
    var index = handleIndexArray[i];

    if (index !== 0 && index < insertIndex) {
      insertIndex = index;
    }
  }

  // Treat the special case of handleIndexArray === [0,1] || [1,0]
  if (arrayContainsZero && insertIndex === 1) {
    insertIndex = 0;
  }

  // The insertion index shall be just after the lower index
  insertIndex++;

  return insertIndex;
}

/***/ }),

/***/ "./tools/shared/freehandUtils/pointInFreehand.js":
/*!*******************************************************!*\
  !*** ./tools/shared/freehandUtils/pointInFreehand.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (dataHandles, location) {
  var inROI = false;

  // Cycle round pairs of points
  var j = dataHandles.length - 1; // The last vertex is the previous one to the first

  for (var i = 0; i < dataHandles.length; i++) {
    if (rayFromPointCrosssesLine(location, dataHandles[i], dataHandles[j])) {
      inROI = !inROI;
    }

    j = i; // Here j is previous vertex to i
  }

  return inROI;
};

/**
* Returns true if the y-position yp is enclosed within y-positions y1 and y2.
*
* @param {Number} yp - The y position of point p.
* @param {Number} y1 - The y position of point 1.
* @param {Number} y2 - The y position of point 2.
* @return {Boolean} True if the y-position yp is enclosed within y-positions y1 and y2.
*/
function isEnclosedY(yp, y1, y2) {
  if (y1 < yp && yp < y2 || y2 < yp && yp < y1) {
    return true;
  }

  return false;
}

/**
* Returns true if the line segment is to the right of the point.
*
* @param {Object} point - The point being queried.
* @param {Object} lp1 - The first point of the line segment.
* @param {Object} lp2 - The second point of the line segment.
* @return {Boolean} True if the line is to the right of the point.
*/
/**
* Calculates if "point" is inside the polygon defined by dataHandles by counting
* the number of times a ray originating from "point" crosses the edges of the
* polygon. Odd === inside, Even === outside. The bool "inROI" flips every time
* the ray originating from location and pointing to the right crosses a
* linesegment.
*/

/**
* Returns true if the location is inside the polygon defined by dataHandles.
*
* @param {Object} dataHandles - Data object associated with the tool.
* @param {Object} location - The coordinates being queried.
* @return {Boolean} True if the location is inside the polygon defined by dataHandles.
*/
function isLineRightOfPoint(point, lp1, lp2) {
  // If both right of point return true
  if (lp1.x > point.x && lp2.x > point.x) {
    return true;
  }

  // Catch when line is vertical.
  if (lp1.x === lp2.x) {
    return point.x < lp1.x;
  }

  // Put leftmost point in lp1
  if (lp1.x > lp2.x) {
    var lptemp = lp1;

    lp1 = lp2;
    lp2 = lptemp;
  }
  var lPointY = lineSegmentAtPoint(point, lp1, lp2);

  // If the lp1.x and lp2.x enclose point.x check gradient of line and see if
  // Point is above or below the line to calculate if it inside.
  if (Math.sign(lPointY.gradient) * point.y > lPointY.value) {
    return true;
  }

  return false;
}

/**
* Returns the y value of the line segment at the x value of the point.
*
* @param {Object} point - The point being queried.
* @param {Object} lp1 - The first point of the line segment.
* @param {Object} lp2 - The second point of the line segment.
* @return {Object} An object containing the y value as well as the gradient of the line segment.
*/
function lineSegmentAtPoint(point, lp1, lp2) {
  var dydx = (lp2.y - lp1.y) / (lp2.x - lp1.x);
  var fx = {
    value: lp1.x + dydx * (point.x - lp1.x),
    gradient: dydx
  };

  return fx;
}

/**
* Returns true if a rightwards ray originating from the point crosses the line defined by handleI and handleJ.
*
* @param {Object} point - The point being queried.
* @param {Object} handleI - The first handle of the line segment.
* @param {Object} handleJ - The second handle of the line segment.
* @return {Boolean} True if a rightwards ray originating from the point crosses the line defined by handleI and handleJ.
*/
function rayFromPointCrosssesLine(point, handleI, handleJ) {
  if (isEnclosedY(point.y, handleI.y, handleJ.y) && isLineRightOfPoint(point, handleI, handleJ)) {

    return true;
  }

  return false;
}

/***/ }),

/***/ "./tools/shared/isToolActive.js":
/*!**************************************!*\
  !*** ./tools/shared/isToolActive.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, name) {
  var tool = (0, _getToolForElement2.default)(element, name);

  return tool.mode === 'active';
};

var _getToolForElement = __webpack_require__(/*! ../../store/getToolForElement.js */ "./store/getToolForElement.js");

var _getToolForElement2 = _interopRequireDefault(_getToolForElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./tools/shared/keyCodes.js":
/*!**********************************!*\
  !*** ./tools/shared/keyCodes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKey = getKey;
function getKey(keyCode) {
  return KEY_CODES[keyCode];
}

var KEY_CODES = {
  // Numbers - above letter keys
  48: '0',
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',

  // Numbers - numpad
  96: '0',
  97: '1',
  98: '2',
  99: '3',
  100: '4',
  101: '5',
  102: '6',
  103: '7',
  104: '8',
  105: '9',

  // Letters
  65: 'a',
  66: 'b',
  67: 'c',
  68: 'd',
  69: 'e',
  70: 'f',
  71: 'g',
  72: 'h',
  73: 'i',
  74: 'j',
  75: 'k',
  76: 'l',
  77: 'm',
  78: 'n',
  79: 'o',
  80: 'p',
  81: 'q',
  82: 'r',
  83: 's',
  84: 't',
  85: 'u',
  86: 'v',
  87: 'w',
  88: 'x',
  89: 'y',
  90: 'z',

  // Function keys
  112: 'F1',
  113: 'F2',
  114: 'F3',
  115: 'F4',
  116: 'F5',

  // Command keys
  13: 'RETURN',
  8: 'BACKSPACE',
  9: 'TAB',
  46: 'DELETE',
  12: 'DELETE',
  27: 'ESCAPE',
  20: 'CAPSLOCK',

  // Misc - NOTE: There are multiple keycodes for certain characters due to browsers having different mappings.
  173: '-',
  189: '-',
  109: '-',
  61: '+',
  187: '+',
  107: '+',
  219: '[',
  221: ']',
  59: ';',
  186: ';',
  188: ',',
  190: '.',
  199: '/'
};

/***/ }),

/***/ "./tools/shared/numbersWithCommas.js":
/*!*******************************************!*\
  !*** ./tools/shared/numbersWithCommas.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  var parts = x.toString().split('.');

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return parts.join('.');
};

/***/ }),

/***/ "./tools/shared/zoom.js":
/*!******************************!*\
  !*** ./tools/shared/zoom.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var correctShift = exports.correctShift = function correctShift(shift, _ref) {
  var hflip = _ref.hflip,
      vflip = _ref.vflip,
      rotation = _ref.rotation;

  // Apply Flips
  shift.x *= hflip ? -1 : 1;
  shift.y *= vflip ? -1 : 1;

  // Apply rotations
  if (rotation !== 0) {
    var angle = rotation * Math.PI / 180;

    var cosA = Math.cos(angle);
    var sinA = Math.sin(angle);

    var newX = shift.x * cosA - shift.y * sinA;
    var newY = shift.x * sinA + shift.y * cosA;

    shift.x = newX;
    shift.y = newY;
  }

  return shift;
};

var changeViewportScale = exports.changeViewportScale = function changeViewportScale(viewport, ticks, _ref2) {
  var maxScale = _ref2.maxScale,
      minScale = _ref2.minScale;

  var pow = 1.7;
  var oldFactor = Math.log(viewport.scale) / Math.log(pow);
  var factor = oldFactor + ticks;
  var scale = Math.pow(pow, factor);

  if (maxScale && scale > maxScale) {
    viewport.scale = maxScale;
  } else if (minScale && scale < minScale) {
    viewport.scale = minScale;
  } else {
    viewport.scale = scale;
  }

  return viewport;
};

/***/ }),

/***/ "./util/calculateEllipseStatistics.js":
/*!********************************************!*\
  !*** ./util/calculateEllipseStatistics.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sp, ellipse) {
  // TODO: Get a real statistics library here that supports large counts

  var sum = 0;
  var sumSquared = 0;
  var count = 0;
  var index = 0;

  for (var y = ellipse.top; y < ellipse.top + ellipse.height; y++) {
    for (var x = ellipse.left; x < ellipse.left + ellipse.width; x++) {
      var point = {
        x: x,
        y: y
      };

      if ((0, _pointInEllipse2.default)(ellipse, point)) {
        sum += sp[index];
        sumSquared += sp[index] * sp[index];
        count++;
      }

      index++;
    }
  }

  if (count === 0) {
    return {
      count: count,
      mean: 0.0,
      variance: 0.0,
      stdDev: 0.0
    };
  }

  var mean = sum / count;
  var variance = sumSquared / count - mean * mean;

  return {
    count: count,
    mean: mean,
    variance: variance,
    stdDev: Math.sqrt(variance)
  };
};

var _pointInEllipse = __webpack_require__(/*! ./pointInEllipse.js */ "./util/pointInEllipse.js");

var _pointInEllipse2 = _interopRequireDefault(_pointInEllipse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./util/calculateSUV.js":
/*!******************************!*\
  !*** ./util/calculateSUV.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (image, storedPixelValue) {
  var cornerstone = _externalModules2.default.cornerstone;
  var patientStudyModule = cornerstone.metaData.get('patientStudyModule', image.imageId);
  var seriesModule = cornerstone.metaData.get('generalSeriesModule', image.imageId);

  if (!patientStudyModule || !seriesModule) {
    return;
  }

  var modality = seriesModule.modality;

  // Image must be PET
  if (modality !== 'PT') {
    return;
  }

  var modalityPixelValue = storedPixelValue * image.slope + image.intercept;

  var patientWeight = patientStudyModule.patientWeight; // In kg

  if (!patientWeight) {
    return;
  }

  var petSequenceModule = cornerstone.metaData.get('petIsotopeModule', image.imageId);

  if (!petSequenceModule) {
    return;
  }

  var radiopharmaceuticalInfo = petSequenceModule.radiopharmaceuticalInfo;
  var startTime = radiopharmaceuticalInfo.radiopharmaceuticalStartTime;
  var totalDose = radiopharmaceuticalInfo.radionuclideTotalDose;
  var halfLife = radiopharmaceuticalInfo.radionuclideHalfLife;
  var seriesAcquisitionTime = seriesModule.seriesTime;

  if (!startTime || !totalDose || !halfLife || !seriesAcquisitionTime) {
    return;
  }

  var acquisitionTimeInSeconds = fracToDec(seriesAcquisitionTime.fractionalSeconds || 0) + seriesAcquisitionTime.seconds + seriesAcquisitionTime.minutes * 60 + seriesAcquisitionTime.hours * 60 * 60;
  var injectionStartTimeInSeconds = fracToDec(startTime.fractionalSeconds) + startTime.seconds + startTime.minutes * 60 + startTime.hours * 60 * 60;
  var durationInSeconds = acquisitionTimeInSeconds - injectionStartTimeInSeconds;
  var correctedDose = totalDose * Math.exp(-durationInSeconds * Math.log(2) / halfLife);
  var suv = modalityPixelValue * patientWeight / correctedDose * 1000;

  return suv;
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns a decimal value given a fractional value
function fracToDec(fractionalValue) {
  return parseFloat('.' + fractionalValue);
}

/***/ }),

/***/ "./util/clip.js":
/*!**********************!*\
  !*** ./util/clip.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clip;
exports.clipToBox = clipToBox;
function clip(val, low, high) {
  // Clip a value to an upper and lower bound.
  return Math.min(Math.max(low, val), high);
}

function clipToBox(point, box) {
  // Clip an {x, y} point to a box of size {width, height}
  point.x = clip(point.x, 0, box.width);
  point.y = clip(point.y, 0, box.height);
}

/***/ }),

/***/ "./util/convertToVector3.js":
/*!**********************************!*\
  !*** ./util/convertToVector3.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertToVector3;

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert an Array to a cornerstoneMath.Vector3
 *
 * @param {Array|cornerstoneMath.Vector3} arrayOrVector3 Input array or Vector3
 * @return {cornerstoneMath.Vector3}
 */
function convertToVector3(arrayOrVector3) {
  var cornerstoneMath = _externalModules2.default.cornerstoneMath;

  if (arrayOrVector3 instanceof cornerstoneMath.Vector3) {
    return arrayOrVector3;
  }

  return new cornerstoneMath.Vector3(arrayOrVector3[0], arrayOrVector3[1], arrayOrVector3[2]);
}

/***/ }),

/***/ "./util/copyPoints.js":
/*!****************************!*\
  !*** ./util/copyPoints.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (points) {
  var page = _externalModules2.default.cornerstoneMath.point.copy(points.page);
  var image = _externalModules2.default.cornerstoneMath.point.copy(points.image);
  var client = _externalModules2.default.cornerstoneMath.point.copy(points.client);
  var canvas = _externalModules2.default.cornerstoneMath.point.copy(points.canvas);

  return {
    page: page,
    image: image,
    client: client,
    canvas: canvas
  };
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./util/drawArrow.js":
/*!***************************!*\
  !*** ./util/drawArrow.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context, start, end, color, lineWidth) {
  // Variables to be used when creating the arrow
  var headLength = 10;

  var angle = Math.atan2(end.y - start.y, end.x - start.x);

  // Starting path of the arrow from the start square to the end square and drawing the stroke
  var options = {
    color: color,
    lineWidth: lineWidth
  };

  (0, _drawing.drawLine)(context, undefined, start, end, options, 'canvas');
  options = {
    color: color,
    lineWidth: lineWidth,
    fillStyle: color
  };

  var points = [{
    x: end.x - headLength * Math.cos(angle - Math.PI / 7),
    y: end.y - headLength * Math.sin(angle - Math.PI / 7)
  }, {
    x: end.x - headLength * Math.cos(angle + Math.PI / 7),
    y: end.y - headLength * Math.sin(angle + Math.PI / 7)
  }, end];

  (0, _drawing.drawJoinedLines)(context, undefined, end, points, options, 'canvas');
};

var _drawing = __webpack_require__(/*! ./drawing.js */ "./util/drawing.js");

/***/ }),

/***/ "./util/drawCircle.js":
/*!****************************!*\
  !*** ./util/drawCircle.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context, start, color, lineWidth) {
  var handleRadius = 6;

  (0, _drawing.path)(context, { color: color,
    lineWidth: lineWidth }, function (context) {
    context.arc(start.x, start.y, handleRadius, 0, 2 * Math.PI);
  });
};

var _drawing = __webpack_require__(/*! ./drawing.js */ "./util/drawing.js");

/***/ }),

/***/ "./util/drawEllipse.js":
/*!*****************************!*\
  !*** ./util/drawEllipse.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context, x, y, w, h) {
  var kappa = 0.5522848,
      ox = w / 2 * kappa,
      // Control point offset horizontal
  oy = h / 2 * kappa,
      // Control point offset vertical
  xe = x + w,
      // X-end
  ye = y + h,
      // Y-end
  xm = x + w / 2,
      // X-middle
  ym = y + h / 2; // Y-middle

  (0, _drawing.path)(context, {}, function (context) {
    context.moveTo(x, ym);
    context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  });
};

var _drawing = __webpack_require__(/*! ./drawing.js */ "./util/drawing.js");

/***/ }),

/***/ "./util/drawLink.js":
/*!**************************!*\
  !*** ./util/drawLink.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (linkAnchorPoints, refPoint, boundingBox, context, color, lineWidth) {
  // Draw a link from "the closest anchor point to refPoint" to "the nearest midpoint on the bounding box".

  // Find the closest anchor point to RefPoint
  var start = linkAnchorPoints.length > 0 ? _externalModules2.default.cornerstoneMath.point.findClosestPoint(linkAnchorPoints, refPoint) : refPoint;

  // Calculate the midpoints of the bounding box
  var boundingBoxPoints = [{
    x: boundingBox.left + boundingBox.width / 2,
    y: boundingBox.top
  }, {
    x: boundingBox.left,
    y: boundingBox.top + boundingBox.height / 2
  }, {
    x: boundingBox.left + boundingBox.width / 2,
    y: boundingBox.top + boundingBox.height
  }, {
    x: boundingBox.left + boundingBox.width,
    y: boundingBox.top + boundingBox.height / 2
  }];

  // Calculate the link endpoint by identifying which midpoint of the bounding box
  // Is closest to the start point.
  var end = _externalModules2.default.cornerstoneMath.point.findClosestPoint(boundingBoxPoints, start);

  // Finally we draw the dashed linking line
  var options = {
    color: color,
    lineWidth: lineWidth,
    lineDash: [2, 3]
  };

  (0, _drawing.drawLine)(context, undefined, start, end, options, 'canvas');
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _drawing = __webpack_require__(/*! ./drawing.js */ "./util/drawing.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./util/drawLinkedTextBox.js":
/*!***********************************!*\
  !*** ./util/drawLinkedTextBox.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context, element, textBox, text, handles, textBoxAnchorPoints, color, lineWidth, xOffset, yCenter) {
  var cornerstone = _externalModules2.default.cornerstone;

  // Convert the textbox Image coordinates into Canvas coordinates
  var textCoords = cornerstone.pixelToCanvas(element, textBox);

  if (xOffset) {
    textCoords.x += xOffset;
  }

  var options = {
    centering: {
      x: false,
      y: yCenter
    }
  };

  // Draw the text box
  textBox.boundingBox = (0, _drawTextBox2.default)(context, text, textCoords.x, textCoords.y, color, options);
  if (textBox.hasMoved) {
    // Identify the possible anchor points for the tool -> text line
    var linkAnchorPoints = textBoxAnchorPoints(handles).map(function (h) {
      return cornerstone.pixelToCanvas(element, h);
    });

    // Draw dashed link line between tool and text
    (0, _drawLink2.default)(linkAnchorPoints, textCoords, textBox.boundingBox, context, color, lineWidth);
  }
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _drawTextBox = __webpack_require__(/*! ./drawTextBox.js */ "./util/drawTextBox.js");

var _drawTextBox2 = _interopRequireDefault(_drawTextBox);

var _drawLink = __webpack_require__(/*! ./drawLink.js */ "./util/drawLink.js");

var _drawLink2 = _interopRequireDefault(_drawLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./util/drawTextBox.js":
/*!*****************************!*\
  !*** ./util/drawTextBox.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context, textLines, x, y, color, options) {
  if (Object.prototype.toString.call(textLines) !== '[object Array]') {
    textLines = [textLines];
  }

  var padding = 5;
  var fontSize = _textStyle2.default.getFontSize();
  var backgroundColor = _textStyle2.default.getBackgroundColor();

  // Find the longest text width in the array of text data
  var maxWidth = 0;

  textLines.forEach(function (text) {
    // Get the text width in the current font
    var width = context.measureText(text).width;

    // Find the maximum with for all the text rows;
    maxWidth = Math.max(maxWidth, width);
  });

  // Calculate the bounding box for this text box
  var boundingBox = {
    width: maxWidth + padding * 2,
    height: padding + textLines.length * (fontSize + padding)
  };

  (0, _drawing.draw)(context, function (context) {
    context.strokeStyle = color;

    // Draw the background box with padding
    if (options && options.centering && options.centering.x === true) {
      x -= boundingBox.width / 2;
    }

    if (options && options.centering && options.centering.y === true) {
      y -= boundingBox.height / 2;
    }

    boundingBox.left = x;
    boundingBox.top = y;

    var fillStyle = options && options.debug === true ? '#FF0000' : backgroundColor;

    (0, _drawing.fillBox)(context, boundingBox, fillStyle);

    // Draw each of the text lines on top of the background box
    (0, _drawing.fillTextLines)(context, boundingBox, textLines, color, padding);
  });

  // Return the bounding box so it can be used for pointNearHandle
  return boundingBox;
};

var _textStyle = __webpack_require__(/*! ../stateManagement/textStyle.js */ "./stateManagement/textStyle.js");

var _textStyle2 = _interopRequireDefault(_textStyle);

var _drawing = __webpack_require__(/*! ./drawing.js */ "./util/drawing.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./util/drawing.js":
/*!*************************!*\
  !*** ./util/drawing.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewContext = getNewContext;
exports.draw = draw;
exports.path = path;
exports.setShadow = setShadow;
exports.drawLine = drawLine;
exports.drawLines = drawLines;
exports.drawJoinedLines = drawJoinedLines;
exports.drawCircle = drawCircle;
exports.drawEllipse = drawEllipse;
exports.drawRect = drawRect;
exports.fillBox = fillBox;
exports.fillTextLines = fillTextLines;

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _index = __webpack_require__(/*! ../index.js */ "./index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle|color, gradient or pattern} to use inside shapes.
 * @typedef {(String|CanvasGradient|CanvasPattern)} FillStyle
 */

/**
 * A {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle|color, gradient or pattern} to use for the lines around shapes.
 * @typedef {(String|CanvasGradient|CanvasPattern)} StrokeStyle
 */

/**
 * @callback ContextFn
 * @param {CanvasRenderingContext2D} context
 */

/**
 * Create a new {@link CanvasRenderingContext2D|context} object for the given {@link HTMLCanvasElement|canvas}
 * and set the transform to the {@link https://www.w3.org/TR/2dcontext/#transformations|identity transform}.
 *
 * @param {HTMLCanvasElement} canvas
 * @returns {CanvasRenderingContext2D}
 */
function getNewContext(canvas) {
  var context = canvas.getContext('2d');

  context.setTransform(1, 0, 0, 1, 0, 0);

  return context;
}

/**
 * This function manages the {@link https://www.w3.org/TR/2dcontext/#the-canvas-state|save/restore}
 * pattern for working in a new context state stack. The parameter `fn` is passed the `context` and can
 * execute any API calls in a clean stack.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {ContextFn} fn - A function which performs drawing operations within the given context.
 */
function draw(context, fn) {
  context.save();
  fn(context);
  context.restore();
}

/**
 * This function manages the beginPath/stroke pattern for working with
 * {@link https://www.w3.org/TR/2dcontext/#drawing-paths-to-the-canvas|path objects}.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {Object} options
 * @param {StrokeStyle} options.color -  The stroke style of the path.
 * @param {Number} options.lineWidth -  The width of lines in the path. If null, no line width is set.
 *     If undefined then toolStyle.getToolWidth() is set.
 * @param {FillStyle} options.fillStyle - The style to fill the path with. If undefined then no filling is done.
 * @param {Number[]} options.lineDash - The {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash|dash pattern}
 *     to use on the lines.
 * @param {ContextFn} fn - A drawing function to execute with the provided stroke pattern.
 */
function path(context, options, fn) {
  var color = options.color,
      lineWidth = options.lineWidth,
      fillStyle = options.fillStyle,
      lineDash = options.lineDash;


  context.beginPath();
  context.strokeStyle = color || context.strokeStyle;
  context.lineWidth = lineWidth || lineWidth === undefined && _index.toolStyle.getToolWidth() || context.lineWidth;
  if (lineDash) {
    context.setLineDash(lineDash);
  }

  fn(context);

  if (fillStyle) {
    context.fillStyle = fillStyle;
    context.fill();
  }
  context.stroke();
  if (lineDash) {
    context.setLineDash([]);
  }
}

/**
 * Set the {@link https://www.w3.org/TR/2dcontext/#shadows|shadow} properties of the context.
 * Each property is set on the context object if defined, otherwise a default value is set.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {Object} options
 * @param {Boolean} options.shadow - Whether to set any shadow options
 * @param {String} options.shadowColor - Default value: #000000
 * @param {Number} options.shadowOffsetX - Default value: 1
 * @param {Number} options.shadowOffsetY - Default value: 1
 */
function setShadow(context, options) {
  if (options.shadow) {
    context.shadowColor = options.shadowColor || '#000000';
    context.shadowOffsetX = options.shadowOffsetX || 1;
    context.shadowOffsetY = options.shadowOffsetY || 1;
  }
}

/**
 * Draw a line between `start` and `end`.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {HTMLElement} element - The DOM Element to draw on
 * @param {Object} start - `{ x, y } in either pixel or canvas coordinates.
 * @param {Object} end - `{ x, y }` in either pixel or canvas coordinates.
 * @param {Object} options - See {@link path}
 * @param {String} [coordSystem='pixel'] - Can be "pixel" (default) or "canvas". The coordinate
 *     system of the points passed in to the function. If "pixel" then cornerstone.pixelToCanvas
 *     is used to transform the points from pixel to canvas coordinates.
 */
function drawLine(context, element, start, end, options) {
  var coordSystem = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'pixel';

  path(context, options, function (context) {
    if (coordSystem === 'pixel') {
      var cornerstone = _externalModules2.default.cornerstone;

      start = cornerstone.pixelToCanvas(element, start);
      end = cornerstone.pixelToCanvas(element, end);
    }

    context.moveTo(start.x, start.y);
    context.lineTo(end.x, end.y);
  });
}

/**
 * Draw multiple lines.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {HTMLElement} element - The DOM Element to draw on
 * @param {Object[]} lines - `[{ start: {x, y}, end: { x, y }]` An array of `start`, `end` pairs.
 *     Each point is `{ x, y }` in either pixel or canvas coordinates.
 * @param {Object} options - See {@link path}
 * @param {String} [coordSystem='pixel'] - Can be "pixel" (default) or "canvas". The coordinate
 *     system of the points passed in to the function. If "pixel" then cornerstone.pixelToCanvas
 *     is used to transform the points from pixel to canvas coordinates.
 */
function drawLines(context, element, lines, options) {
  var coordSystem = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'pixel';

  path(context, options, function (context) {
    lines.forEach(function (line) {
      var start = line.start;
      var end = line.end;

      if (coordSystem === 'pixel') {
        var cornerstone = _externalModules2.default.cornerstone;

        start = cornerstone.pixelToCanvas(element, start);
        end = cornerstone.pixelToCanvas(element, end);
      }

      context.moveTo(start.x, start.y);
      context.lineTo(end.x, end.y);
    });
  });
}

/**
 * Draw a series of joined lines, starting at `start` and then going to each point in `points`.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {HTMLElement} element - The DOM Element to draw on
 * @param {Object} start - `{ x, y }` in either pixel or canvas coordinates.
 * @param {Object[]} points - `[{ x, y }]` An array of points in either pixel or canvas coordinates.
 * @param {Object} options - See {@link path}
 * @param {String} [coordSystem='pixel'] - Can be "pixel" (default) or "canvas". The coordinate
 *     system of the points passed in to the function. If "pixel" then cornerstone.pixelToCanvas
 *     is used to transform the points from pixel to canvas coordinates.
 */
function drawJoinedLines(context, element, start, points, options) {
  var coordSystem = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'pixel';

  path(context, options, function (context) {
    if (coordSystem === 'pixel') {
      var cornerstone = _externalModules2.default.cornerstone;

      start = cornerstone.pixelToCanvas(element, start);
      points = points.map(function (p) {
        return cornerstone.pixelToCanvas(element, p);
      });
    }
    context.moveTo(start.x, start.y);
    points.forEach(function (_ref) {
      var x = _ref.x,
          y = _ref.y;

      context.lineTo(x, y);
    });
  });
}

/**
 * Draw a circle with given `center` and `radius`.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {HTMLElement} element - The DOM Element to draw on
 * @param {Object} center - `{ x, y }` in either pixel or canvas coordinates.
 * @param {number} radius - The circle's radius in canvas units.
 * @param {Object} options - See {@link path}
 * @param {String} [coordSystem='pixel'] - Can be "pixel" (default) or "canvas". The coordinate
 *     system of the points passed in to the function. If "pixel" then cornerstone.pixelToCanvas
 *     is used to transform the points from pixel to canvas coordinates.
 */
function drawCircle(context, element, center, radius, options) {
  var coordSystem = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'pixel';

  if (coordSystem === 'pixel') {
    center = _externalModules2.default.cornerstone.pixelToCanvas(element, center);
  }

  path(context, options, function (context) {
    context.arc(center.x, center.y, radius, 0, 2 * Math.PI);
  });
}

/**
 * Draw an ellipse within the bounding box defined by `corner1` and `corner2`.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {HTMLElement} element - The DOM Element to draw on
 * @param {Object} corner1 - `{ x, y }` in either pixel or canvas coordinates.
 * @param {Object} corner2 - `{ x, y }` in either pixel or canvas coordinates.
 * @param {Object} options - See {@link path}
 * @param {String} [coordSystem='pixel'] - Can be "pixel" (default) or "canvas". The coordinate
 *     system of the points passed in to the function. If "pixel" then cornerstone.pixelToCanvas
 *     is used to transform the points from pixel to canvas coordinates.
 */
function drawEllipse(context, element, corner1, corner2, options) {
  var coordSystem = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'pixel';

  // http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas
  if (coordSystem === 'pixel') {
    corner1 = _externalModules2.default.cornerstone.pixelToCanvas(element, corner1);
    corner2 = _externalModules2.default.cornerstone.pixelToCanvas(element, corner2);
  }
  var x = Math.min(corner1.x, corner2.x);
  var y = Math.min(corner1.y, corner2.y);
  var w = Math.abs(corner1.x - corner2.x);
  var h = Math.abs(corner1.y - corner2.y);

  var kappa = 0.5522848,
      ox = w / 2 * kappa,
      // Control point offset horizontal
  oy = h / 2 * kappa,
      // Control point offset vertical
  xe = x + w,
      // X-end
  ye = y + h,
      // Y-end
  xm = x + w / 2,
      // X-middle
  ym = y + h / 2; // Y-middle

  path(context, options, function (context) {
    context.moveTo(x, ym);
    context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    context.closePath();
  });
}

/**
 * Draw a rectangle defined by `corner1` and `corner2`.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {HTMLElement} element - The DOM Element to draw on
 * @param {Object} corner1 - `{ x, y }` in either pixel or canvas coordinates.
 * @param {Object} corner2 - `{ x, y }` in either pixel or canvas coordinates.
 * @param {Object} options - See {@link path}
 * @param {String} [coordSystem='pixel'] - Can be "pixel" (default) or "canvas". The coordinate
 *     system of the points passed in to the function. If "pixel" then cornerstone.pixelToCanvas
 *     is used to transform the points from pixel to canvas coordinates.
 */
function drawRect(context, element, corner1, corner2, options) {
  var coordSystem = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'pixel';

  if (coordSystem === 'pixel') {
    var cornerstone = _externalModules2.default.cornerstone;

    corner1 = cornerstone.pixelToCanvas(element, corner1);
    corner2 = cornerstone.pixelToCanvas(element, corner2);
  }

  var left = Math.min(corner1.x, corner2.x);
  var top = Math.min(corner1.y, corner2.y);
  var width = Math.abs(corner1.x - corner2.x);
  var height = Math.abs(corner1.y - corner2.y);

  path(context, options, function (context) {
    context.rect(left, top, width, height);
  });
}

/**
 * Draw a filled rectangle defined by `boundingBox` using the style defined by `fillStyle`.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {Object} boundingBox - `{ left, top, width, height }` in canvas coordinates.
 * @param {FillStyle} fillStyle - The fillStyle to apply to the region.
 */
function fillBox(context, boundingBox, fillStyle) {
  context.fillStyle = fillStyle;
  context.fillRect(boundingBox.left, boundingBox.top, boundingBox.width, boundingBox.height);
}

/**
 * Draw multiple lines of text within a bounding box.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {Object} boundingBox - `{ left, top }` in canvas coordinates. Only the top-left corner is specified, as the text will take up as much space as it needs.
 * @param {String[]} textLines - The text to be displayed.
 * @param {FillStyle} fillStyle - The fillStyle to apply to the text.
 * @param {Number} padding - The amount of padding above/below each line in canvas units. Note this gives an inter-line spacing of `2*padding`.
 */
function fillTextLines(context, boundingBox, textLines, fillStyle, padding) {
  var fontSize = _index.textStyle.getFontSize();

  context.font = _index.textStyle.getFont();
  context.textBaseline = 'top';
  context.fillStyle = fillStyle;
  textLines.forEach(function (text, index) {
    context.fillText(text, boundingBox.left + padding, boundingBox.top + padding + index * (fontSize + padding));
  });
}

/***/ }),

/***/ "./util/findAndMoveHelpers.js":
/*!************************************!*\
  !*** ./util/findAndMoveHelpers.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAnnotationNearClick = exports.moveAnnotationNearClick = exports.findHandleDataNearImagePoint = exports.moveHandleNearImagePoint = undefined;

var _index = __webpack_require__(/*! ../store/index.js */ "./store/index.js");

var _getHandleNearImagePoint = __webpack_require__(/*! ../manipulators/getHandleNearImagePoint.js */ "./manipulators/getHandleNearImagePoint.js");

var _getHandleNearImagePoint2 = _interopRequireDefault(_getHandleNearImagePoint);

var _moveAllHandles = __webpack_require__(/*! ../manipulators/moveAllHandles.js */ "./manipulators/moveAllHandles.js");

var _moveAllHandles2 = _interopRequireDefault(_moveAllHandles);

var _moveHandle = __webpack_require__(/*! ../manipulators/moveHandle.js */ "./manipulators/moveHandle.js");

var _moveHandle2 = _interopRequireDefault(_moveHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveHandleNearImagePoint = function moveHandleNearImagePoint(evt, handle, data, toolName) {
  // Todo: We've grabbed a handle, stop listening/ignore for MOUSE_MOVE
  data.active = true;
  _index.mutations.SET_IS_TOOL_LOCKED(true);
  (0, _moveHandle2.default)(evt.detail, toolName, data, handle, function () {
    data.active = false;
    _index.mutations.SET_IS_TOOL_LOCKED(false);
  }, true // PreventHandleOutsideImage
  );

  evt.stopImmediatePropagation();
  evt.stopPropagation();
  evt.preventDefault();

  return;
};

var findHandleDataNearImagePoint = function findHandleDataNearImagePoint(element, evt, toolState, toolName, coords) {
  for (var i = 0; i < toolState.data.length; i++) {
    var data = toolState.data[i];
    var handle = (0, _getHandleNearImagePoint2.default)(element, data.handles, coords, _index.state.clickProximity);

    if (handle) {
      return {
        handle: handle,
        data: data
      };
    }
  }
};

var moveAnnotationNearClick = function moveAnnotationNearClick(evt, toolState, tool, data) {
  var opt = tool.options || {
    deleteIfHandleOutsideImage: true,
    preventHandleOutsideImage: false
  };

  data.active = true;
  _index.mutations.SET_IS_TOOL_LOCKED(true);
  // TODO: Ignore MOUSE_MOVE for a bit
  // TODO: Why do this and `moveHandle` expose this in different
  // TODO: ways? PreventHandleOutsideImage
  (0, _moveAllHandles2.default)(evt, data, toolState, tool.name, opt, function () {
    data.active = false;
    _index.mutations.SET_IS_TOOL_LOCKED(false);
  });

  evt.stopImmediatePropagation();
  evt.stopPropagation();
  evt.preventDefault();

  return;
};

var findAnnotationNearClick = function findAnnotationNearClick(element, evt, toolState, tool, coords) {
  for (var i = 0; i < toolState.data.length; i++) {
    var data = toolState.data[i];
    var isNearPoint = tool.pointNearTool(element, data, coords);

    if (isNearPoint) {
      return data;
    }
  }
};

exports.moveHandleNearImagePoint = moveHandleNearImagePoint;
exports.findHandleDataNearImagePoint = findHandleDataNearImagePoint;
exports.moveAnnotationNearClick = moveAnnotationNearClick;
exports.findAnnotationNearClick = findAnnotationNearClick;

/***/ }),

/***/ "./util/getLuminance.js":
/*!******************************!*\
  !*** ./util/getLuminance.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, x, y, width, height) {
  if (!element) {
    throw new Error('getLuminance: parameter element must not be undefined');
  }

  x = Math.round(x);
  y = Math.round(y);
  var enabledElement = _externalModules2.default.cornerstone.getEnabledElement(element);
  var image = enabledElement.image;
  var luminance = [];
  var index = 0;
  var pixelData = image.getPixelData();
  var spIndex = void 0,
      row = void 0,
      column = void 0;

  if (image.color) {
    for (row = 0; row < height; row++) {
      for (column = 0; column < width; column++) {
        spIndex = ((row + y) * image.columns + (column + x)) * 4;
        var red = pixelData[spIndex];
        var green = pixelData[spIndex + 1];
        var blue = pixelData[spIndex + 2];

        luminance[index++] = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
      }
    }
  } else {
    for (row = 0; row < height; row++) {
      for (column = 0; column < width; column++) {
        spIndex = (row + y) * image.columns + (column + x);
        luminance[index++] = pixelData[spIndex] * image.slope + image.intercept;
      }
    }
  }

  return luminance;
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./util/getMaxSimultaneousRequests.js":
/*!********************************************!*\
  !*** ./util/getMaxSimultaneousRequests.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var configMaxSimultaneousRequests = void 0;

// Maximum concurrent connections to the same server
// Information from http://sgdev-blog.blogspot.fr/2014/01/maximum-concurrent-connection-to-same.html
var maxSimultaneousRequests = {
  default: 6,
  IE: {
    9: 6,
    10: 8,
    default: 8
  },
  Firefox: {
    default: 6
  },
  Opera: {
    10: 8,
    11: 6,
    12: 6,
    default: 6
  },
  Chrome: {
    default: 6
  },
  Safari: {
    default: 6
  }
};

// Browser name / version detection
// http://stackoverflow.com/questions/2400935/browser-detection-in-javascript
function getBrowserInfo() {
  var ua = navigator.userAgent;
  var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  var tem = void 0;

  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];

    return 'IE ' + (tem[1] || '');
  }

  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem !== null) {
      return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
  }

  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) !== null) {
    M.splice(1, 1, tem[1]);
  }

  return M.join(' ');
}

function setMaxSimultaneousRequests(newMaxSimultaneousRequests) {
  configMaxSimultaneousRequests = newMaxSimultaneousRequests;
}

function getMaxSimultaneousRequests() {
  if (configMaxSimultaneousRequests) {
    return configMaxSimultaneousRequests;
  }

  return getDefaultSimultaneousRequests();
}

function getDefaultSimultaneousRequests() {
  var infoString = getBrowserInfo();
  var info = infoString.split(' ');
  var browserName = info[0];
  var browserVersion = info[1];
  var browserData = maxSimultaneousRequests[browserName];

  if (!browserData) {
    return maxSimultaneousRequests.default;
  }

  if (!browserData[browserVersion]) {
    return browserData.default;
  }

  return browserData[browserVersion];
}

function isMobileDevice() {
  var pattern = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini');

  return pattern.test(navigator.userAgent);
}

exports.getDefaultSimultaneousRequests = getDefaultSimultaneousRequests;
exports.getMaxSimultaneousRequests = getMaxSimultaneousRequests;
exports.setMaxSimultaneousRequests = setMaxSimultaneousRequests;
exports.getBrowserInfo = getBrowserInfo;
exports.isMobileDevice = isMobileDevice;

/***/ }),

/***/ "./util/getRGBPixels.js":
/*!******************************!*\
  !*** ./util/getRGBPixels.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, x, y, width, height) {
  if (!element) {
    throw new Error('getRGBPixels: parameter element must not be undefined');
  }

  x = Math.round(x);
  y = Math.round(y);
  var enabledElement = _externalModules2.default.cornerstone.getEnabledElement(element);
  var storedPixelData = [];
  var index = 0;
  var pixelData = enabledElement.image.getPixelData();
  var spIndex = void 0,
      row = void 0,
      column = void 0;

  if (enabledElement.image.color) {
    for (row = 0; row < height; row++) {
      for (column = 0; column < width; column++) {
        spIndex = ((row + y) * enabledElement.image.columns + (column + x)) * 4;
        var red = pixelData[spIndex];
        var green = pixelData[spIndex + 1];
        var blue = pixelData[spIndex + 2];
        var alpha = pixelData[spIndex + 3];

        storedPixelData[index++] = red;
        storedPixelData[index++] = green;
        storedPixelData[index++] = blue;
        storedPixelData[index++] = alpha;
      }
    }
  }

  return storedPixelData;
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./util/lineSegDistance.js":
/*!*********************************!*\
  !*** ./util/lineSegDistance.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, start, end, coords) {
  var cornerstone = _externalModules2.default.cornerstone;

  var lineSegment = {
    start: cornerstone.pixelToCanvas(element, start),
    end: cornerstone.pixelToCanvas(element, end)
  };

  return _externalModules2.default.cornerstoneMath.lineSegment.distanceToPoint(lineSegment, coords);
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./util/makeUnselectable.js":
/*!**********************************!*\
  !*** ./util/makeUnselectable.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, ignorePointerEvents) {
  element.style.webkitUserSelect = 'none';
  element.style.webkitTouchCallout = 'none';
  element.style.mozUserSelect = 'none';
  element.style.msUserSelect = 'none';
  element.style.oUserSelect = 'none';
  element.style.khtmlUserSelect = 'none';
  element.style.userSelect = 'none';

  element.unselectable = 'on';
  element.oncontextmenu = function () {
    return false;
  };

  if (ignorePointerEvents === true) {
    element.style.pointerEvents = 'none';
  }
};

/***/ }),

/***/ "./util/pointInEllipse.js":
/*!********************************!*\
  !*** ./util/pointInEllipse.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (ellipse, location) {
  var xRadius = ellipse.width / 2;
  var yRadius = ellipse.height / 2;

  if (xRadius <= 0.0 || yRadius <= 0.0) {
    return false;
  }

  var center = {
    x: ellipse.left + xRadius,
    y: ellipse.top + yRadius
  };

  /* This is a more general form of the circle equation
   *
   * X^2/a^2 + Y^2/b^2 <= 1
   */

  var normalized = {
    x: location.x - center.x,
    y: location.y - center.y
  };

  var inEllipse = normalized.x * normalized.x / (xRadius * xRadius) + normalized.y * normalized.y / (yRadius * yRadius) <= 1.0;

  return inEllipse;
};

/***/ }),

/***/ "./util/pointInsideBoundingBox.js":
/*!****************************************!*\
  !*** ./util/pointInsideBoundingBox.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (handle, coords) {
  if (!handle.boundingBox) {
    return;
  }

  return _externalModules2.default.cornerstoneMath.point.insideRect(coords, handle.boundingBox);
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./util/pointProjector.js":
/*!********************************!*\
  !*** ./util/pointProjector.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectPatientPointToImagePlane = projectPatientPointToImagePlane;
exports.imagePointToPatientPoint = imagePointToPatientPoint;
exports.planePlaneIntersection = planePlaneIntersection;

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _convertToVector = __webpack_require__(/*! ../util/convertToVector3.js */ "./util/convertToVector3.js");

var _convertToVector2 = _interopRequireDefault(_convertToVector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Projects a patient point to an image point
function projectPatientPointToImagePlane(patientPoint, imagePlane) {
  var rowCosines = (0, _convertToVector2.default)(imagePlane.rowCosines);
  var columnCosines = (0, _convertToVector2.default)(imagePlane.columnCosines);
  var imagePositionPatient = (0, _convertToVector2.default)(imagePlane.imagePositionPatient);
  var point = patientPoint.clone().sub(imagePositionPatient);
  var x = rowCosines.dot(point) / imagePlane.columnPixelSpacing;
  var y = columnCosines.dot(point) / imagePlane.rowPixelSpacing;

  return {
    x: x,
    y: y
  };
}

// Projects an image point to a patient point
function imagePointToPatientPoint(imagePoint, imagePlane) {
  var rowCosines = (0, _convertToVector2.default)(imagePlane.rowCosines);
  var columnCosines = (0, _convertToVector2.default)(imagePlane.columnCosines);
  var imagePositionPatient = (0, _convertToVector2.default)(imagePlane.imagePositionPatient);

  var x = rowCosines.clone().multiplyScalar(imagePoint.x);

  x.multiplyScalar(imagePlane.columnPixelSpacing);
  var y = columnCosines.clone().multiplyScalar(imagePoint.y);

  y.multiplyScalar(imagePlane.rowPixelSpacing);
  var patientPoint = x.add(y);

  patientPoint.add(imagePositionPatient);

  return patientPoint;
}

function getRectangleFromImagePlane(imagePlane) {
  // Get the points
  var topLeft = imagePointToPatientPoint({
    x: 0,
    y: 0
  }, imagePlane);
  var topRight = imagePointToPatientPoint({
    x: imagePlane.columns,
    y: 0
  }, imagePlane);
  var bottomLeft = imagePointToPatientPoint({
    x: 0,
    y: imagePlane.rows
  }, imagePlane);
  var bottomRight = imagePointToPatientPoint({
    x: imagePlane.columns,
    y: imagePlane.rows
  }, imagePlane);

  // Get each side as a vector
  var rect = {
    top: new _externalModules2.default.cornerstoneMath.Line3(topLeft, topRight),
    left: new _externalModules2.default.cornerstoneMath.Line3(topLeft, bottomLeft),
    right: new _externalModules2.default.cornerstoneMath.Line3(topRight, bottomRight),
    bottom: new _externalModules2.default.cornerstoneMath.Line3(bottomLeft, bottomRight)
  };

  return rect;
}

function lineRectangleIntersection(line, rect) {
  var intersections = [];

  Object.keys(rect).forEach(function (side) {
    var segment = rect[side];
    var intersection = line.intersectLine(segment);

    if (intersection) {
      intersections.push(intersection);
    }
  });

  return intersections;
}

// Gets the line of intersection between two planes in patient space
function planePlaneIntersection(targetImagePlane, referenceImagePlane) {
  var targetRowCosines = (0, _convertToVector2.default)(targetImagePlane.rowCosines);
  var targetColumnCosines = (0, _convertToVector2.default)(targetImagePlane.columnCosines);
  var targetImagePositionPatient = (0, _convertToVector2.default)(targetImagePlane.imagePositionPatient);
  var referenceRowCosines = (0, _convertToVector2.default)(referenceImagePlane.rowCosines);
  var referenceColumnCosines = (0, _convertToVector2.default)(referenceImagePlane.columnCosines);
  var referenceImagePositionPatient = (0, _convertToVector2.default)(referenceImagePlane.imagePositionPatient);

  // First, get the normals of each image plane
  var targetNormal = targetRowCosines.clone().cross(targetColumnCosines);
  var targetPlane = new _externalModules2.default.cornerstoneMath.Plane();

  targetPlane.setFromNormalAndCoplanarPoint(targetNormal, targetImagePositionPatient);

  var referenceNormal = referenceRowCosines.clone().cross(referenceColumnCosines);
  var referencePlane = new _externalModules2.default.cornerstoneMath.Plane();

  referencePlane.setFromNormalAndCoplanarPoint(referenceNormal, referenceImagePositionPatient);

  var originDirection = referencePlane.clone().intersectPlane(targetPlane);
  var origin = originDirection.origin;
  var direction = originDirection.direction;

  // Calculate the longest possible length in the reference image plane (the length of the diagonal)
  var bottomRight = imagePointToPatientPoint({
    x: referenceImagePlane.columns,
    y: referenceImagePlane.rows
  }, referenceImagePlane);
  var distance = referenceImagePositionPatient.distanceTo(bottomRight);

  // Use this distance to bound the ray intersecting the two planes
  var line = new _externalModules2.default.cornerstoneMath.Line3();

  line.start = origin;
  line.end = origin.clone().add(direction.multiplyScalar(distance));

  // Find the intersections between this line and the reference image plane's four sides
  var rect = getRectangleFromImagePlane(referenceImagePlane);
  var intersections = lineRectangleIntersection(line, rect);

  // Return the intersections between this line and the reference image plane's sides
  // In order to draw the reference line from the target image.
  if (intersections.length !== 2) {
    return;
  }

  return {
    start: intersections[0],
    end: intersections[1]
  };
}

/***/ }),

/***/ "./util/roundToDecimal.js":
/*!********************************!*\
  !*** ./util/roundToDecimal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value, precision) {
  var multiplier = Math.pow(10, precision);

  return Math.round(value * multiplier) / multiplier;
};

/***/ }),

/***/ "./util/scroll.js":
/*!************************!*\
  !*** ./util/scroll.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, images) {
  var loop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var allowSkipping = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var toolData = (0, _toolState.getToolState)(element, 'stack');

  if (!toolData || !toolData.data || !toolData.data.length) {
    return;
  }

  var stackData = toolData.data[0];

  if (!stackData.pending) {
    stackData.pending = [];
  }

  var newImageIdIndex = stackData.currentImageIdIndex + images;

  if (loop) {
    var nbImages = stackData.imageIds.length;

    newImageIdIndex %= nbImages;
  } else {
    newImageIdIndex = (0, _clip2.default)(newImageIdIndex, 0, stackData.imageIds.length - 1);
  }

  if (allowSkipping) {
    (0, _scrollToIndex2.default)(element, newImageIdIndex);
  } else {
    var pendingEvent = {
      index: newImageIdIndex
    };

    stackData.pending.push(pendingEvent);
    scrollWithoutSkipping(stackData, pendingEvent, element);
  }
};

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _scrollToIndex = __webpack_require__(/*! ./scrollToIndex.js */ "./util/scrollToIndex.js");

var _scrollToIndex2 = _interopRequireDefault(_scrollToIndex);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _clip = __webpack_require__(/*! ./clip.js */ "./util/clip.js");

var _clip2 = _interopRequireDefault(_clip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollWithoutSkipping(stackData, pendingEvent, element) {
  if (stackData.pending[0] === pendingEvent) {
    if (stackData.currentImageIdIndex === pendingEvent.index) {
      stackData.pending.splice(stackData.pending.indexOf(pendingEvent), 1);

      if (stackData.pending.length > 0) {
        scrollWithoutSkipping(stackData, stackData.pending[0], element);
      }

      return;
    }

    var newImageHandler = function newImageHandler(event) {
      var index = stackData.imageIds.indexOf(event.detail.image.imageId);

      if (index === pendingEvent.index) {
        stackData.pending.splice(stackData.pending.indexOf(pendingEvent), 1);
        element.removeEventListener(_events2.default.NEW_IMAGE, newImageHandler);

        if (stackData.pending.length > 0) {
          scrollWithoutSkipping(stackData, stackData.pending[0], element);
        }
      }
    };

    element.addEventListener(_events2.default.NEW_IMAGE, newImageHandler);

    (0, _scrollToIndex2.default)(element, pendingEvent.index);
  }
}

/***/ }),

/***/ "./util/scrollToIndex.js":
/*!*******************************!*\
  !*** ./util/scrollToIndex.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, newImageIdIndex) {
  var toolData = (0, _toolState.getToolState)(element, 'stack');

  if (!toolData || !toolData.data || !toolData.data.length) {
    return;
  }

  var cornerstone = _externalModules2.default.cornerstone;
  // If we have more than one stack, check if we have a stack renderer defined
  var stackRenderer = void 0;

  if (toolData.data.length > 1) {
    var stackRendererData = (0, _toolState.getToolState)(element, 'stackRenderer');

    if (stackRendererData && stackRendererData.data && stackRendererData.data.length) {
      stackRenderer = stackRendererData.data[0];
    }
  }

  var stackData = toolData.data[0];

  // Allow for negative indexing
  if (newImageIdIndex < 0) {
    newImageIdIndex += stackData.imageIds.length;
  }

  var startLoadingHandler = _loadHandlerManager2.default.getStartLoadHandler();
  var endLoadingHandler = _loadHandlerManager2.default.getEndLoadHandler();
  var errorLoadingHandler = _loadHandlerManager2.default.getErrorLoadingHandler();

  function doneCallback(image) {
    if (stackData.currentImageIdIndex !== newImageIdIndex) {
      return;
    }

    // Check if the element is still enabled in Cornerstone,
    // If an error is thrown, stop here.
    try {
      // TODO: Add 'isElementEnabled' to Cornerstone?
      cornerstone.getEnabledElement(element);
    } catch (error) {
      return;
    }

    if (stackRenderer) {
      stackRenderer.currentImageIdIndex = newImageIdIndex;
      stackRenderer.render(element, toolData.data);
    } else {
      cornerstone.displayImage(element, image);
    }

    if (endLoadingHandler) {
      endLoadingHandler(element, image);
    }
  }

  function failCallback(error) {
    var imageId = stackData.imageIds[newImageIdIndex];

    if (errorLoadingHandler) {
      errorLoadingHandler(element, imageId, error);
    }
  }

  if (newImageIdIndex === stackData.currentImageIdIndex) {
    return;
  }

  if (startLoadingHandler) {
    startLoadingHandler(element);
  }

  var eventData = {
    newImageIdIndex: newImageIdIndex,
    direction: newImageIdIndex - stackData.currentImageIdIndex
  };

  stackData.currentImageIdIndex = newImageIdIndex;
  var newImageId = stackData.imageIds[newImageIdIndex];

  // Retry image loading in cases where previous image promise
  // Was rejected, if the option is set
  /*
     Const config = stackScroll.getConfiguration();
     TODO: Revisit this. It appears that Core's imageCache is not
    keeping rejected promises anywhere, so we have no way to know
    if something was previously rejected.
     if (config && config.retryLoadOnScroll === true) {
    }
  */

  // Convert the preventCache value in stack data to a boolean
  var preventCache = Boolean(stackData.preventCache);

  var imagePromise = void 0;

  if (preventCache) {
    imagePromise = cornerstone.loadImage(newImageId);
  } else {
    imagePromise = cornerstone.loadAndCacheImage(newImageId);
  }

  imagePromise.then(doneCallback, failCallback);
  // Make sure we kick off any changed download request pools
  _requestPoolManager2.default.startGrabbing();

  (0, _triggerEvent2.default)(element, _events2.default.STACK_SCROLL, eventData);
};

var _events = __webpack_require__(/*! ../events.js */ "./events.js");

var _events2 = _interopRequireDefault(_events);

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

var _toolState = __webpack_require__(/*! ../stateManagement/toolState.js */ "./stateManagement/toolState.js");

var _requestPoolManager = __webpack_require__(/*! ../requestPool/requestPoolManager.js */ "./requestPool/requestPoolManager.js");

var _requestPoolManager2 = _interopRequireDefault(_requestPoolManager);

var _loadHandlerManager = __webpack_require__(/*! ../stateManagement/loadHandlerManager.js */ "./stateManagement/loadHandlerManager.js");

var _loadHandlerManager2 = _interopRequireDefault(_loadHandlerManager);

var _triggerEvent = __webpack_require__(/*! ../util/triggerEvent.js */ "./util/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./util/setContextToDisplayFontSize.js":
/*!*********************************************!*\
  !*** ./util/setContextToDisplayFontSize.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (enabledElement, context, fontSize) {
  var fontScale = 0.1;

  _externalModules2.default.cornerstone.setToPixelCoordinateSystem(enabledElement, context, fontScale);
  // Return the font size to use
  var scaledFontSize = fontSize / enabledElement.viewport.scale / fontScale;
  // TODO: actually calculate this?
  var lineHeight = fontSize / enabledElement.viewport.scale / fontScale;

  return {
    fontSize: scaledFontSize,
    lineHeight: lineHeight,
    fontScale: fontScale
  };
};

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _externalModules2 = _interopRequireDefault(_externalModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./util/triggerEvent.js":
/*!******************************!*\
  !*** ./util/triggerEvent.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = triggerEvent;
/**
 * Trigger a CustomEvent
 *
 * @param {EventTarget} el The element or EventTarget to trigger the event upon
 * @param {String} type The event type name
 * @param {Object|null} detail=null The event data to be sent
 * @returns {Boolean} The return value is false if at least one event listener called preventDefault(). Otherwise it returns true.
 */
function triggerEvent(el, type) {
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var event = void 0;

  // This check is needed to polyfill CustomEvent on IE11-
  if (typeof window.CustomEvent === 'function') {
    event = new CustomEvent(type, {
      detail: detail,
      cancelable: true
    });
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(type, true, true, detail);
  }

  return el.dispatchEvent(event);
}

/***/ }),

/***/ "./version.js":
/*!********************!*\
  !*** ./version.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = '3.0.0-b.641';

/***/ })

/******/ });
});
//# sourceMappingURL=cornerstoneTools.js.map