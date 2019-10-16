import RpcFactory from './RpcFactory'
class VRController {
    handleRPC(rpc) {
        let methodName = rpc.method.split(".")[1]
        switch(methodName) {
            case "IsReady":
                return {rpc: RpcFactory.IsReadyResponse(rpc, true)}
            case "ChangeRegistration":
                return true
            case "AddCommand":
                return true
            case "DeleteCommand":
                return true
            case "PerformInteraction":
                return true
            default: 
                return false
        }
    }
}

let controller = new VRController ()
export default controller